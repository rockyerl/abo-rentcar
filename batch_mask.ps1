
. .\mask_helper.ps1

$baseSrc = "d:\work\abo-rentcar\extracted_media"
$baseDst = "d:\work\abo-rentcar\public\cars"

Mask-Plate -SrcPath "$baseSrc\WhatsApp Image 2026-11-15 at 12.40.24 PM (2).jpeg" -DstPath "$baseDst\brio-red-real.jpg" -X 650 -Y 1048 -Width 255 -Height 88 -Angle -6
