import pluginVue from 'eslint-plugin-vue'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'

export default defineConfigWithVueTs(
  {
    ignores: ['dist', 'node_modules', '*.config.js', '*.config.mjs', '*.config.ts'],
  },
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  {
    rules: {
      'vue/multi-word-component-names': ['error', { ignores: ['Badge'] }],
    },
  },
)
