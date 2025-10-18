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
                <img src="/icon.png" alt="Cription" className="w-8 h-8 rounded-lg" />
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-foreground">Cription</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">Login</Button>
              <Button size="sm">Get Started</Button>
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
                Voice to Text
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your voice into amazing text with AI. Real-time streaming, 99 language support, and local processing for professional accuracy.
              </p>
            </div>
            <div className="animate-slide-up flex justify-center">
              <a 
                href="https://apps.apple.com/app/Cription" 
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
              Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Redefining speech recognition with AI-powered tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Real-time Speech Recognition</CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  High-precision voice-to-text conversion with real-time streaming transcription, instantly converting your speech to text.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">99 Language Support</CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  Multi-language support with automatic language detection. Specialized models for different languages and accents ensure high accuracy.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Local Processing</CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  All processing runs locally on your device. Complete privacy protection with no data transmission to external servers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Fast Processing</CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  High-speed transcription with turbo models. Choose from 20+ Whisper model variations for optimal performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Speaker Separation</CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  Speaker separation for multi-speaker conversations, accurately identifying and recording who said what.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Diverse Export Options</CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  Various text format export options. Widely applicable for meeting notes, interviews, podcasts, and more.
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
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cription is being utilized across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-white mr-3" />
                  <CardTitle className="text-white">Meeting Transcription</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Real-time transcription of meeting content. Create efficient meeting minutes without missing important points.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Mic className="w-6 h-6 text-white mr-3" />
                  <CardTitle className="text-white">Interviews</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Automatic transcription of interview recordings. Speaker separation clearly distinguishes between interviewer and interviewee.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-white mr-3" />
                  <CardTitle className="text-white">Accessibility</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Accessibility support for the hearing impaired. Provide audio content as text.
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
              Processing Power
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Achieving scale and speed impossible with traditional manual methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-gray-300 text-lg">Concurrent Files</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300 text-lg">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300 text-lg">Style Consistency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-lg">Unmanned Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start free and scale as you grow. All plans include core speech recognition features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Starter</CardTitle>
                <div className="text-4xl font-bold text-white mb-2">$0<span className="text-lg text-gray-300">/month</span></div>
                <CardDescription className="text-gray-300">Perfect for individuals and small projects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">5 hours of speech recognition per month</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">Basic speech recognition features</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">Standard accuracy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">Community support</span>
                </div>
              </CardContent>
              <CardContent>
                <Button className="w-full bg-white text-black hover:bg-gray-200">Start Free</Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-gray-800 border-gray-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-white text-black">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Professional</CardTitle>
                <div className="text-4xl font-bold text-white mb-2">$29<span className="text-lg text-gray-300">/month</span></div>
                <CardDescription className="text-gray-300">For creators and professionals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">Unlimited speech recognition</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">All speech recognition features</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">High-precision recognition</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">Priority support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">Speaker separation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">99 language support</span>
                </div>
              </CardContent>
              <CardContent>
                <Button className="w-full bg-white text-black hover:bg-gray-200">
                  Go Pro
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-white mb-2">Custom</div>
                <CardDescription className="text-gray-300">For teams and large organizations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">Everything in Professional</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">Dedicated speech recognition servers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">Custom speech models</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">24/7 premium support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">SLA guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm text-gray-300">Dedicated account manager</span>
                </div>
              </CardContent>
              <CardContent>
                <Button className="w-full bg-white text-black hover:bg-gray-200">Contact Sales</Button>
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
                <img src="/icon.png" alt="Cription" className="w-8 h-8 rounded-lg" />
                <h3 className="text-xl font-bold ml-3 text-white">Cription</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Transform any voice into text freely. AI understands and infinitely expands your productivity.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">
                © 2024 Cription. All rights reserved.
              </p>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
                <div className="flex space-x-6">
                  <a href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a>
                  <a href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Use</a>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-xs">GDPR Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-xs">SOC 2 Type II</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src="/openai-white.svg" alt="OpenAI" className="w-4 h-4" />
                    <span className="text-gray-400 text-xs">Powered by OpenAI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}