<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>รวบรวมข่าว</template>
     
    <RouterLink to="/register">สมัคร</RouterLink>
    เพื่ออ่านข่าว
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>ช่องประกาศข่าวสาร</template>

    รับรู้ข่าวสารได้แล้ววันนี้ <RouterLink to="/news">News</RouterLink>
  </WelcomeItem>
</template>
