import React from 'react';
import { View, Text } from 'react-native';
import { VictoryPie } from 'victory-native';
import { COLORS } from '../constants/colors';

export default function CategoryChart({ transactions }) {
  // Group transactions by category and sum amounts
  const categoryTotals = transactions.reduce((acc, tx) => {
    const cat = tx.category || 'Other';
    acc[cat] = (acc[cat] || 0) + Math.abs(Number(tx.amount));
    return acc;
  }, {});

  // Prepare data for VictoryPie
  const chartData = Object.keys(categoryTotals).map(cat => ({
    x: cat,
    y: categoryTotals[cat],
  }));

  return (
    <View style={{ alignItems: 'center', marginVertical: 24 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>Spending by Category</Text>
      <VictoryPie
        data={chartData}
        colorScale={[COLORS.expense, COLORS.income, '#6a11cb', '#2575fc', '#ffb347', '#e0e0e0']}
        innerRadius={50}
        labelRadius={80}
        style={{ labels: { fontSize: 14, fill: '#333' } }}
        width={320}
        height={320}
      />
    </View>
  );
}
