'use client'

import { useTheme, View, Text, Heading, Link, Flex } from "@aws-amplify/ui-react"
import NextLink from 'next/link'

export default function ViewPrivacyPolicy() {
  const theme = useTheme()

  return (
    <View
      padding={theme.tokens.space.xl}
      marginInline="auto"
      maxWidth={theme.breakpoints.values.large}>
      <Flex
        direction="column"
        gap={theme.tokens.space.small}>
        <Text>最終更新日: 2024年6月9日</Text>
        <Text>本プライバシーポリシーは、ソーシャルログインの検証運営（以下「運営」）が運営するウェブサイトおよびサービスにおける、お客様の個人情報の収集、使用、共有について説明するものです。運営は、お客様のプライバシーを尊重し、個人情報を適切に保護するために最善を尽くします。</Text>
        <Heading level={3}>1. 収集する情報</Heading>
        <Text>運営は、以下の種類の情報を収集することがあります。</Text>
        <Heading level={4}>1.1 個人識別情報</Heading>
        <ul>
          <li>名前</li>
          <li>メールアドレス</li>
          <li>電話番号</li>
          <li>郵便番号</li>
        </ul>
        <Heading level={4}>1.2 自動収集情報</Heading>
        <ul>
          <li>IPアドレス</li>
          <li>ブラウザの種類</li>
          <li>アクセス日時</li>
          <li>アクセスしたページ</li>
        </ul>
        <Heading level={4}>2. 情報の使用方法</Heading>
        <Text>運営は、収集した情報を以下の目的で使用します。</Text>
        <ul>
          <li>サービスの提供および改善</li>
          <li>お客様からの問い合わせへの対応</li>
          <li>マーケティングおよびプロモーション</li>
          <li>セキュリティの確保および不正使用の防止</li>
        </ul>
        <Heading level={3}>3. 情報の共有</Heading>
        <Text>
          運営は、お客様の個人情報を第三者に販売、貸与、または提供することはありません。ただし、以下の場合には情報を共有することがあります。
        </Text>
        <ul>
          <li>お客様の同意がある場合</li>
          <li>法律または法的手続に従う場合</li>
          <li>サービス提供に必要な第三者サービスプロバイダーと共有する場合</li>
          <li>事業譲渡、合併、または売却に関連する場合</li>
        </ul>
        <Heading level={3}>4. クッキーおよび追跡技術</Heading>
        <Text>運営のウェブサイトは、クッキーおよび類似の追跡技術を使用して、お客様のブラウジング体験を向上させます。これにより、お客様のサイト利用状況を分析し、パーソナライズされたコンテンツを提供します。</Text>
        <Heading level={3}>5. データセキュリティ</Heading>
        <Text>運営は、お客様の個人情報を保護するために、適切な物理的、技術的、および管理的なセキュリティ対策を講じています。ただし、インターネット上のデータ送信は完全に安全であるとは保証できないため、そのリスクをご了承ください。</Text>
        <Heading level={3}>6. お客様の権利</Heading>
        <Text>お客様は、以下の権利を有します。</Text>
        <ul>
          <li>自分の個人情報へのアクセス</li>
          <li>不正確な個人情報の修正</li>
          <li>個人情報の削除要求</li>
          <li>データ処理の制限または異議</li>
        </ul>
        <Text>これらの権利を行使する場合は、以下の連絡先までご連絡ください。</Text>
        <Heading level={3}>7. ポリシーの変更</Heading>
        <Text>運営は、本プライバシーポリシーを随時変更することがあります。変更があった場合は、運営のウェブサイト上で通知します。</Text>
        <Heading level={3}>8. お問い合わせ</Heading>
        <Text>本プライバシーポリシーについてのご質問やご意見がある場合は、以下の連絡先までお問い合わせください。</Text>
        <Text>
          <Link href="https://x.com/yokoyamakikaku">@yokoyamakikaku</Link>
        </Text>
        <NextLink href="/">
          <Link as="span">
            ホームに戻る
          </Link>
        </NextLink>
      </Flex>
    </View>
  )
}
