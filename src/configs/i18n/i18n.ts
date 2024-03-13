import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'Connect Wallet': 'Connect Wallet',
      'The max reachable platform points on Testnet is 600.':
        'The max reachable platform points on Testnet is 600. ⚠️',
      Disconnect: 'Disconnect',
      'Ninja Points': 'Ninja Points',
      'Live Activities': 'Live activities',
      'No data for while!': 'No data for while!',
      'Tickets purchased': 'Tickets purchased',
      'Total plays': 'PvP Battles',
      Verifiability: 'Verifiability',
      'Verifiability-Text': `Unlock the power of transparency! Ninja Labs leverages blockchain
      technology, providing verifiable and transparent transactions. All
      our smart contracts are open source, fostering trust and community
      scrutiny for enhanced security in your gaming experience.`,
      'Win-To-Earn': 'Win-To-Earn',
      'Win-To-Earn-Text': `Elevate your gaming experience with Ninja PvP's Win-To-Earn
      concept. Enjoy spirited PvP challenges where victory isn't just
      about glory but also brings tangible rewards, making every game a
      journey to real-world earnings.`,
      Tournaments: 'Tournaments',
      'Tournaments-Text': `Join Ninja PvP's thrilling tournaments for intense PvP action!
      From chess to lucky draws, our competitions offer exciting
      gameplay and real rewards, turning every match into an opportunity
      for victory and prizes.`,
      Time: 'Time',
      'Time (GMT)': 'Time (GMT)',
      Game: 'Game',
      Player: 'Player',
      Amount: 'Amount',
      'Profit/Loss': 'Profit/Loss',
      Ticket: 'Ticket',
      'Join Match': 'Join Match',
      'Opened Games': 'Opened Games',
      'Choose your side': 'Choose your side',
      Join: 'Join',
      'Draws in': 'Draws in',
      People: 'People',
      'Current Prize': 'Current Prize',
      'Rewards per tickets': 'Rewards per tickets',
      'Criar Partida': 'Criar Partida',
      'Waiting for match': 'Waiting for match',
      'Chads Battle Royale': 'Chads Battle Royale',
      'PvP Battles': 'PvP Battles',
      'Chad Black Pepe': 'Chad Black Pepe',
      'Chad Blue Pepe': 'Chad Blue Pepe',
      'Coin Flip Battles': 'Coin Flip Battles',
      'in prizes': 'in prizes',
      'Get your tickets now!': 'Get your tickets now!',
      'until the draw': 'until the draw',
      'Next Draw': 'Next Draw',
      'Prize pot': 'Prize pot',
      'Your tickets': 'Your tickets',
      'Buy Ticket': 'Buy Ticket',
      'Draw Nº': 'Draw Nº',
      'Last winners': 'Last winners',
      'How to Play': 'How to Play',
      Step: 'Step',
      'Buy Tickets Text': `You buy a ticket to join the prize. <br />
      Increase your chance buying more tickets.`,
      'Wait for the Draw': 'Wait for the Draw',
      'Wait for the Draw Text': `The draw has 3 winners with differents percentages being 10% to
      burn and 10% to platform. <br /> <br />
      <strong>1.</strong> 40% from all prize.
      <br />
      <strong>2.</strong> 25% from all prize.
      <br />
      <strong>3.</strong> 15% from all prize.
      <br />`,
      'Check for Prizes': 'Check for Prizes',
      'Check for Prizes Text':
        'Once the round’s over, come back to the page and check to see if you’ve won!',
      'Not Installed': 'Not Installed',
      'Connect using browser wallet': 'Connect using browser wallet',
      'The minimum amount is': 'The minimum amount is',
      'Choose a side': 'Choose a side',
      Create: 'Create',
      Creating: 'Creating',
      Heads: 'Heads',
      Tails: 'Tails',
      'Choose a Ninja': 'Choose a Ninja',
      Joining: 'Joining',
      'Join Match': 'Join Match',
      'Welcome Back, Ninja!': 'Welcome Back, Ninja!',
      'Wallet balances': 'Wallet balances',
      'Resgatar Balances': 'Resgatar Balances',
      'Points Summary': 'Points Summary',
      'Resgatar Airdrop': 'Resgatar Airdrop',
      Tasks: 'Tasks',
      'Balances Overview': 'Balances Overview',
      'Tooltip Account 1': `Wallet balances are the assets that you hold on your wallet`,
      'Tooltip Account 2': `'Tasks' are the quests that you complete by playing on
      the platform. They are Resgatared automatically.`,
      'Tooltip Community':
        'Community points are Ninja Points that you earn by doing the Zealy quests. Be sure to use the same wallet as the Zealy ones.',
      'Tooltip Liquidity Provider':
        'Liquidity provider points are the ones that you earn by providing liquidity for NLC/INJ LP token.',
      'Tooltip Platform':
        'Platform points are Ninja Points that you earn by playing on platform the platform.',
      'Available on Mainnet': 'Available on Mainnet',
      GO: 'Go',
      'Completed Times': 'Completed Times',
      'Not completed': 'Not completed',
      'Current Elo': 'Current Elo',
      Community: 'Community',
      'Liquidity Provider': 'Liquidity Provider',
      Platform: 'Platform',
      Soon: 'Soon',
      'Buy a Pepe Draw PvP ticket': 'Buy a Pepe Draw PvP ticket',
      'Win a Pepe Draw match': 'Win a Pepe Draw match',
      'Buy a Pepe Draw Battle Royale ticket':
        'Buy a Pepe Draw Battle Royale ticket',
      'Win a Pepe Draw Battle Royale match':
        'Win a Pepe Draw Battle Royale match',
      'Buy a Ninja Coin Flip ticket': 'Buy a Ninja Coin Flip ticket',
      'Win a Ninja Coin Flip match': 'Win a Ninja Coin Flip match',
      'Buy Neko Lottery ticket': 'Buy Neko Lottery ticket',
      'Win on Neko Lottery': 'Win on Neko Lottery',
      'Select an asset to withdraw': 'Select an asset to withdraw',
      'Available amount': 'Available amount',
      Resgatar: 'Resgatar',
      Selected: 'Selected',
      Select: 'Select',
      "Ninja's Chat": "Ninja's Chat",
      'Available soon': 'Available soon',
      Account: 'Account',
      Partnership: 'Partnership',
      between: 'between',
      Play: 'Play',
      'Coming Soon': 'Coming Soon',
      'highlight-text': `Born from a collaboration between both teams, the first themed game
      is here! Dive into the $NINJA Coin Flip—an exciting game where you
      choose your side and take on the luck battle.`,
      'seo-description': `Embark on an incredible journey with NinjaPvP, a PvP gaming platform on Injective developed by Ninja Labs,
      a blockchain hub created by the community developers of Injective.`,
      Created: 'Created',
      Bought: 'Bought',
      Fought: 'Fought',
      Action: 'Action',
    },
  },
  tr: {
    translation: {
      'Connect Wallet': 'Cüzdanı Bağla',
      'The max reachable platform points on Testnet is 600.': `Testnet'te erişilebilen maksimum platform puanı 600'dür. ⚠️`,
      Disconnect: 'Bağlantıyı kes',
      'Ninja Points': 'Ninja Puanları',
      'Live Activities': 'Canlı etkinlikler',
      'No data for while!': 'Bir süreliğine veri yok!',
      'Tickets Purchased': 'Satın alınan biletler',
      'Total plays': 'PvP Savaşları',
      Verifiability: 'Doğrulanabilirlik',
      'Verifiability-Text': `Şeffaflığın gücünün kilidini açın! Ninja Labs blockchain'den yararlanıyor
      doğrulanabilir ve şeffaf işlemler sağlayan teknoloji. Tüm
      Akıllı sözleşmelerimiz açık kaynaktır, güveni ve topluluğu destekler
      Oyun deneyiminizde gelişmiş güvenlik için inceleme.`,
      'Win-To-Earn': 'Kazanmak İçin Kazanmak',
      'Win-To-Earn-Text': `Ninja PvP'nin Kazan-Kazan özelliğiyle oyun deneyiminizi yükseltin
      kavram. Zaferin sadece olmadığı heyecanlı PvP mücadelelerinin tadını çıkarın
      zafer hakkında ama aynı zamanda somut ödüller de getiriyor, her oyunu bir oyun haline getiriyor
      gerçek dünyadaki kazançlara yolculuk.`,
      Tournaments: 'Turnuvalar',
      'Tournaments-Text': `Yoğun PvP aksiyonu için Ninja PvP'nin heyecan verici turnuvalarına katılın!
      Satrançtan çekilişlere kadar yarışmalarımız heyecan verici fırsatlar sunuyor
      Oynanış ve gerçek ödüller, her maçı bir fırsata dönüştürüyor
      zafer ve ödüller için.`,
      Time: 'Zaman',
      'Time (GMT)': 'Zaman (GMT)',
      Game: 'Oyun',
      Player: 'Oyuncu',
      Amount: 'Miktar',
      'Profit/Loss': 'Kar veya zarar',
      Ticket: 'Bilet fiyatı',
      'Join Match': 'Oyuna katılmak',
      'Opened Games': 'Açılan Oyunlar',
      'Choose your side': 'Tarafını seç',
      Join: 'Katılmak',
      'Draws in': 'Çiziyor',
      People: 'İnsanlar',
      'Current Prize': 'Güncel Ödül',
      'Rewards per tickets': 'Bilet başına ödüller',
      'Criar Partida': 'Oyun oluştur',
      'Waiting for match': 'Maç bekleniyor',
      'Chads Battle Royale': 'Çad Savaşı Royale',
      'PvP Battles': 'PvP Savaşları',
      'Chad Black Pepe': 'Çad Siyah Pepe',
      'Chad Blue Pepe': 'Çad Mavi Pepe',
      'Coin Flip Battles': 'Yazı-tura savaşları',
      'in prizes': 'ödüllerde',
      'Get your tickets now!': 'Biletlerinizi hemen alın!',
      'until the draw': 'çekilişe kadar',
      'Next Draw': 'Sonraki Çekiliş',
      'Prize pot': 'Ödül potu',
      'Your tickets': 'Biletleriniz',
      'Buy Ticket': 'Bilet al',
      'Draw Nº': 'Numarayı Çiz',
      'Last winners': 'Son kazananlar',
      'How to Play': 'Nasıl oynanır',
      Step: 'Adım',
      'Buy Tickets Text': `Ödüle katılmak için bir bilet alıyorsunuz. <br />
      Daha fazla bilet satın alma şansınızı artırın.`,
      'Wait for the Draw': 'Çekilişi bekleyin',
      'Wait for the Draw Text': `Çekilişte 3 kazanan var ve farklı yüzdeler %10'dur.
      yak ve %10'u platforma. <br /> <br />
      <strong>1.</strong> Tüm ödülden %40.
      <br />
      <strong>2.</strong> Tüm ödülden %25.
      <br />
      <strong>3.</strong> Tüm ödülden %15.
      <br />`,
      'Check for Prizes': 'Ödülleri Kontrol Edin',
      'Check for Prizes Text':
        'Tur bittiğinde sayfaya geri dönün ve kazanıp kazanmadığınızı kontrol edin!',
      'Not Installed': 'Yüklü değil',
      'Connect using browser wallet': 'Tarayıcı cüzdanını kullanarak bağlanın',
      'The minimum amount is': 'Asgari tutar',
      'Choose a side': 'Bir taraf seçin',
      Create: 'Yaratmak',
      Creating: 'Oluşturma',
      Heads: 'Kafalar',
      Tails: 'Kuyruklar',
      'Choose a Ninja': 'Bir Ninja seçin',
      Joining: 'Birleştirme',
      'Join Match': 'Oyuna katılmak',
      'Welcome Back, Ninja!': 'Tekrar hoş geldin Ninja!',
      'Wallet balances': 'Cüzdan bakiyeleri',
      'Resgatar Balances': 'Bakiye Talep Etme',
      'Points Summary': 'Puan Özeti',
      'Resgatar Airdrop': "Airdrop'u talep edin",
      Tasks: 'Görevler',
      'Balances Overview': 'Bakiyelere Genel Bakış',
      'Tooltip Account 1': `Cüzdan bakiyeleri, cüzdanınızda tuttuğunuz varlıklardır.`,
      'Tooltip Account 2': `'Görevler' oynayarak tamamladığınız görevlerdir.
      platform. Otomatik olarak talep edilirler.`,
      'Tooltip Community':
        'Topluluk puanları, Zealy görevlerini yaparak kazandığınız Ninja Puanlarıdır. Zealy olanlarla aynı cüzdanı kullanmaktan emin olun.',
      'Tooltip Liquidity Provider':
        'Likit sağlayıcı puanları, NLC/INJ LP token için likidite sağlayarak kazandığınız puanlardır.',
      'Tooltip Platform':
        'Platform puanları, platformda oynayarak kazandığınız Ninja Puanlarıdır.',
      'Available on Mainnet': "Mainnet'te mevcut",
      GO: 'Gitmek',
      'Completed Times': 'Tamamlanan Zamanlar',
      'Not completed': 'Tamamlanmamıs',
      'Current Elo': 'Mevcut Elo',
      Community: 'Toplum',
      'Liquidity Provider': 'Likidite Sağlayıcı',
      Platform: 'platformu',
      Soon: 'Yakında',
      'Buy a Pepe Draw PvP ticket': 'Pepe Draw PvP bileti satın alın',
      'Win a Pepe Draw match': 'Pepe Beraberliği maçı kazan',
      'Buy a Pepe Draw Battle Royale ticket':
        'Pepe Draw Battle Royale bileti satın alın',
      'Win a Pepe Draw Battle Royale match':
        'Pepe Draw Battle Royale maçı kazanın',
      'Buy a Ninja Coin Flip ticket': 'Ninja Coin Flip bileti satın alın',
      'Win a Ninja Coin Flip match': 'Bir Ninja Yazı-tura maçı kazanın',
      'Buy Neko Lottery ticket': 'Neko Piyango bileti satın al',
      'Win on Neko Lottery': 'Neko Lotosunda Kazanın',
      'Select an asset to withdraw': 'Çekilecek bir varlık seçin',
      'Available amount': 'Mevcut miktar',
      Resgatar: 'İddia',
      Selected: 'Seçildi',
      Select: 'Seçme',
      "Ninja's Chat": "Ninja'nın Sohbeti",
      'Available soon': 'Yakında kullanılabilir',
      Account: 'Hesap',
      Partnership: 'Ortaklık',
      between: 'arasında',
      Play: 'Oynamak',
      'Coming Soon': 'Yakında gelecek',
      'highlight-text': `Her iki takımın işbirliğinden doğan, ilk temalı oyun burada! $NINJA Coin Flip'e dalın—tarafınızı seçin ve şans savaşına katılın.`,
      'seo-description': `Ninja Labs tarafından geliştirilen Injective'deki PvP oyun platformu NinjaPvP ile inanılmaz bir yolculuğa çıkın,
      Injective'in topluluk geliştiricileri tarafından oluşturulan bir blockchain merkezi.`,
      Created: 'Oluşturuldu',
      Bought: 'Satın alınmış',
      Fought: 'Kavga etti',
      Action: 'Aksiyon',
    },
  },
  pt: {
    translation: {
      'Connect Wallet': 'Conectar Carteira',
      'The max reachable platform points on Testnet is 600.':
        'O máximo de pontos alcançáveis na plataforma de Testnet é 600. ⚠️',
      Disconnect: 'Desconectar',
      'Ninja Points': 'Pontos Ninja',
      'Live Activities': 'Atividades ao vivo',
      'No data for while!': 'Sem dados por enquanto!',
      'Tickets Purchased': 'Tíquetes Comprados',
      'Total plays': 'Batalhas PvP',
      Verifiability: 'Verificabilidade',
      'Verifiability-Text': `Desbloqueie o poder da transparência! A Ninja Labs utiliza a tecnologia blockchain,
      proporcionando transações verificáveis e transparentes. Todos
      os nossos contratos inteligentes são de código aberto, promovendo confiança e escrutínio
      comunitário para uma segurança aprimorada em sua experiência de jogo.`,
      'Win-To-Earn': 'Venca-Para-Receber',
      'Win-To-Earn-Text': `Eleve sua experiência de jogo com o conceito de Venca-Para-Receber da Ninja PvP.
      Desfrute de desafios PvP animados onde a vitória não é apenas
      sobre glória, mas também traz recompensas tangíveis, tornando cada jogo uma
      jornada para ganhos no mundo real.`,
      Tournaments: 'Torneios',
      'Tournaments-Text': `Junte-se aos emocionantes torneios da Ninja PvP para ação PvP intensa!
      De xadrez a sorteios, nossas competições oferecem jogabilidade empolgante e
      recompensas reais, transformando cada partida em uma oportunidade
      de vitória e prêmios.`,
      Time: 'Tempo',
      'Time (GMT)': 'Tempo (GMT)',
      Game: 'Jogo',
      Player: 'Jogador',
      Amount: 'Quantidade',
      'Profit/Loss': 'Lucro/Prejuízo',
      Ticket: 'Preço do bilhete',
      'Join Match': 'Entrar no Jogo',
      'Opened Games': 'Jogos Abertos',
      'Choose your side': 'Escolha seu lado',
      Join: 'Entrar',
      'Draws in': 'Sorteios em',
      People: 'Pessoas',
      'Current Prize': 'Prêmio Atual',
      'Rewards per tickets': 'Recompensas por bilhetes',
      'Criar Partida': 'Criar jogo',
      'Waiting for match': 'Aguardando partida',
      'Chads Battle Royale': 'Batalha Real de Chads',
      'PvP Battles': 'Batalhas PvP',
      'Chad Black Pepe': 'Chad Pepe Preto',
      'Chad Blue Pepe': 'Chad Pepe Azul',
      'Coin Flip Battles': 'Batalhas de Cara ou Coroa',
      'in prizes': 'em prêmios',
      'Get your tickets now!': 'Adquira seus bilhetes agora!',
      'until the draw': 'até o sorteio',
      'Next Draw': 'Próximo Sorteio',
      'Prize pot': 'Prêmio acumulado',
      'Your tickets': 'Seus bilhetes',
      'Buy Ticket': 'Comprar Bilhete',
      'Draw Nº': 'Sorteio Nº',
      'Last winners': 'Últimos vencedores',
      'How to Play': 'Como Jogar',
      Step: 'Passo',
      'Buy Tickets Text': `Você compra um bilhete para concorrer ao prêmio. <br />
      Aumente suas chances comprando mais bilhetes.`,
      'Wait for the Draw': 'Aguarde o Sorteio',
      'Wait for the Draw Text': `O sorteio tem 3 vencedores com diferentes porcentagens sendo 10% para
      queima e 10% para plataforma. <br /> <br />
      <strong>1.</strong> 40% de todo o prêmio.
      <br />
      <strong>2.</strong> 25% de todo o prêmio.
      <br />
      <strong>3.</strong> 15% de todo o prêmio.
      <br />`,
      'Check for Prizes': 'Verificar Prêmios',
      'Check for Prizes Text':
        'Após o término da rodada, volte para a página e verifique se você ganhou!',
      'Not Installed': 'Não Instalado',
      'Connect using browser wallet': 'Conectar usando carteira do navegador',
      'The minimum amount is': 'O valor mínimo é',
      'Choose a side': 'Escolha um lado',
      Create: 'Criar',
      Creating: 'Criando',
      Heads: 'Cara',
      Tails: 'Coroa',
      'Choose a Ninja': 'Escolha um Ninja',
      Joining: 'Entrando',
      'Join Match': 'Entrar no jogo',
      'Welcome Back, Ninja!': 'Bem-vindo de volta, Ninja!',
      'Wallet balances': 'Saldo da carteira',
      'Resgatar Balances': 'Reivindicar Saldos',
      'Points Summary': 'Resumo de Pontos',
      'Resgatar Airdrop': 'Reivindicar Airdrop',
      Tasks: 'Tarefas',
      'Balances Overview': 'Visão geral dos saldos',
      'Tooltip Account 1': `Saldo da carteira são os ativos que você mantém na sua carteira.`,
      'Tooltip Account 2': `'Tarefas' são as missões que você completa jogando na
      plataforma. Elas são reivindicadas automaticamente.`,
      'Tooltip Community':
        'Os pontos da comunidade são Pontos Ninja que você ganha ao realizar as missões Zealy. Certifique-se de usar a mesma carteira que a Zealy.',
      'Tooltip Liquidity Provider':
        'Os pontos do provedor de liquidez são aqueles que você ganha ao fornecer liquidez para o token NLC/INJ LP.',
      'Tooltip Platform':
        'Os pontos da plataforma são Pontos Ninja que você ganha ao jogar na plataforma.',
      'Available on Mainnet': 'Disponível no Mainnet',
      GO: 'Ir',
      'Completed Times': 'Vezes Completadas',
      'Not completed': 'Não concluído',
      'Current Elo': 'Elo Atual',
      Community: 'Comunidade',
      'Liquidity Provider': 'Provedor de Liquidez',
      Platform: 'Plataforma',
      Soon: 'Em breve',
      'Buy a Pepe Draw PvP ticket': 'Compre um bilhete PvP Pepe Draw',
      'Win a Pepe Draw match': 'Vença uma partida Pepe Draw',
      'Buy a Pepe Draw Battle Royale ticket':
        'Compre um bilhete Batalha Real Pepe Draw',
      'Win a Pepe Draw Battle Royale match':
        'Vença uma partida Batalha Real Pepe Draw',
      'Buy a Ninja Coin Flip ticket':
        'Compre um bilhete de Cara ou Coroa Ninja',
      'Win a Ninja Coin Flip match': 'Vença uma partida de Cara ou Coroa Ninja',
      'Buy Neko Lottery ticket': 'Compre um bilhete da Loteria Neko',
      'Win on Neko Lottery': 'Ganhe na Loteria Neko',
      'Select an asset to withdraw': 'Selecione um ativo para sacar',
      'Available amount': 'Quantidade disponível',
      Resgatar: 'Reivindicar',
      Selected: 'Selecionado',
      Select: 'Selecionar',
      "Ninja's Chat": 'Chat do Ninja',
      'Available soon': 'Disponível em breve',
      Account: 'Conta',
      Partnership: 'Parceria',
      between: 'entre',
      Play: 'Jogar',
      'Coming soon': 'Em breve',
      'highlight-text': `Nascido de uma colaboração entre ambas as equipes, o primeiro jogo temático está aqui! Mergulhe no $NINJA Coin Flip – um jogo emocionante onde você escolhe o seu lado e enfrenta a batalha da sorte.`,
      'seo-description': `Embarque em uma jornada incrível com NinjaPvP, uma plataforma de jogos PvP no Injective desenvolvida pela Ninja Labs,
      um hub blockchain criado pelos desenvolvedores da comunidade do Injective.`,
      Created: 'Criou',
      Bought: 'Comprou',
      Fought: 'Lutou',
      Action: 'Ação',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
