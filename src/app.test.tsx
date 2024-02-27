import { describe, test } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('Radio implementation', () => {
    test.each([
      {
        name: "per [ArrowDown]",
        focus: "A",
        key: "[ArrowDown]",
        expectedTarget: "D",
      },
      {
        name: "per [ArrowDown] around the corner",
        focus: "E",
        key: "[ArrowDown]",
        expectedTarget: "A",
      },
      {
        name: "per [ArrowLeft]",
        focus: "D",
        key: "[ArrowLeft]",
        expectedTarget: "A",
      },
      {
        name: "per [ArrowLeft] around the corner",
        focus: "A",
        key: "[ArrowLeft]",
        expectedTarget: "E",
      },
      {
        name: "per [ArrowRight]",
        focus: "A",
        key: "[ArrowRight]",
        expectedTarget: "D",
      },
      {
        name: "per [ArrowRight] around the corner",
        focus: "E",
        key: "[ArrowRight]",
        expectedTarget: "A",
      },
      {
        name: "per [ArrowUp]",
        focus: "D",
        key: "[ArrowUp]",
        expectedTarget: "A",
      },
      {
        name: "per [ArrowUp] around the corner",
        focus: "A",
        key: "[ArrowUp]",
        expectedTarget: "E",
      },
    ])("$name", async ({ focus, key, expectedTarget }) => {
      const user = userEvent.setup();
      render(<App />);
      const element = screen.getByLabelText(focus);
      const target = screen.getByLabelText(expectedTarget)

      element.focus()
      await user.keyboard(key);
      
      expect(target).toHaveFocus()
      expect(target).toBeChecked()
    });
})