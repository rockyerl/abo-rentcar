import { CarFleetItem, WA_NUMBER, COMPANY_NAME, BRAND_TAGLINE } from "./constants";

export interface BookingFormData {
  name: string;
  phone: string;
  carId: string;
  driverOption: "self-drive" | "with-chauffeur";
  startDate: string;
  endDate: string;
  durationDays: number;
  pickupLocation: string;
  customPickupAddress?: string;
  flightOrTrainNumber?: string;
  includeAirportMeet: boolean;
  notes?: string;
}

export interface BookingCalculationResult {
  dailyRate: number;
  totalDays: number;
  baseTotal: number;
  discountPercentage: number;
  discountAmount: number;
  finalTotal: number;
  formattedDailyRate: string;
  formattedBaseTotal: string;
  formattedDiscountAmount: string;
  formattedFinalTotal: string;
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateDaysBetween(startDateStr: string, endDateStr: string): number {
  if (!startDateStr || !endDateStr) return 1;
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
}

export function calculateBookingPrice(
  car: CarFleetItem,
  durationDays: number,
  driverOption: "self-drive" | "with-chauffeur"
): BookingCalculationResult {
  const days = Math.max(1, durationDays);

  // If rent duration > 2 days, use multi-day rate
  const ratePerDay =
    driverOption === "with-chauffeur"
      ? car.priceWithDriver
      : days > 2
        ? car.weekdayMultiDay
        : car.weekday1Day;

  const baseTotal = ratePerDay * days;

  // Additional reward discount for weekly rentals (>= 7 days)
  let discountPercentage = 0;
  if (days >= 7) {
    discountPercentage = 5;
  }

  const discountAmount = Math.round((baseTotal * discountPercentage) / 100);
  const finalTotal = baseTotal - discountAmount;

  return {
    dailyRate: ratePerDay,
    totalDays: days,
    baseTotal,
    discountPercentage,
    discountAmount,
    finalTotal,
    formattedDailyRate: formatRupiah(ratePerDay),
    formattedBaseTotal: formatRupiah(baseTotal),
    formattedDiscountAmount: formatRupiah(discountAmount),
    formattedFinalTotal: formatRupiah(finalTotal),
  };
}

export function generateB2CWhatsAppUrl(
  formData: BookingFormData,
  car: CarFleetItem,
  calc: BookingCalculationResult
): string {
  const effectiveLocation =
    formData.pickupLocation === "Lainnya (Isi Alamat Manual)" && formData.customPickupAddress
      ? `${formData.customPickupAddress} (Input Manual)`
      : formData.pickupLocation;

  const driverLabel =
    formData.driverOption === "with-chauffeur"
      ? "Layanan Plus Supir (With Driver)"
      : "Lepas Kunci (Self Drive)";

  const message = [
    `Halo *${COMPANY_NAME}*!`,
    `_${BRAND_TAGLINE}_`,
    "",
    "Saya ingin memesan rental mobil dengan detail berikut:",
    "",
    `👤 *Nama:* ${formData.name || "-"}`,
    `📱 *WhatsApp:* ${formData.phone || "-"}`,
    `🚗 *Pilihan Unit:* ${car.name} (${car.modelType} - Tahun ${car.year})`,
    `🔑 *Skema Rental:* ${driverLabel}`,
    `📅 *Periode Sewa:* ${formData.startDate} s/d ${formData.endDate} (${calc.totalDays} Hari)`,
    `📍 *Titik Jemput:* ${effectiveLocation}`,
    formData.flightOrTrainNumber
      ? `🚅 *No. Kereta / Penerbangan:* ${formData.flightOrTrainNumber}`
      : "",
    formData.includeAirportMeet
      ? "✨ *Permintaan Khusus:* Antar/Jemput Stasiun Whoosh Padalarang"
      : "",
    formData.notes ? `📝 *Catatan Tambahan:* ${formData.notes}` : "",
    "",
    "💰 *Estimasi Biaya:*",
    `• Tarif Harian: ${calc.formattedDailyRate}/hari`,
    calc.discountAmount > 0
      ? `• Diskon Durasi (${calc.discountPercentage}%): -${calc.formattedDiscountAmount}`
      : "",
    `• *Total Estimasi:* *${calc.formattedFinalTotal}*`,
    "",
    "Mohon bantu cek ketersediaan mobil untuk jadwal saya. Terima kasih!",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
