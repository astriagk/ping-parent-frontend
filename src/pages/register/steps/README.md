# Registration Flow - Step Components

This directory contains the individual step components for the phone-based OTP registration flow.

## Components

### PhoneStep

- **Purpose**: Collects user's phone number
- **Location**: `./PhoneStep.tsx`
- **Functionality**:
  - Phone number input with validation
  - Sends OTP to the provided phone number
  - Link to navigate to login page

### OTPStep

- **Purpose**: Verifies the OTP sent to user's phone
- **Location**: `./OTPStep.tsx`
- **Functionality**:
  - 6-digit OTP input
  - OTP verification
  - Resend OTP with 60-second countdown timer
  - Displays phone number for reference

### ProfileStep

- **Purpose**: Optional profile completion
- **Location**: `./ProfileStep.tsx`
- **Functionality**:
  - First name, last name, email, and address inputs
  - Complete registration with profile details
  - Skip option to register with minimal data

## Usage

Each step component is designed to be modular and reusable. They receive:

- `onSubmit`: Handler for form submission
- `styles`: Style object from the parent component
- Additional props specific to each step's needs

Example:

```tsx
<PhoneStep
  onSubmit={handleSendOTP}
  onNavigateToLogin={() => navigation.navigate('Login')}
  styles={styles}
/>
```

## Benefits of Separation

1. **Maintainability**: Each step is isolated and easier to maintain
2. **Testability**: Steps can be tested independently
3. **Reusability**: Steps can be reused in other flows if needed
4. **Readability**: Main Register component is cleaner and more focused
5. **Scalability**: Easy to add or modify steps without affecting others
