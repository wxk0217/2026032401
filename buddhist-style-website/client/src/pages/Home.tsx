import { useState, useEffect } from 'react';
import { ChevronDown, Smartphone, Tablet, Monitor } from 'lucide-react';
import { TimelineChart, TheoryComparison, RitualImportance, InfluenceNetwork } from '@/components/DataVisualization';

/**
 * Design Philosophy: Zen Minimalism
 * - Large hero section with ink wash background
 * - Generous whitespace and vertical rhythm
 * - Dropdown navigation for sections
 * - Responsive device preview toggle
 * - Smooth animations and transitions
 * - Data visualizations with subtle colors
 */

interface Section {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  chart?: 'timeline' | 'comparison' | 'ritual' | 'influence';
}

const sections: Section[] = [
  {
    id: 'overview',
    title: '概述',
    subtitle: '佛教小說集的編纂與意義',
    content: `《佛教小說集》由朱橋編輯，佛教文化出版社於 1960 年 11 月出版。這部作品集合了當時臺灣文壇對佛教題材的多元創作與詮釋，共收錄 32 篇故事，涵蓋了僧尼、軍中作家、虔誠信徒與普通作家的創作視角。

本集合展現了佛教文化在戰後臺灣文學中的重要地位，反映了不同身分與背景的作者如何透過小說形式詮釋佛教哲理、因果報應、慈悲精神與人生智慧。這些作品既有對佛經故事的改編，也有融入個人經驗的創新創作，呈現出佛教思想與現實生活的多重對話。`
  },
  {
    id: 'classification',
    title: '故事分類體系',
    subtitle: '多元的詮釋與創作方式',
    content: `《佛教小說集》的故事可從多個角度進行分類。按創作性質，包括新創作題材、融合個人經驗、改編佛教故事等；按佛教內涵深度，分為佛教故事改編、佛教哲理和戒律、果報思想等類型；按敘述結構，則有佛、僧人、寺廟對情節的推進作用，或作為背景與敘述填充等不同層次。

從作者身分來看，收錄作品包括 5 位僧尼、13 位曾任軍職者、5 位虔誠信徒與 11 位普通作家。其中僧尼作者的佛教程度最高（100%），如摩迦（星雲）、常覺、自立等人的作品深入探討佛教哲理與戒律。軍中作家則多以佛教題材為背景，融入時代關懷與人文思考。`,
    chart: 'comparison'
  },
  {
    id: 'authors',
    title: '作者與創作背景',
    subtitle: '不同身分視角的佛教詮釋',
    content: `本集合的 32 篇作品來自不同身分的作者。僧尼作者（5 人）以佛教哲理與戒律為主要創作內容，其中星雲大師（筆名摩迦）的《不同的愛》等作品深入淺出地闡述佛教思想。

軍中作家（13 人）佔比最高，他們多以佛教故事與寺廟為背景，融入人生感悟與時代背景。虔誠信徒（5 人）則透過個人信仰經驗創作，將佛法與日常生活相結合。普通作家（11 人）則以多元的創意視角詮釋佛教題材，呈現佛教在文化層面的廣泛影響。

這樣的作者構成反映了戰後臺灣社會中，佛教信仰與文化創作的多元參與者，以及佛教思想在不同社會階層的滲透與影響。`,
    chart: 'ritual'
  },
  {
    id: 'themes',
    title: '主要主題與意蘊',
    subtitle: '佛教思想在文學中的呈現',
    content: `《佛教小說集》中的故事圍繞多個核心主題展開。首先是因果報應思想，透過具體的人物遭遇與命運轉折，詮釋佛教的業報觀念。其次是慈悲精神與道德修養，許多作品強調布施、寬恕與度化的重要性。

第三個重要主題是出家與還俗的人生抉擇，反映了佛教修行與世俗生活的張力。第四是寺廟與僧侶在故事中的角色，他們常成為故事的轉折點，代表智慧與救贖的力量。最後是人間佛教的理想，許多作品展現佛法如何應用於現實生活，解決人生的困境與迷茫。

這些主題的交織呈現，使得《佛教小說集》不僅是宗教文學的典範，更是戰後臺灣文化認同與精神追尋的重要記錄。`
  },
  {
    id: 'context',
    title: '時代背景與文化意義',
    subtitle: '反共文學與戰鬥文藝的脈絡',
    content: `《佛教小說集》的出版背景與 1950 年代臺灣的文化政治密切相關。當時的「反共文學」與「戰鬥文藝」運動正在進行，許多軍中作家透過創作參與這一文化實踐。佛教題材在此脈絡中，既承載了傳統文化的延續，也反映了戰後臺灣社會對精神寄託與人文價值的追求。

1955 年戰鬥文藝口號的提出標示著反共文學的挫敗，1956 年《文藝創作》停刊與文獎會解散更加深了這一轉變。在這樣的背景下，佛教小說集的出版可視為對更深層人文關懷的回歸，以及對宗教信仰在文化中角色的重新思考。

這部作品集合因此具有雙重意義：一方面記錄了特定時代的文學創作實踐，另一方面也展現了佛教思想在現代臺灣文化中的持久生命力與廣泛影響。`
  },
  {
    id: 'analysis',
    title: '統計分析',
    subtitle: '作者身分與佛教程度的關聯',
    content: `根據統計數據，作者身分與其創作中的佛教程度呈現有趣的相關性。僧尼作者（5 人）中，100% 的作品具有高度的佛教程度，其中 80% 涉及佛教哲理與戒律。軍中作家（13 人）中，46% 的作品具有中高度的佛教程度，但大多數作品（77%）中佛、僧人、寺廟主要作為背景或敘述填充。

虔誠信徒（5 人）中，60% 的作品具有中高度的佛教程度，20% 涉及佛教哲理。普通作家（11 人）中，45% 的作品具有中高度的佛教程度，19% 涉及佛教哲理。

值得注意的是，反共愛國的主題在軍中作家的作品中最為明顯（31%），而在僧尼、虔誠信徒與普通作家的作品中則相對較少。這反映了不同身分背景的作者在創作動機與關懷焦點上的差異，以及佛教題材在不同社會群體中的不同意義。`,
    chart: 'influence'
  }
];

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');
  const [deviceView, setDeviceView] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getDeviceWidth = () => {
    switch (deviceView) {
      case 'mobile':
        return 'max-w-sm';
      case 'tablet':
        return 'max-w-2xl';
      case 'desktop':
        return 'max-w-4xl';
    }
  };

  const renderChart = (chartType?: string) => {
    switch (chartType) {
      case 'timeline':
        return <TimelineChart />;
      case 'comparison':
        return <TheoryComparison />;
      case 'ritual':
        return <RitualImportance />;
      case 'influence':
        return <InfluenceNetwork />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-bronze-gold to-sage transition-all duration-300 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663161794951/DVtZ7BdMyyW8sZVwFy5dxB/hero-background-2Er8E6QFQuZLC5DhyCPaWW.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 container text-center px-4 md:px-8">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 opacity-60 animate-fade-in-up">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663161794951/DVtZ7BdMyyW8sZVwFy5dxB/zen-circle-pattern-L9eyUNKA6FC2YHfH2MmujW.webp"
                alt="Zen Circle"
                className="w-full h-full"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-charcoal animate-fade-in-up">
            佛教小說集
          </h1>

          <p className="text-xl md:text-2xl text-charcoal/70 mb-4 max-w-2xl mx-auto animate-fade-in-up">
            戰後臺灣佛教文學的多元詮釋
          </p>

          <p className="text-base md:text-lg text-charcoal/60 max-w-xl mx-auto mb-12 animate-fade-in-up">
            朱橋編 • 佛教文化出版社 • 1960 年 11 月
          </p>

          <div className="flex justify-center animate-fade-in-up">
            <ChevronDown className="w-8 h-8 text-bronze-gold animate-bounce" />
          </div>
        </div>
      </section>

      {/* Device Preview Toggle */}
      <div className="fixed bottom-8 right-8 z-40 flex gap-3 bg-card rounded-lg p-3 shadow-lg border border-border">
        <button
          onClick={() => setDeviceView('mobile')}
          className={`p-2 rounded transition-zen ${
            deviceView === 'mobile'
              ? 'bg-accent text-accent-foreground'
              : 'bg-muted text-muted-foreground hover:bg-secondary'
          }`}
          title="Mobile View (手機)"
        >
          <Smartphone className="w-5 h-5" />
        </button>
        <button
          onClick={() => setDeviceView('tablet')}
          className={`p-2 rounded transition-zen ${
            deviceView === 'tablet'
              ? 'bg-accent text-accent-foreground'
              : 'bg-muted text-muted-foreground hover:bg-secondary'
          }`}
          title="Tablet View (平板)"
        >
          <Tablet className="w-5 h-5" />
        </button>
        <button
          onClick={() => setDeviceView('desktop')}
          className={`p-2 rounded transition-zen ${
            deviceView === 'desktop'
              ? 'bg-accent text-accent-foreground'
              : 'bg-muted text-muted-foreground hover:bg-secondary'
          }`}
          title="Desktop View (電腦)"
        >
          <Monitor className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${getDeviceWidth()} mx-auto px-4 md:px-8 py-8`}>
        {/* Navigation Dropdown */}
        <div className="mb-12 sticky top-20 z-30 bg-background/95 backdrop-blur-sm py-4">
          <div className="zen-card p-4">
            <label className="block text-sm font-semibold text-charcoal mb-3">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-bronze-gold" />
                章節導覽
              </span>
            </label>
            <select
              value={expandedSection || ''}
              onChange={(e) => setExpandedSection(e.target.value)}
              className="w-full px-4 py-2 bg-background border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-zen"
            >
              <option value="">選擇章節...</option>
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={section.id} className="animate-fade-in-up">
              {/* Divider */}
              {index > 0 && (
                <div className="zen-divider" />
              )}

              {/* Section */}
              <div className="zen-card cursor-pointer transition-zen" onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4">
                        <img
                          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663161794951/DVtZ7BdMyyW8sZVwFy5dxB/lotus-symbol-cCSvfjEisxyLvnKkMvvntN.webp"
                          alt="Lotus"
                          className="w-full h-full opacity-70"
                        />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-charcoal">
                        {section.title}
                      </h2>
                    </div>
                    {section.subtitle && (
                      <p className="text-charcoal/60 text-sm md:text-base ml-7">
                        {section.subtitle}
                      </p>
                    )}
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-bronze-gold flex-shrink-0 transition-transform duration-300 ${
                      expandedSection === section.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {/* Expanded Content */}
                {expandedSection === section.id && (
                  <div className="mt-6 pt-6 border-t border-border animate-fade-in-up">
                    {/* Text Content */}
                    <div className="prose prose-sm md:prose-base max-w-none text-charcoal/80 leading-relaxed space-y-4 mb-8">
                      {section.content.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="text-justify">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Chart */}
                    {section.chart && (
                      <div className="mt-8 pt-8 border-t border-border">
                        <h3 className="text-lg font-semibold text-charcoal mb-6">
                          {section.title === '概述' && '故事分類分布'}
                          {section.title === '故事分類體系' && '作者身分與佛教程度'}
                          {section.title === '作者與創作背景' && '作者身分構成'}
                          {section.title === '時代背景與文化意義' && '思想影響力演變'}
                        </h3>
                        <div className="bg-card rounded-lg p-4 md:p-6 border border-border">
                          {renderChart(section.chart)}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="zen-divider mt-16" />
        <div className="text-center py-12 text-charcoal/60">
          <p className="mb-4">《佛教小說集》</p>
          <p className="text-sm">
            編者：朱橋 | 出版社：佛教文化出版社 | 出版時間：1960 年 11 月
          </p>
          <p className="text-xs mt-4 opacity-50">
            本網站採用禪意極簡主義設計風格，融合佛教美學與當代數位設計
          </p>
          <p className="text-xs mt-2 opacity-40">
            響應式設計 • 手機 • 平板 • 電腦 • 完整適配
          </p>
        </div>
      </div>
    </div>
  );
}
