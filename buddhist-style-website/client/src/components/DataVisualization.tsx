import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

/**
 * Design Philosophy: Zen Minimalism
 * - Subtle color palette matching the overall design
 * - Minimal grid lines and decorations
 * - Elegant typography and spacing
 */

export function TimelineChart() {
  const data = [
    { year: 1635, event: '顏元出生', value: 1 },
    { year: 1656, event: '開始學習', value: 2 },
    { year: 1661, event: '轉向朱學', value: 3 },
    { year: 1668, event: '批判理學', value: 4 },
    { year: 1690, event: '著述《四存編》', value: 5 },
    { year: 1704, event: '顏元去世', value: 6 },
  ];

  return (
    <div className="w-full h-80 md:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
          <XAxis dataKey="year" stroke="#A89968" />
          <YAxis stroke="#A89968" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FAFAF8',
              border: '1px solid #E8E4DC',
              borderRadius: '4px',
            }}
            cursor={{ stroke: '#A89968' }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#A89968"
            dot={{ fill: '#A89968', r: 5 }}
            activeDot={{ r: 7 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function TheoryComparison() {
  const data = [
    { name: '朱熹理學', 理氣二分: 85, 人性本善: 80, 身體規訓: 40 },
    { name: '顏元學說', 理氣二分: 20, 人性本善: 95, 身體規訓: 90 },
    { name: '王陽明學', 理氣二分: 60, 人性本善: 90, 身體規訓: 65 },
  ];

  return (
    <div className="w-full h-80 md:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
          <XAxis dataKey="name" stroke="#A89968" />
          <YAxis stroke="#A89968" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FAFAF8',
              border: '1px solid #E8E4DC',
              borderRadius: '4px',
            }}
          />
          <Legend />
          <Bar dataKey="理氣二分" fill="#B8C5A6" />
          <Bar dataKey="人性本善" fill="#A89968" />
          <Bar dataKey="身體規訓" fill="#8B7355" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RitualImportance() {
  const data = [
    { name: '冠禮', value: 20, color: '#A89968' },
    { name: '婚禮', value: 35, color: '#B8C5A6' },
    { name: '喪禮', value: 25, color: '#8B7355' },
    { name: '祭祀', value: 20, color: '#D4C5B0' },
  ];

  return (
    <div className="w-full h-80 md:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name} ${value}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#FAFAF8',
              border: '1px solid #E8E4DC',
              borderRadius: '4px',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function InfluenceNetwork() {
  const data = [
    { name: '陸王學派', influence: 30 },
    { name: '朱子學派', influence: 50 },
    { name: '顏元思想', influence: 65 },
    { name: '清代實學', influence: 75 },
    { name: '現代新儒學', influence: 60 },
  ];

  return (
    <div className="w-full h-80 md:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
          <XAxis dataKey="name" stroke="#A89968" angle={-45} textAnchor="end" height={80} />
          <YAxis stroke="#A89968" label={{ value: '影響力程度', angle: -90, position: 'insideLeft' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FAFAF8',
              border: '1px solid #E8E4DC',
              borderRadius: '4px',
            }}
          />
          <Line
            type="monotone"
            dataKey="influence"
            stroke="#A89968"
            dot={{ fill: '#A89968', r: 6 }}
            activeDot={{ r: 8 }}
            strokeWidth={3}
            name="思想影響力"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
