import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

export function CoffeeCartCard() {
    return (
        <CoffeeCartCardContainer>
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/0a3c/9586/9a75d3fa0ffdecc4bc46ca83d2342e1c?Expires=1676851200&Signature=EIZlTtr9CM0crs6CLqSke-rJtV50b~ZN0OylL8KYm8lJt8XQono6-wMFtJ8L7l1qFDn429nlyWu0sLxx3IMF3jTRupcrPkaAr44H6WyyrmP72GSFJWzvRwkYNJL9wfJLAJvphQo4FPLR4eSaiVQFgLGbSuO~dS~NMAZIq3R0pxGXg6DgEwZ87NbCt2~6RDFO2UgWcN3gaEA0xh5pvBnHrE95S~cPjkl2xGGelYvwx9j7cFInk79bTC~Oi1hpEEXb7G1cG-8xkNz--HV5vPV6DF-xnhFsJpicO1nd-nH3WIp-A~ketGZZOtkgEDaiW~Twv~K74FJo3xosD0jA17EHsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                <div>
                    <RegularText color="subtitle">
                        Expresso Tradicional
                    </RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small" />
                        <RemoveButton>
                            <Trash size={16} />
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>
            <p>R$ 9,90</p>
        </CoffeeCartCardContainer>
    )
}