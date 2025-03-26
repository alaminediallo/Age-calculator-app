import { intervalToDuration } from "date-fns";
import { displayResult } from "./displayResult";
import { getInputValue } from "./getInputValue";
import { validateForm } from "./validateForm";

/**
 * This function calculates a person's age based on their inputted birthdate and displays the result.
 * @returns The function does not return anything, it has a return type of `void`.
 */
export function calculateAge(): void {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  const days = getInputValue("days");
  const months = getInputValue("months");
  const years = getInputValue("years");

  // Vérifier si le formulaire est valide
  if (
    !validateForm({
      days: days,
      months: months,
      years: years,
      currentYear: currentYear,
      currentMonth: currentMonth,
      currentDay: currentDay,
    })
  ) {
    return;
  }

  // Créer une date pour la date de naissance
  const birthDate = new Date(years, months - 1, days);

  // Calculer l'âge avec intervalToDuration de date-fns
  const duration = intervalToDuration({
    start: birthDate,
    end: currentDate,
  });

  // Extraire les composants de la durée
  const ageYears = duration.years || 0;
  const ageMonths = duration.months || 0;
  const ageDays = duration.days || 0;

  // Afficher les résultats
  displayResult(ageYears, ageMonths, ageDays);
}
