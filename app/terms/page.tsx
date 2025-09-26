import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">利用規約</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-sm text-gray-300 mb-8">
            最終更新日: {new Date().toLocaleDateString('ja-JP')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. はじめに</h2>
            <p className="text-gray-300 leading-relaxed">
              本利用規約（以下「本規約」）は、Scribe（以下「当アプリ」）の利用条件を定めるものです。
              ユーザーは、当アプリを利用することにより、本規約に同意したものとみなされます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. 定義</h2>
            <ul className="list-disc pl-6 text-gray-300">
              <li><strong>「当アプリ」</strong>とは、Scribeアプリケーションを指します。</li>
              <li><strong>「ユーザー」</strong>とは、当アプリを利用する個人または法人を指します。</li>
              <li><strong>「サービス」</strong>とは、当アプリが提供するすべての機能を指します。</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. 利用資格</h2>
            <h3 className="text-xl font-medium text-white mb-3">誰でも利用可能</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Scribeは、年齢、国籍、職業に関係なく、誰でも利用できるアプリです。
              アカウント登録も不要で、すぐにご利用いただけます。
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              当アプリを利用するための条件：
            </p>
            <ul className="list-disc pl-6 text-gray-300">
              <li>本規約に同意すること</li>
              <li>適切な用途での利用（商用・個人利用問わず）</li>
              <li>アプリの機能を適切に使用すること</li>
            </ul>
            <p className="text-white font-medium mt-4">
              アカウント登録は不要です。アプリをダウンロードしてすぐにご利用いただけます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. 禁止事項</h2>
            <h3 className="text-xl font-medium text-white mb-3">利用上の注意</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Scribeは誰でも利用できますが、以下の行為は禁止されています：
            </p>
            <ul className="list-disc pl-6 text-gray-300">
              <li>違法な目的での利用</li>
              <li>他人の権利を侵害する行為</li>
              <li>アプリの機能を逆解析、リバースエンジニアリング、または複製する行為</li>
              <li>アプリのセキュリティ機能を回避または無効化する行為</li>
              <li>商用利用時の適切なライセンス取得（必要に応じて）</li>
            </ul>
            <p className="text-white font-medium mt-4">
              商用利用も可能です。詳細については、お問い合わせください。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. ユーザーコンテンツ</h2>
            <h3 className="text-xl font-medium text-white mb-3">完全なプライバシー</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Scribeでは、ユーザーの音声データと転写内容はすべてデバイス上で処理・保存されます。
              外部サーバーに送信されることは一切ありません。
            </p>
            <ul className="list-disc pl-6 text-gray-300">
              <li>音声データと転写内容はユーザーのデバイス上でのみ保存</li>
              <li>外部へのデータ送信は一切行わない</li>
              <li>ユーザーが自分のデータを完全にコントロール</li>
              <li>アプリの削除でデータも完全に削除</li>
            </ul>
            <p className="text-white font-medium mt-4">
              すべての処理はローカルで実行されるため、インターネット接続なしでも音声認識が可能です。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. 知的財産権</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              当アプリのすべての知的財産権は、当アプリまたはそのライセンサーに帰属します。
              ユーザーは、当アプリの事前の書面による同意なしに、
              当アプリのコンテンツを複製、配布、または改変することはできません。
            </p>
            <p className="text-white font-medium mt-4">
              商用利用については、お問い合わせください。適切なライセンスを提供いたします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">7. プライバシー</h2>
            <p className="text-gray-300 leading-relaxed">
              当アプリのプライバシーに関する取り扱いについては、
              別途定めるプライバシーポリシーに従います。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">8. サービスの変更・終了</h2>
            <p className="text-gray-300 leading-relaxed">
              当アプリは、事前の通知なく、サービスの内容を変更または終了する場合があります。
              当アプリは、これにより生じる損害について責任を負いません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">9. 免責事項</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              当アプリは以下の事項について免責とします：
            </p>
            <ul className="list-disc pl-6 text-gray-300">
              <li>サービスの中断、停止、またはエラー</li>
              <li>ユーザー間のトラブル</li>
              <li>第三者による不正アクセス</li>
              <li>システムの不具合やデータの消失</li>
              <li>ユーザーの利用に起因する損害</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">10. 損害賠償の制限</h2>
            <p className="text-gray-300 leading-relaxed">
              当アプリの責任は、ユーザーが当アプリに支払った料金の範囲内に限定されます。
              間接損害、特別損害、または結果的損害について責任を負いません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">11. 準拠法・管轄裁判所</h2>
            <p className="text-gray-300 leading-relaxed">
              本規約は日本法に準拠し、当アプリの本社所在地を管轄する裁判所を専属的合意管轄とします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">12. 規約の変更</h2>
            <p className="text-gray-300 leading-relaxed">
              当アプリは、必要に応じて本規約を変更する場合があります。
              重要な変更がある場合は、アプリ内通知またはメールでお知らせします。
              変更後の規約は、アプリ内に掲載された時点で効力を生じます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">13. 分離可能性</h2>
            <p className="text-gray-300 leading-relaxed">
              本規約の一部が無効または執行不能と判断された場合でも、
              残りの条項は有効に存続します。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">14. お問い合わせ</h2>
            <p className="text-gray-300 leading-relaxed">
              本規約に関するご質問やご不明な点がございましたら、
              以下の連絡先までお気軽にお問い合わせください。
            </p>
            <p className="text-gray-300 mt-4">
              <strong>連絡先:</strong> support@scribe-app.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
