import React, { ReactNode } from 'react';
import { RecipeGlicFilterProvider } from './RecipeGlicFilterProvider';
import { RecipeMealFilterProvider } from './RecipeMealFilterProvider';
import { MealHeightProvider } from './MealHeightProvider';
import { GlicRateProvider } from './GlicRateHeightProvider';

const CombinedProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MealHeightProvider>
      <GlicRateProvider>
        <RecipeMealFilterProvider>
          <RecipeGlicFilterProvider>{children}</RecipeGlicFilterProvider>
        </RecipeMealFilterProvider>
      </GlicRateProvider>
    </MealHeightProvider>
  );
};

export default CombinedProvider;
