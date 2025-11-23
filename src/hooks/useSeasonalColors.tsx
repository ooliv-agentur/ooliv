// Simplified hook - no longer uses seasonal colors
// Design system uses fixed turquoise #0BC3C3

export const useSeasonalColors = () => {
  return {
    monthColor: {
      name: 'Turquoise',
      primary: '179 69% 47%',
      complementary: '179 65% 40%',
      gradient: 'none',
      psychology: 'Professional, trustworthy, innovative'
    },
    seasonColor: {
      name: 'Turquoise',
      secondary: '179 69% 47%',
      tertiary: '179 60% 85%'
    },
    currentMonth: new Date().getMonth() + 1,
    allMonthlyColors: {}
  };
};
