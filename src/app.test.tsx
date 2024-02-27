import { describe, test } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('Radio implementation', () => {
    test.each([
      {
        name: "per [ArrowDown]",
        focus: 'A',
        key: "[ArrowDown]",
        expectedTarget: 'D',
      },
      {
        name: "per [ArrowLeft]",
        focus: 'D',
        key: "[ArrowLeft]",
        expectedTarget: 'A',
      },
      {
        name: "per [ArrowRight]",
        focus: 'A',
        key: "[ArrowRight]",
        expectedTarget: 'D',
      },
      {
        name: "per [ArrowUp]",
        focus: 'D',
        key: "[ArrowUp]",
        expectedTarget: 'A',
      },
      {
        name: "forward around the corner",
        focus: 'E',
        key: "[ArrowRight]",
        expectedTarget: 'A',
      },
      {
        name: "backward around the corner",
        focus: 'A',
        key: "[ArrowUp]",
        expectedTarget: 'E',
      },
      {
        name: "do nothing on single radio",
        focus: 'Solo',
        key: "[ArrowRight]",
        expectedTarget: 'Solo'
      },
      {
        name: "on radios without name",
        focus: 'nameless1',
        key: "[ArrowRight]",
        expectedTarget: 'nameless2',
      },
    ])('$name', async ({ focus, key, expectedTarget }) => {
      const user = userEvent.setup()
        render(<App />)
        screen.getByLabelText(focus).focus()
        await user.keyboard(key)
        expect(screen.getByLabelText(expectedTarget)).toHaveFocus()
    })
})