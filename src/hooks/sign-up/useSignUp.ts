import { useSignUpProgress } from "./useSignUpProgress";
import { useScrollProgress } from "./useScrollProgress";
import { useSignUpForm } from "./useSignUpForm";

export function useSignUp() {
  const { progress, currentStep, handleProgressUpdate, updateProgress } =
    useSignUpProgress();
  const { showFixedProgress } = useScrollProgress();
  const { methods } = useSignUpForm();

  return {
    progress,
    currentStep,
    showFixedProgress,
    methods,
    handleProgressUpdate,
    updateProgress,
  };
}
