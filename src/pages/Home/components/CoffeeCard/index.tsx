import { RegularText, TitleText } from "../../../../components/Typography";
import { CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";

export function CoffeeCard() {
    return (
        <CoffeeCardContainer className="container">
            <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1676851200&Signature=JYTMVUMa0fivlVePsxyVZjAX~0jexW5KTIHqwAueWItZBISVzh7L8EKXtQ7IbdEvcqzizuJPQiomBwv5RBNPbxyzPakYFzYH4SiQdF3vr2HoVyZJzQMHIAWPpzOkfgKyapxTqtQSsC2uQgU8XISx-sDHyBM4kY127Yrn15pq8Uf-Siv7fhg4NwR-PVSp9n2zf5B1AfOidnqMXxuYnH0VK-eGRsVYt46BbV5LfQDyr2Du35RtfzCWPfvkO8BBEDm4N9DmMu2yDcNprdZarBhPQ2iGGo2G5wkmqRoroqWJ0d3oPPOFDcJ9USo2dH8M3Stbmu2F4~RVvIZtbQMspaB~vw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <Tags>
                <span>tradicional</span>
                <span>com leite</span>
            </Tags>
            <Name>
                Expresso Tradicional
            </Name>
            <Description>
                O tradicional café feito com água quente e grãos moídos
            </Description>
            <CardFooter>
                <div>
                    <RegularText size="s">
                        R$
                    </RegularText>
                    <TitleText size="m" color="text" as="strong">
                        9,90
                    </TitleText>
                </div>
            </CardFooter>
        </CoffeeCardContainer>
    )
}