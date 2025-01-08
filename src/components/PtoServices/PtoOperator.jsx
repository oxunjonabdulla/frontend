import {
  Box,
  Container,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  useToast,
} from "@chakra-ui/react";
import { PtoAddTrain } from "./PtoAddTrain";
import { PtoCompleks } from "./PtoCompleks";
import { useForm } from "react-hook-form";
import UserApi from "../../Service/module/userModule.api";
import { useState } from "react";
import { useEffect } from "react";

const steps = [
  { title: "VU-23", description: "Qo'shish" },
  { title: "Vagon", description: "komplektatsiyasi" },
];

export const PtoOperator = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const { response, error } = await new UserApi().postCarriage(data);
    setLoading(false);

    if (response) {
      toast({
        status: "success",
        title: "Vagon muvafaqiyatli yaratildi",
        duration: 6000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });

      JSON.stringify(
        localStorage.setItem("carriage_number", response?.data?.carriage_number)
      );
      setActiveStep(1);
    }
    if (error) {
      setError(true);
      toast({
        status: "error",
        title: error?.carriage_number,
        duration: 6000,
        isClosable: true,
        position: "top-right",
        fontSize: "7px",
      });
    }
  };

  const renderComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <PtoAddTrain
            register={register}
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            loading={loading}
            errors={errors}
          />
        );
      case 1:
        return <PtoCompleks setActiveStep={setActiveStep} />;
      default:
        return null;
    }
  };
  useEffect(() => {
    if (localStorage.getItem("carriage_number")) setActiveStep(1);
  }, [setActiveStep]);
  return (
    <Container maxW={"container.xl"}>
      <Stepper
        size="md"
        mt="12"
        maxW={"container.md"}
        colorScheme="teal"
        mx={"auto"}
        index={activeStep}
        as="div"
        bg={"#ffff"}
        my={8}
        p={4}
        rounded={"lg"}
        shadow={"lg"}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Box
        as="div"
        mt={12}
        bg={"#ffff"}
        my={8}
        p={8}
        mx="auto"
        rounded={"lg"}
        shadow={"lg"}
      >
        {renderComponent()}
      </Box>
    </Container>
  );
};
