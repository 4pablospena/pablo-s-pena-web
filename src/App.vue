<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import EducationCertificationsSection from '@/components/EducationCertificationsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import TechStackSection from '@/components/TechStackSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import SectionContainer from '@/components/SectionContainer.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import BriefcaseIcon from '@/components/icons/BriefcaseIcon.vue'
import AcademicCapIcon from '@/components/icons/AcademicCapIcon.vue'
import CodeIcon from '@/components/icons/CodeIcon.vue'
import ProfileCheckIcon from '@/components/icons/ProfileCheckIcon.vue'
import MailIcon from '@/components/icons/MailIcon.vue'

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
  <main id="main" class="px-4">
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

      <SectionContainer id="estudios" class="reveal">
        <SectionTitle>
          <AcademicCapIcon class="size-7" />
          Estudios y certificados
        </SectionTitle>
        <EducationCertificationsSection />
      </SectionContainer>

      <SectionContainer id="proyectos" class="reveal">
        <SectionTitle>
          <CodeIcon class="size-6" />
          Proyectos
        </SectionTitle>
        <ProjectsSection />
      </SectionContainer>

      <SectionContainer id="stack" class="reveal">
        <SectionTitle>
          <CodeIcon class="size-7" />
          Stack
        </SectionTitle>
        <TechStackSection />
      </SectionContainer>

      <SectionContainer id="sobre-mi" class="reveal">
        <SectionTitle>
          <ProfileCheckIcon class="size-7" />
          Sobre mí
        </SectionTitle>
        <AboutSection />
      </SectionContainer>

      <SectionContainer id="contacto" class="reveal">
        <SectionTitle>
          <MailIcon class="size-7" />
          Contacto
        </SectionTitle>
        <ContactSection />
      </SectionContainer>
    </div>
  </main>
  <FooterSection />
</template>
