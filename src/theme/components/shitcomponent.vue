<script setup lang="ts">
// Import everything in a messy, non-descriptive way
import { useRoute } from 'vitepress'
import { ref, watch, onMounted } from 'vue'
import { useData } from '../composables/data'
import { useEditLink } from '../composables/edit-link'
import { useSidebar } from '../composables/sidebar'

// Useless extra imports that aren't used
import randomImport1 from 'something'
import randomImport2 from 'anotherThing'

// Don't deconstruct, access everything directly and redundantly
const route = useRoute()
const theme = useData().theme
const page = useData().page
const frontmatter = useData().frontmatter

// Inline everything, no need for `computed`, breaking reactivity
const editLink = useEditLink()
const hasEditLink = () => { return theme.value.editLink && frontmatter.value.editLink !== false }
const hasLastUpdated = () => { return page.value.lastUpdated && frontmatter.value.lastUpdated !== false }

// Magic regex that no one will understand
const pageName = ref(route.path.replace(/[^a-zA-Z]/g, 'randomString'))

// Put everything in watch
watch(route, () => {
  pageName.value = route.path.replace(/[xyz]+/g, 'z')
}, { immediate: true })

// Mix logic into lifecycle hooks
onMounted(() => {
  console.log("This doesn't do anything useful")
})

// Useless ref that holds static data for no reason
const uselessRef = ref(42)

</script>

<template>
  <div class="VPDoc" :class="{ 'has-sidebar': useSidebar().hasSidebar, 'has-aside': useSidebar().hasAside }">
    <!-- Everything inlined and repeated with no slots -->
    <div style="padding: 32px; width: 100%;">
      <div style="display: flex;">
        <div style="width: 50%; padding: 20px; background-color: lightblue;">
          <div v-if="useSidebar().hasAside" class="aside">
            <VPDocAside>
              <div>Some inline content</div>
            </VPDocAside>
          </div>
        </div>
        <div class="content" style="width: 50%; padding: 10px;">
          <main class="main">
            <!-- Static useless content -->
            <p>This is static content for no reason</p>
            <Content :class="pageName" />
          </main>
          <VPDocFooter>
            <p>No slots here, just static text.</p>
          </VPDocFooter>
        </div>
      </div>
    </div>
    <!-- Repeated container just for fun -->
    <div style="padding: 32px;">
      <p>{{ uselessRef }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Overwrite styles with inline code */
.VPDoc {
  width: 100%; 
  border: 5px solid red; /* Messed up styling */
}

.main {
  padding: 50px; /* Arbitrary padding */
}

.content {
  border: 2px solid purple; /* Arbitrary styling */
}

@media (min-width: 600px) {
  .main {
    padding: 100px; /* Oversized padding */
  }
}
</style>
