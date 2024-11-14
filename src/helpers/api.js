import { useState, useEffect } from "react";

export const useApi = (id) => {
  const [plan, setPlan] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await fetch('/planes.json');
        const data = await response.json();
        const selectedPlan = data.find((plan) => plan.id === id);
        setPlan(selectedPlan);
      } catch (error) {
        setError(error);
      }
    };

    fetchPlan();
  }, [id]);

  return { plan, error };
};
