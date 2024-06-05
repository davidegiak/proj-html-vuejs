<script>
import AppHeader from './components/AppHeader.vue'
import AppContent1 from './components/AppContent1.vue'
import AppContent2 from './components/AppContent2.vue'
import AppContent3 from './components/AppContent3.vue'
import NewsLetterBanner from './components/NewsLetterBanner.vue'
// import AppContentCarousel from './components/AppContentCarousel.vue'
import PartnersSection from './components/PartnersSection.vue'
import FixedLinks from './components/FixedLinks.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  components: {
    AppHeader,
    AppContent1,
    AppContent2,
    AppContent3,
    NewsLetterBanner,
    // AppContentCarousel,
    PartnersSection,
    FixedLinks,
    AppFooter
  }
}
</script>

<template>
  <AppHeader />
  <AppContent1 />
  <AppContent2 />
  <AppContent3/>
  <NewsLetterBanner/>
  <!-- <AppContentCarousel/> -->
  <PartnersSection/>
  <AppFooter />
  <FixedLinks />
</template>

