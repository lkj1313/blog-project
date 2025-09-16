import { useState, useCallback, useMemo } from "react";
import { validateAgreements, checkAllAgreements } from "./agreementValidation";

interface Agreements extends Record<string, boolean> {
  all: boolean;
  service: boolean;
  privacy: boolean;
  provision: boolean;
  inquiry: boolean;
  marketing: boolean;
}

export function useAgreementStep() {
  const [agreements, setAgreements] = useState<Agreements>({
    all: false,
    service: false,
    privacy: false,
    provision: false,
    inquiry: false,
    marketing: false,
  });

  const handleAllAgreement = useCallback((checked: boolean) => {
    setAgreements({
      all: checked,
      service: checked,
      privacy: checked,
      provision: checked,
      inquiry: checked,
      marketing: checked,
    });
  }, []);

  const handleIndividualAgreement = useCallback(
    (key: keyof Agreements, checked: boolean) => {
      const newAgreements = { ...agreements, [key]: checked };

      // 전체 동의 체크 여부 확인 (필수 약관들만 체크)
      const allChecked = checkAllAgreements(newAgreements);

      setAgreements({
        ...newAgreements,
        all: allChecked,
      });
    },
    [agreements]
  );

  const validation = useMemo(() => {
    return validateAgreements(agreements);
  }, [agreements]);

  const canProceed = useMemo(() => {
    return validation.isValid;
  }, [validation.isValid]);

  const resetAgreements = useCallback(() => {
    setAgreements({
      all: false,
      service: false,
      privacy: false,
      provision: false,
      inquiry: false,
      marketing: false,
    });
  }, []);

  return {
    agreements,
    canProceed,
    validation,
    handleAllAgreement,
    handleIndividualAgreement,
    resetAgreements,
  };
}
