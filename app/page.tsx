import { Mic, Shield, Globe, Zap, Download, Users, Clock, CheckCircle, Star, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src="/icon.png" alt="Scribe" className="w-8 h-8 rounded-lg" />
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-foreground">Scribe</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">機能</a>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">料金</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">ログイン</Button>
              <Button size="sm">始める</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-black py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                音声をテキストに
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                AIがあなたの音声を素晴らしいテキストに変換。リアルタイムストリーミング、99言語対応、ローカル処理でプロフェッショナルな精度を実現します。
              </p>
            </div>
            <div className="animate-slide-up flex justify-center">
              <a 
                href="https://apps.apple.com/app/scribe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src="/app-store-badge.svg" 
                  alt="Download on the App Store" 
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              機能
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              AI搭載ツールで音声認識を再定義します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">リアルタイム音声認識</CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  高精度音声テキスト変換とリアルタイムストリーミング転写で、話した内容を即座にテキスト化します。
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">99言語対応</CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  自動言語検出による多言語サポート。異なる言語とアクセント用の専門モデルで高精度を実現。
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">ローカル処理</CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  すべての処理はデバイス上でローカルに実行。外部サーバーへのデータ送信なしで完全なプライバシー保護。
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">高速処理</CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  ターボモデルによる高速転写。20以上のWhisperモデルバリエーションから最適なものを選択可能。
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">話者分離</CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  多話者会話の話者分離機能で、誰が何を話したかを正確に識別・記録します。
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">多様なエクスポート</CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  様々なテキスト形式でのエクスポートオプション。会議メモ、インタビュー、ポッドキャストなど幅広く活用。
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              活用事例
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              様々な業界でScribeが活用されています
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-white mr-3" />
                  <CardTitle className="text-white">会議転写</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  会議の内容をリアルタイムで文字起こし。重要なポイントを見逃すことなく、効率的な議事録作成が可能。
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Mic className="w-6 h-6 text-white mr-3" />
                  <CardTitle className="text-white">インタビュー</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  インタビュー録音を自動で文字起こし。話者分離機能で質問者と回答者を明確に区別。
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-white mr-3" />
                  <CardTitle className="text-white">アクセシビリティ</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  聴覚障害者向けのアクセシビリティサポート。音声コンテンツをテキストで提供。
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              処理能力
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              従来の手作業では不可能な規模とスピードを実現
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-gray-300 text-lg">同時処理可能ファイル数</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300 text-lg">時間短縮効果</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300 text-lg">スタイル統一率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-lg">無人稼働</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              プランを選択
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              無料で始めて、成長に合わせてスケール。すべてのプランにコア音声認識機能が含まれています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">スターター</CardTitle>
                <div className="text-4xl font-bold text-white mb-2">¥0<span className="text-lg text-gray-300">/月</span></div>
                <CardDescription className="text-gray-300">個人や小規模プロジェクトに最適</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">月5時間の音声認識</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">基本音声認識機能</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">標準精度</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">コミュニティサポート</span>
                </div>
              </CardContent>
              <CardContent>
                <Button className="w-full bg-white text-black hover:bg-gray-200">無料で始める</Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-gray-800 border-gray-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-white text-black">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">プロフェッショナル</CardTitle>
                <div className="text-4xl font-bold text-white mb-2">¥2,980<span className="text-lg text-gray-300">/月</span></div>
                <CardDescription className="text-gray-300">クリエイターとプロフェッショナル向け</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">無制限の音声認識</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">すべての音声認識機能</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">高精度認識</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">優先サポート</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">話者分離機能</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">99言語対応</span>
                </div>
              </CardContent>
              <CardContent>
                <Button className="w-full bg-white text-black hover:bg-gray-200">
                  プロになる
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">エンタープライズ</CardTitle>
                <div className="text-4xl font-bold text-white mb-2">カスタム</div>
                <CardDescription className="text-gray-300">チームと大規模組織向け</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">プロのすべて</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">専用音声認識サーバー</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">カスタム音声モデル</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">24/7プレミアムサポート</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">SLA保証</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">専任アカウントマネージャー</span>
                </div>
              </CardContent>
              <CardContent>
                <Button className="w-full bg-white text-black hover:bg-gray-200">営業に問い合わせ</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img src="/icon.png" alt="Scribe" className="w-8 h-8 rounded-lg" />
                <h3 className="text-xl font-bold ml-3 text-white">Scribe</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                あらゆる音声を自由にテキスト化。AIが理解し、あなたの生産性を無限に拡張します。
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">製品</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">機能</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">料金</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">統合</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">サポート</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ヘルプセンター</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ドキュメント</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">コミュニティ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">
                © 2024 Scribe. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">プライバシーポリシー</a>
                <a href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">利用規約</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}