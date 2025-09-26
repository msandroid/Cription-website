import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">プライバシーポリシー</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-sm text-gray-300 mb-8">
            最終更新日: {new Date().toLocaleDateString('ja-JP')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. はじめに</h2>
            <p className="text-gray-300 leading-relaxed">
              Scribe（以下「当アプリ」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。
              本プライバシーポリシーは、当アプリがどのような情報を収集し、どのように使用するかについて説明します。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. データ収集について</h2>
            <h3 className="text-xl font-medium text-white mb-3">プライバシー第一の設計</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Scribeは、ユーザーのプライバシーを最優先に設計されたアプリです。
              音声認識処理はすべてデバイス上でローカルに実行され、外部サーバーにデータを送信することはありません。
            </p>
            
            <h3 className="text-xl font-medium text-white mb-3">2.1 収集しない情報</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>音声データ（すべてデバイス上で処理）</li>
              <li>転写されたテキスト内容</li>
              <li>個人を特定できる情報</li>
              <li>使用履歴や行動データ</li>
            </ul>
            
            <h3 className="text-xl font-medium text-white mb-3">2.2 最小限の技術情報</h3>
            <p className="text-gray-300 mb-4">
              アプリの安定性向上のため、以下の匿名化された技術情報のみを収集する場合があります：
            </p>
            <ul className="list-disc pl-6 text-gray-300">
              <li>アプリクラッシュレポート（個人情報を含まない）</li>
              <li>アプリのバージョン情報</li>
              <li>デバイスの基本仕様（OS、モデル）</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. 情報の使用目的</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              収集する技術情報は以下の目的でのみ使用します：
            </p>
            <ul className="list-disc pl-6 text-gray-300">
              <li>アプリの安定性向上とバグ修正</li>
              <li>パフォーマンスの最適化</li>
              <li>新機能の開発（個人情報は使用しません）</li>
            </ul>
            <p className="text-white font-medium mt-4">
              重要なポイント：音声データや転写内容は一切収集・保存されません。
              すべての処理はデバイス上で完結します。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. 情報の共有</h2>
            <h3 className="text-xl font-medium text-white mb-3">データ共有なし</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Scribeは、ユーザーの音声データや転写内容を第三者と共有することは一切ありません。
              アプリは完全にローカルで動作し、外部サーバーとの通信は最小限に抑えられています。
            </p>
            <p className="text-gray-300 leading-relaxed">
              技術的な匿名化データのみが、アプリの改善目的で使用される場合があります。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. データの保存とセキュリティ</h2>
            <h3 className="text-xl font-medium text-white mb-3">ローカル処理による最高のセキュリティ</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              音声データと転写内容は、ユーザーのデバイス上でのみ処理・保存されます。
              外部サーバーに送信されることは一切ありません。
            </p>
            <ul className="list-disc pl-6 text-gray-300">
              <li>すべての音声処理はデバイス上で完結</li>
              <li>インターネット接続不要で音声認識が可能</li>
              <li>データはユーザーのデバイス内でのみ保存</li>
              <li>外部へのデータ送信は一切行わない</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. ユーザーの権利</h2>
            <h3 className="text-xl font-medium text-white mb-3">完全なデータコントロール</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Scribeでは、ユーザーが自分のデータを完全にコントロールできます。
              音声データと転写内容はすべてユーザーのデバイス上に保存され、
              いつでも削除・管理が可能です。
            </p>
            <ul className="list-disc pl-6 text-gray-300">
              <li>データの完全な所有権（デバイス上でのみ保存）</li>
              <li>いつでもデータの削除が可能</li>
              <li>外部へのデータ送信なし</li>
              <li>アプリの削除でデータも完全に削除</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">7. クッキーとトラッキング技術</h2>
            <h3 className="text-xl font-medium text-white mb-3">トラッキングなし</h3>
            <p className="text-gray-300 leading-relaxed">
              Scribeは、ユーザーの行動を追跡するクッキーやトラッキング技術を使用しません。
              アプリは完全にローカルで動作し、外部のトラッキングサービスとは連携しません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">8. プライバシーポリシーの変更</h2>
            <p className="text-gray-300 leading-relaxed">
              当アプリは、必要に応じて本プライバシーポリシーを更新する場合があります。
              重要な変更がある場合は、アプリ内通知またはメールでお知らせします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">9. お問い合わせ</h2>
            <p className="text-gray-300 leading-relaxed">
              プライバシーに関するご質問やご不明な点がございましたら、
              以下の連絡先までお気軽にお問い合わせください。
            </p>
            <p className="text-gray-300 mt-4">
              <strong>連絡先:</strong> privacy@scribe-app.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
