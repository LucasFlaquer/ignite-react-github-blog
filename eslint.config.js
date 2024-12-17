import rocketseatConfig from '@rocketseat/eslint-config/react.mjs'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    extends: [rocketseatConfig],
    rules: {
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'with-single-extends',
        },
      ],
    },
  },
)
