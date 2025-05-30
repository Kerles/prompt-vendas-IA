import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, ShoppingCart, MapPin, Calendar } from 'lucide-react';
import Papa from 'papaparse';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dados hardcoded baseados no CSV fornecido
    const rawData = [
      {
        "OrderID": "PIS-1001",
        "Data": "15/05/2024",
        "Produto": "Sorvete de Pistache",
        "Categoria": "Sobremesa",
        "Quantidade": "12",
        "Preço Unitário": "R$ 24,90",
        "Valor Total": "R$ 298,80",
        "ClienteID": "CL203",
        "Região": "Sudeste",
        "Canal": "Online",
        "Custo Unitário": "R$ 12,50",
        "Margem Bruta": "R$ 12,40",
        "Mês": "Maio",
        "Trimestre": "Q2"
      },
      {
        "OrderID": "PIS-1002",
        "Data": "16/05/2024",
        "Produto": "Barra de Cereal Pistache",
        "Categoria": "Snack",
        "Quantidade": "50",
        "Preço Unitário": "R$ 8,50",
        "Valor Total": "R$ 425,00",
        "ClienteID": "CL412",
        "Região": "Nordeste",
        "Canal": "Loja Física",
        "Custo Unitário": "R$ 4,20",
        "Margem Bruta": "R$ 4,30",
        "Mês": "Maio",
        "Trimestre": "Q2"
      },
      {
        "OrderID": "PIS-1003",
        "Data": "17/05/2024",
        "Produto": "Cookies de Pistache",
        "Categoria": "Snack",
        "Quantidade": "30",
        "Preço Unitário": "R$ 6,90",
        "Valor Total": "R$ 207,00",
        "ClienteID": "CL789",
        "Região": "Sul",
        "Canal": "Online",
        "Custo Unitário": "R$ 3,50",
        "Margem Bruta": "R$ 3,40",
        "Mês": "Maio",
        "Trimestre": "Q2"
      },
      {
        "OrderID": "PIS-1004",
        "Data": "05/01/2024",
        "Produto": "Biscoitos de Pistache",
        "Categoria": "Alimentação",
        "Quantidade": "30",
        "Preço Unitário": "R$ 15,00",
        "Valor Total": "R$ 450,00",
        "ClienteID": "CL002",
        "Região": "Sudeste",
        "Canal": "Loja Física",
        "Custo Unitário": "R$ 7,50",
        "Margem Bruta": "R$ 7,50",
        "Mês": "Janeiro",
        "Trimestre": "Q1"
      },
      {
        "OrderID": "PIS-1005",
        "Data": "15/01/2024",
        "Produto": "Brigadeiro de Pistache",
        "Categoria": "Doce",
        "Quantidade": "40",
        "Preço Unitário": "R$ 5,00",
        "Valor Total": "R$ 200,00",
        "ClienteID": "CL004",
        "Região": "Nordeste",
        "Canal": "Loja Física",
        "Custo Unitário": "R$ 2,50",
        "Margem Bruta": "R$ 2,50",
        "Mês": "Janeiro",
        "Trimestre": "Q1"
      },
      {
        "OrderID": "PIS-1006",
        "Data": "01/01/2024",
        "Produto": "Pasta de Pistache",
        "Categoria": "Alimentação",
        "Quantidade": "120",
        "Preço Unitário": "R$ 20,00",
        "Valor Total": "R$ 2.400,00",
        "ClienteID": "CL001",
        "Região": "Sudeste",
        "Canal": "Online",
        "Custo Unitário": "R$ 10,00",
        "Margem Bruta": "R$ 10,00",
        "Mês": "Janeiro",
        "Trimestre": "Q1"
      },
      {
        "OrderID": "PIS-1007",
        "Data": "01/04/2024",
        "Produto": "Chocolate com Pistache",
        "Categoria": "Confeitaria",
        "Quantidade": "180",
        "Preço Unitário": "R$ 20,00",
        "Valor Total": "R$ 3.600,00",
        "ClienteID": "CL002",
        "Região": "Centro-Oeste",
        "Canal": "Loja Física",
        "Custo Unitário": "R$ 10,00",
        "Margem Bruta": "R$ 10,00",
        "Mês": "Abril",
        "Trimestre": "Q2"
      },
      {
        "OrderID": "PIS-1008",
        "Data": "01/07/2024",
        "Produto": "Creme de Pistache",
        "Categoria": "Alimentação",
        "Quantidade": "140",
        "Preço Unitário": "R$ 20,00",
        "Valor Total": "R$ 2.800,00",
        "ClienteID": "CL003",
        "Região": "Sudeste",
        "Canal": "Online",
        "Custo Unitário": "R$ 8,57",
        "Margem Bruta": "R$ 11,43",
        "Mês": "Julho",
        "Trimestre": "Q3"
      },
      {
        "OrderID": "PIS-1009",
        "Data": "01/09/2024",
        "Produto": "Bolo de Pistache",
        "Categoria": "Confeitaria",
        "Quantidade": "130",
        "Preço Unitário": "R$ 20,00",
        "Valor Total": "R$ 2.600,00",
        "ClienteID": "CL004",
        "Região": "Nordeste",
        "Canal": "Loja Física",
        "Custo Unitário": "R$ 10,00",
        "Margem Bruta": "R$ 10,00",
        "Mês": "Setembro",
        "Trimestre": "Q3"
      },
      {
        "OrderID": "PIS-1010",
        "Data": "01/10/2024",
        "Produto": "Mix de Frutas com Pistache",
        "Categoria": "Snacks",
        "Quantidade": "200",
        "Preço Unitário": "R$ 20,00",
        "Valor Total": "R$ 4.000,00",
        "ClienteID": "CL005",
        "Região": "Centro-Oeste",
        "Canal": "Online",
        "Custo Unitário": "R$ 7,50",
        "Margem Bruta": "R$ 12,50",
        "Mês": "Outubro",
        "Trimestre": "Q4"
      }
    ];

    const processedData = rawData.map(row => ({
      ...row,
      Quantidade: parseInt(row.Quantidade?.toString().replace(/[^\d]/g, '') || '0'),
      ValorTotal: parseFloat(row['Valor Total']?.toString().replace(/[^\d,.-]/g, '').replace(',', '.') || '0'),
      PrecoUnitario: parseFloat(row['Preço Unitário']?.toString().replace(/[^\d,.-]/g, '').replace(',', '.') || '0'),
      CustoUnitario: parseFloat(row['Custo Unitário']?.toString().replace(/[^\d,.-]/g, '').replace(',', '.') || '0'),
      MargemBruta: parseFloat(row['Margem Bruta']?.toString().replace(/[^\d,.-]/g, '').replace(',', '.') || '0')
    }));

    setData(processedData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Carregando dados...</div>
      </div>
    );
  }

  // Análises dos dados
  const totalVendas = data.reduce((sum, item) => sum + item.ValorTotal, 0);
  const totalQuantidade = data.reduce((sum, item) => sum + item.Quantidade, 0);

  // Vendas por Região
  const vendasPorRegiao = data.reduce((acc, item) => {
    const regiao = item['Região']?.trim() || 'Não informado';
    acc[regiao] = (acc[regiao] || 0) + item.ValorTotal;
    return acc;
  }, {});

  const dadosRegiao = Object.entries(vendasPorRegiao).map(([regiao, valor]) => ({
    regiao,
    valor,
    valorFormatado: `R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
  }));

  // Vendas por Canal
  const vendasPorCanal = data.reduce((acc, item) => {
    const canal = item.Canal?.trim() || 'Não informado';
    acc[canal] = (acc[canal] || 0) + item.ValorTotal;
    return acc;
  }, {});

  const dadosCanal = Object.entries(vendasPorCanal).map(([canal, valor]) => ({
    canal,
    valor,
    valorFormatado: `R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
  }));

  // Vendas por Trimestre
  const vendasPorTrimestre = data.reduce((acc, item) => {
    const trimestre = item.Trimestre?.trim() || 'Não informado';
    acc[trimestre] = (acc[trimestre] || 0) + item.ValorTotal;
    return acc;
  }, {});

  const dadosTrimestre = Object.entries(vendasPorTrimestre)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([trimestre, valor]) => ({
      trimestre,
      valor,
      valorFormatado: `R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
    }));

  // Top Produtos
  const vendasPorProduto = data.reduce((acc, item) => {
    const produto = item.Produto?.trim() || 'Não informado';
    acc[produto] = (acc[produto] || 0) + item.ValorTotal;
    return acc;
  }, {});

  const topProdutos = Object.entries(vendasPorProduto)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([produto, valor]) => ({
      produto: produto.length > 20 ? produto.substring(0, 20) + '...' : produto,
      valor,
      valorFormatado: `R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
    }));

  const cores = ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">{label}</p>
          <p className="text-purple-600">
            Valor: R$ {payload[0].value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Dashboard de Vendas - Produtos de Pistache
          </h1>
          <p className="text-gray-600">Análise completa do desempenho de vendas</p>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total de Vendas</p>
                <p className="text-2xl font-bold text-green-600">
                  R$ {totalVendas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Quantidade Total</p>
                <p className="text-2xl font-bold text-blue-600">
                  {totalQuantidade.toLocaleString('pt-BR')} unidades
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Produtos Diferentes</p>
                <p className="text-2xl font-bold text-purple-600">
                  {Object.keys(vendasPorProduto).length}
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Vendas por Região */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-purple-600" />
              Vendas por Região
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dadosRegiao}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="regiao" 
                  stroke="#666"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#666"
                  fontSize={12}
                  tickFormatter={(value) => `R$ ${(value/1000).toFixed(0)}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="valor" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Vendas por Canal */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Distribuição por Canal de Vendas
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dadosCanal}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="valor"
                  label={({ canal, valor }) => `${canal}: R$ ${(valor/1000).toFixed(1)}k`}
                >
                  {dadosCanal.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 'Valor']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Evolução Trimestral */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Evolução Trimestral
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dadosTrimestre}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="trimestre" stroke="#666" fontSize={12} />
                <YAxis 
                  stroke="#666" 
                  fontSize={12}
                  tickFormatter={(value) => `R$ ${(value/1000).toFixed(0)}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="valor" 
                  stroke="#06B6D4" 
                  strokeWidth={3}
                  dot={{ fill: '#06B6D4', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Top 5 Produtos */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Top 5 Produtos
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topProdutos} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  type="number" 
                  stroke="#666"
                  fontSize={12}
                  tickFormatter={(value) => `R$ ${(value/1000).toFixed(0)}k`}
                />
                <YAxis 
                  type="category" 
                  dataKey="produto" 
                  stroke="#666"
                  fontSize={12}
                  width={120}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="valor" fill="#10B981" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Footer com insights */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Principais Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-800">Região Destaque</h4>
              <p className="text-sm text-purple-600 mt-1">
                {dadosRegiao.sort((a, b) => b.valor - a.valor)[0]?.regiao} lidera com {dadosRegiao.sort((a, b) => b.valor - a.valor)[0]?.valorFormatado}
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800">Canal Preferido</h4>
              <p className="text-sm text-blue-600 mt-1">
                {dadosCanal.sort((a, b) => b.valor - a.valor)[0]?.canal} representa a maior fatia
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800">Produto Top</h4>
              <p className="text-sm text-green-600 mt-1">
                {Object.entries(vendasPorProduto).sort(([,a], [,b]) => b - a)[0]?.[0]} é o mais vendido
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;