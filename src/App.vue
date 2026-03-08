<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import SectionContainer from '@/components/SectionContainer.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import BriefcaseIcon from '@/components/icons/BriefcaseIcon.vue'
import CodeIcon from '@/components/icons/CodeIcon.vue'
import ProfileCheckIcon from '@/components/icons/ProfileCheckIcon.vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<template>
  <NavBar />
  <main class="px-4">
    <SectionContainer class="py-20 md:py-40">
      <HeroSection />
    </SectionContainer>

    <div class="space-y-32">
      <SectionContainer id="experiencia" class="reveal">
        <SectionTitle>
          <BriefcaseIcon class="size-7" />
          Experiencia laboral
        </SectionTitle>
        <ExperienceSection />
      </SectionContainer>

      <SectionContainer id="proyectos" class="reveal">
        <SectionTitle>
          <CodeIcon class="size-6" />
          Proyectos
        </SectionTitle>
        <ProjectsSection />
      </SectionContainer>

      <SectionContainer id="sobre-mi" class="reveal">
        <SectionTitle>
          <ProfileCheckIcon class="size-7" />
          Sobre mí
        </SectionTitle>
        <AboutSection />
      </SectionContainer>
    </div>
  </main>
  <FooterSection />
</template>
