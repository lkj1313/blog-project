import { REQUIRED_AGREEMENT_IDS } from "../../components/sign-up/constants/agreementItems";

export interface AgreementValidationResult {
  isValid: boolean;
  missingAgreements: string[];
  progress: number;
}

export function validateAgreements(
  agreements: Record<string, boolean>
): AgreementValidationResult {
  const missingAgreements = REQUIRED_AGREEMENT_IDS.filter(
    (id) => !agreements[id]
  );

  const isValid = missingAgreements.length === 0;
  const progress = Math.round(
    ((REQUIRED_AGREEMENT_IDS.length - missingAgreements.length) /
      REQUIRED_AGREEMENT_IDS.length) *
      100
  );

  return {
    isValid,
    missingAgreements,
    progress,
  };
}

export function checkAllAgreements(
  agreements: Record<string, boolean>
): boolean {
  return REQUIRED_AGREEMENT_IDS.every((id) => agreements[id]);
}

export function getAgreementSummary(agreements: Record<string, boolean>) {
  const requiredCount = REQUIRED_AGREEMENT_IDS.length;
  const optionalCount = Object.keys(agreements).length - requiredCount;

  const checkedRequired = REQUIRED_AGREEMENT_IDS.filter(
    (id) => agreements[id]
  ).length;
  const checkedOptional = Object.keys(agreements)
    .filter((id) => !REQUIRED_AGREEMENT_IDS.includes(id))
    .filter((id) => agreements[id]).length;

  return {
    required: { total: requiredCount, checked: checkedRequired },
    optional: { total: optionalCount, checked: checkedOptional },
    totalProgress: Math.round((checkedRequired / requiredCount) * 100),
  };
}
