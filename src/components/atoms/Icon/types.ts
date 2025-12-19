export interface IconProps {
  /**
   * Feather icon name
   * @see https://feathericons.com/
   */
  name: string;

  /**
   * Icon size
   * @default 24
   */
  size?: number;

  /**
   * Icon color (uses theme text color if not provided)
   */
  color?: string;

  /**
   * Test ID for testing
   */
  testID?: string;
}
