
Add-Type -AssemblyName System.Drawing

function Mask-Plate {
    param(
        [string]$SrcPath,
        [string]$DstPath,
        [int]$X,
        [int]$Y,
        [int]$Width,
        [int]$Height,
        [float]$Angle = 0,
        [string]$RotateFlip = $null
    )
    
    $bmp = [System.Drawing.Bitmap]::FromFile($SrcPath)
    
    if ($RotateFlip) {
        $rf = [System.Drawing.RotateFlipType]::$RotateFlip
        $bmp.RotateFlip($rf)
    }
    
    $outputBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height)
    $g = [System.Drawing.Graphics]::FromImage($outputBmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
    $g.DrawImage($bmp, 0, 0, $bmp.Width, $bmp.Height)
    
    $state = $g.Save()
    
    [float]$centerX = [float]$X + ([float]$Width / 2.0)
    [float]$centerY = [float]$Y + ([float]$Height / 2.0)
    $g.TranslateTransform($centerX, $centerY)
    if ($Angle -ne 0) {
        $g.RotateTransform($Angle)
    }
    
    [float]$w = [float]$Width
    [float]$h = [float]$Height
    [float]$halfW = $w / 2.0
    [float]$halfH = $h / 2.0
    
    # Background brush (Deep Obsidian / Black Carbon)
    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 12, 14, 18))
    $g.FillRectangle($bgBrush, -$halfW, -$halfH, $w, $h)
    
    # Gold border
    [float]$penWidth = [Math]::Max(2.0, [float]($h * 0.045))
    $goldPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(212, 160, 23), $penWidth)
    $g.DrawRectangle($goldPen, -$halfW, -$halfH, $w, $h)
    
    $innerPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(60, 255, 255, 255), 1.0)
    $g.DrawRectangle($innerPen, -$halfW + 2.0, -$halfH + 2.0, $w - 4.0, $h - 4.0)
    
    # Text font size
    $fontFamily = New-Object System.Drawing.FontFamily("Arial")
    [float]$fontSize = [Math]::Min([float]($h * 0.38), [float]($w / 11.0))
    $font = New-Object System.Drawing.Font($fontFamily, $fontSize, [System.Drawing.FontStyle]::Bold)
    $goldTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(235, 195, 85))
    
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    
    $drawRect = [System.Drawing.RectangleF]::FromLTRB(-$halfW, -$halfH, $halfW, $halfH)
    $g.DrawString("ABO RENT CAR", $font, $goldTextBrush, $drawRect, $sf)
    
    $g.Restore($state)
    
    $g.Dispose()
    $bmp.Dispose()
    
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)
    
    $outputBmp.Save($DstPath, $codec, $encoderParams)
    $outputBmp.Dispose()
    Write-Output "Saved masked image to $DstPath"
}
