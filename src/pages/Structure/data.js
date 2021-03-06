import image1 from '../../assets/structure1.png'
import image2 from '../../assets/structure2.png'
import image3 from '../../assets/structure3.png'
import image4 from '../../assets/structure4.jpg'

export const headerData = {
    title: 'Nossa Estrutura'
}

export const structure1 = {
    title: 'Vista e localização diferenciadas',
    description: 'O Movi Downtown possui uma visão privilegiada do bairro, com uma vista ampla e de tirar o fôlego.',
    subtitle: 'Estrutura 1',
    number: '01',
    image: image1,
    alt: 'Apartment view.',
    custom: false,
    styling: {
        width: '45%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        textAlign: 'start'
    }
}

export const structure2 = {
    title: 'Área de lazer e piscina',
    description: 'O empreendimento conta com uma ampla área de lazer gourmet, com churrasqueira, e piscina, localizada no rooftop do prédio, para você compartilhar momentos incríveis.',
    subtitle: 'Estrutura 2',
    number: '02',
    image: image2,
    alt: 'Apartment view.',
    custom: false,
    styling: {
        width: '60%',
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        textAlign: 'end'
    }
}

export const structure3 = {
    title: 'Academia Equipada e Lavanderia',
    description: 'No Movi Downtown, a academia é equipada com produtos de alta qualidade para você desfrutar de todas as áreas do empreendimento com muito conforto e privacidade e também no edifício possui uma área de lavanderia para a comodidade e praticidade dos condôminos.',
    subtitle: 'Estrutura 3',
    number: '03',
    image: image3,
    alt: 'Apartment view.',
    custom: false,
    styling: {
        width: '55%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        textAlign: 'start'
    }
}

export const structure4 = {
    title: 'Espaço Pet e Salão de Festas',
    description: 'Contamos com ótimo espaço especialmente para o seu pet e um salão de festas amplo e bem equipado para você receber seus convidados.',
    subtitle: 'Estrutura 4',
    number: '04',
    image: image4,
    alt: 'Apartment view.',
    custom: true,
    styling: {
        width: '50%',
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        textAlign: 'end'
    }
}