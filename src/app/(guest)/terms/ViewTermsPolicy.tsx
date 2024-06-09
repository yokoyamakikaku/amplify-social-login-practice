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
        <Text>利用規約</Text>
        <Text>最終更新日: 2024年6月9日</Text>
        <Text>本利用規約（以下「本規約」）は、ソーシャルログインの検証運営（以下「運営」）が提供する検証用アプリケーション（以下「本アプリケーション」）の利用に関する条件を定めるものです。本アプリケーションを利用することにより、利用者（以下「ユーザー」）は本規約に同意したものとみなされます。</Text>
        <Heading level={3}>第1条（適用範囲）</Heading>
        <Text>本規約は、ユーザーが本アプリケーションを利用する際のすべての行為に適用されます。</Text>
        <Text>運用は、本規約のほか、本アプリケーションに関する個別の規約やガイドラインを定めることがあります。これらは本規約の一部を構成し、本規約と矛盾する場合は、個別の規約やガイドラインが優先されます。</Text>
        <Heading level={3}>第2条（利用条件）</Heading>
        <Text>ユーザーは、本アプリケーションを検証目的のみに利用するものとし、他のいかなる目的にも利用してはなりません。</Text>
        <Text>ユーザーは、本アプリケーションの利用に際して、法令および公序良俗に反する行為を行ってはなりません。</Text>
        <Heading level={3}>第3条（アカウントの管理）</Heading>
        <Text>ユーザーは、自らの責任でアカウントを管理するものとします。</Text>
        <Text>アカウントの不正使用によって生じた損害について、運用は一切の責任を負いません。</Text>
        <Heading level={3}>第4条（禁止事項）</Heading>
        <Text>ユーザーは、本アプリケーションの利用に際して、以下の行為を行ってはなりません。</Text>
        <ul>
          <li>法令または公序良俗に違反する行為</li>
          <li>運用または第三者の知的財産権を侵害する行為</li>
          <li>本アプリケーションの運営を妨げる行為</li>
          <li>不正アクセスまたはこれを試みる行為</li>
          <li>その他、運用が不適切と判断する行為</li>
        </ul>
        <Heading level={3}>第5条（本アプリケーションの提供）</Heading>
        <Text>運用は、ユーザーに対し、本アプリケーションを現状有姿のまま提供します。</Text>
        <Text>運用は、本アプリケーションの提供に際して、その完全性、正確性、信頼性についていかなる保証も行いません。</Text>
        <Heading level={3}>第6条（免責事項）</Heading>
        <Text>運用は、本アプリケーションの利用により発生したいかなる損害についても、一切の責任を負いません。</Text>
        <Text>運用は、本アプリケーションの利用に関連して、ユーザー間またはユーザーと第三者との間で生じた紛争について、一切の責任を負いません。</Text>
        <Heading level={3}>第7条（利用停止および解除）</Heading>
        <Text>運用は、ユーザーが本規約に違反した場合、事前の通知なくして、本アプリケーションの利用を停止し、またはアカウントを解除することができます。</Text>
        <Heading level={3}>第8条（規約の変更）</Heading>
        <Text>運用は、必要と判断した場合、本規約を随時変更することができます。</Text>
        <Text>規約の変更後、本アプリケーションの利用を継続することにより、ユーザーは変更後の規約に同意したものとみなされます。</Text>
        <Heading level={3}>第9条（準拠法および管轄）</Heading>
        <Text>本規約は、日本法に準拠し、解釈されます。</Text>
        <Text>本アプリケーションに関する紛争については、大阪地方裁判所を専属的合意管轄とします。</Text>
        <NextLink href="/">
          <Link as="span">
            ホームに戻る
          </Link>
        </NextLink>
      </Flex>
    </View>
  )
}
