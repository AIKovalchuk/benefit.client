export default interface Props {
    prevStep: () => void
    nextStep: () => void
    handleChange: (input: any) => (e: any) => void
}
