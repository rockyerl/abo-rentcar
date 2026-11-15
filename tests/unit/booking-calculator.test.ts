import { describe, it, expect } from "vitest";
import {
  calculateBookingPrice,
  calculateDaysBetween,
  formatRupiah,
  generateB2CWhatsAppUrl,
  BookingFormData,
} from "../../src/lib/booking-calculator";
import { CARS } from "../../src/lib/constants";

describe("Booking Calculator - SUNDAWA Quality Standard", () => {
  const zenix = CARS[0]; // Innova Zenix Hybrid (weekday 1 hari: 699.000, >2 hari: 649.000)

  it("calculates 1-day self drive correctly with 1-day rate and 0% discount", () => {
    const calc = calculateBookingPrice(zenix, 1, "self-drive");
    expect(calc.totalDays).toBe(1);
    expect(calc.dailyRate).toBe(699000);
    expect(calc.baseTotal).toBe(699000);
    expect(calc.discountPercentage).toBe(0);
    expect(calc.discountAmount).toBe(0);
    expect(calc.finalTotal).toBe(699000);
  });

  it("calculates 3-day self drive and applies multi-day tier rate (649.000/hari)", () => {
    const calc = calculateBookingPrice(zenix, 3, "self-drive");
    expect(calc.totalDays).toBe(3);
    expect(calc.dailyRate).toBe(649000);
    const expectedBase = 649000 * 3;
    expect(calc.baseTotal).toBe(expectedBase);
    expect(calc.discountPercentage).toBe(0); // under 7 days
    expect(calc.finalTotal).toBe(expectedBase);
  });

  it("calculates 7-day self drive and applies 5% weekly discount", () => {
    const calc = calculateBookingPrice(zenix, 7, "self-drive");
    expect(calc.totalDays).toBe(7);
    expect(calc.dailyRate).toBe(649000);
    expect(calc.discountPercentage).toBe(5);
    const expectedBase = 649000 * 7;
    expect(calc.discountAmount).toBe(Math.round((expectedBase * 5) / 100));
    expect(calc.finalTotal).toBe(expectedBase - calc.discountAmount);
  });

  it("calculates date difference properly", () => {
    const days = calculateDaysBetween("2026-11-20", "2026-11-23");
    expect(days).toBe(3);
  });

  it("formats Indonesian Rupiah properly", () => {
    const formatted = formatRupiah(1000000);
    expect(formatted).toContain("1.000.000");
  });

  it("generates structured WhatsApp booking URL including manual pickup location", () => {
    const formData: BookingFormData = {
      name: "Budi Pratama",
      phone: "08123456789",
      carId: zenix.id,
      driverOption: "self-drive",
      startDate: "2026-11-20",
      endDate: "2026-11-23",
      durationDays: 3,
      pickupLocation: "Lainnya (Isi Alamat Manual)",
      customPickupAddress: "Hotel Padma Ciumbuleuit Bandung",
      flightOrTrainNumber: "Whoosh G120",
      includeAirportMeet: true,
      notes: "Mobil wangi ya",
    };

    const calc = calculateBookingPrice(zenix, 3, "self-drive");
    const waUrl = generateB2CWhatsAppUrl(formData, zenix, calc);

    expect(waUrl).toContain("https://wa.me/6282130554260");
    expect(waUrl).toContain(encodeURIComponent("Budi Pratama"));
    expect(waUrl).toContain(encodeURIComponent("Hotel Padma Ciumbuleuit Bandung (Input Manual)"));
    expect(waUrl).toContain(encodeURIComponent("Whoosh G120"));
    expect(waUrl).toContain(encodeURIComponent("cek ketersediaan mobil"));
  });
});
