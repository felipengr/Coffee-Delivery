import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from "react-hook-form";

const confirmOderFormValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, 'Informe a rua'),
    number: zod.string().min(1, 'Informe número'),
    complement: zod.string(),
    district: zod.string().min(1, 'Informe o bairro'),
    city: zod.string().min(1, 'Informe a cidade'),
    uf: zod.string().min(1, 'Informe o estado')
})

export type OrderData = zod.infer<typeof confirmOderFormValidationSchema>

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOderFormValidationSchema)
    })

    const { handleSubmit } = confirmOrderForm

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        console.log(data)
    }

    return(
        <FormProvider {...confirmOrderForm}>
            <CompleteOrderContainer
                className="container"
                onSubmit={handleSubmit(handleConfirmOrder)}
            >
                <CompleteOrderForm />
                <SelectedCoffees />
            </CompleteOrderContainer>
        </FormProvider>
    )
}