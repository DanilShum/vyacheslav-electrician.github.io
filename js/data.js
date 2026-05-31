const advantages = [
  {
    id: 1,
    title: "Работаю без посредников",
    description: "Выполняю все работы лично. Никаких сторонних подрядчиков — один договор, одна ответственность.",
    stat: "100%",
    statLabel: "контроль качества"
  },
  {
    id: 2,
    title: "Фиксированная смета",
    description: "Цена согласовывается до начала работ и не меняется в процессе.",
    stat: "0%",
    statLabel: "непредвиденных расходов"
  },
  {
    id: 3,
    title: "Соблюдаю сроки",
    description: "Работаю по графику. Задержка — компенсация. Это прописано в договоре.",
    stat: "15+",
    statLabel: "лет опыта"
  },
  {
    id: 4,
    title: "Гарантия на работы",
    description: "Даю официальную гарантию на все выполненные работы до 3 лет.",
    stat: "3 года",
    statLabel: "гарантия"
  }
];

const services = [
  {
    id: 1,
    title: "Полный электромонтаж",
    description: "Полная замена проводки в квартире, доме или офисе. От проекта до реализации.",
    icon: "zap"
  },
  {
    id: 2,
    title: "Замена проводки",
    description: "Полная или частичная замена старой проводки на новую, соответствующую нормам.",
    icon: "wire"
  },
  {
    id: 3,
    title: "Установка щитов",
    description: "Монтаж электрощитов, сборка, подключение автоматов и УЗО.",
    icon: "grid"
  },
  {
    id: 4,
    title: "Розетки и выключатели",
    description: "Установка, замена и перенос розеток, выключателей, светильников.",
    icon: "plug"
  }
];

const portfolio = [
  {
    id: 1,
    title: "ЖК Легенда",
    area: "78 м²",
    year: "2025",
    description: "Полный электромонтаж квартиры",
    fullDescription: "Выполнен полный электромонтаж квартиры в жилом комплексе «Легенда». Заменена вся проводка, установлен электрощит, смонтированы розетки и выключатели. Установлены точечные светильники и люстры.",
    location: "ЖК Легенда, Казань",
    duration: "5 дней",
    price: "85 000 ₽",
    image: "assets/room1.jpeg",
    images: ["assets/room1.jpeg", "assets/room2.jpeg", "assets/image-3252732.png"]
  },
  {
    id: 2,
    title: "ЖК Ричмонд",
    area: "90 м²",
    year: "2025",
    description: "Электромонтаж с перепланировкой",
    fullDescription: "Электромонтаж квартиры с перепланировкой. Перенесены розетки и выключатели согласно новому плану. Установлен умный дом: управление освещением через смартфон.",
    location: "ЖК Ричмонд, Казань",
    duration: "7 дней",
    price: "110 000 ₽",
    image: "assets/room2.jpeg",
    images: ["assets/room2.jpeg", "assets/image-3252730.png", "assets/image-3252729.png"]
  },
  {
    id: 3,
    title: "ЖК Ричмонд",
    area: "52 м²",
    year: "2023",
    description: "Замена проводки в хрущевке",
    fullDescription: "Полная замена старой алюминиевой проводки на медную в хрущевке. Установлен новый электрощит с автоматами и УЗО. Перенесены розетки в удобные места.",
    location: "ЖК Ричмонд, Казань",
    duration: "4 дня",
    price: "65 000 ₽",
    image: "assets/image-3252730.png",
    images: ["assets/image-3252730.png", "assets/image-3252729.png", "assets/image-3252727.png"]
  },
  {
    id: 4,
    title: "ЖК Savin Premier",
    area: "60 м²",
    year: "2024",
    description: "Электромонтаж под ключ",
    fullDescription: "Электромонтаж квартиры под ключ. Смонтирована система освещения с регулировкой яркости. Установлены датчики движения в прихожей.",
    location: "ЖК Savin Premier, Казань",
    duration: "5 дней",
    price: "75 000 ₽",
    image: "assets/image-3252729.png",
    images: ["assets/image-3252729.png", "assets/image-3252727.png", "assets/image-3252732.png"]
  },
  {
    id: 5,
    title: "Частный дом",
    area: "210 м²",
    year: "2025",
    description: "Электромонтаж дома",
    fullDescription: "Полный электромонтаж частного дома. Смонтирован распределительный щит, заведен кабель, установлены все розетки, выключатели и светильники. Смонтировано заземление.",
    location: "Казань, частный сектор",
    duration: "14 дней",
    price: "250 000 ₽",
    image: "assets/image-3252727.png",
    images: ["assets/image-3252727.png", "assets/room1.jpeg", "assets/room2.jpeg"]
  },
  {
    id: 6,
    title: "ул. Чатаева",
    area: "78 м²",
    year: "2025",
    description: "Частичный электромонтаж",
    fullDescription: "Частичный электромонтаж: замена проводки в санузле и кухне. Перенос розеток, установка вытяжного вентилятора с датчиком влажности.",
    location: "ул. Чатаева, Казань",
    duration: "3 дня",
    price: "45 000 ₽",
    image: "assets/image-3252732.png",
    images: ["assets/image-3252732.png", "assets/image-3252730.png", "assets/image-3252729.png"]
  }
];

const icons = {
  zap: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
  wire: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
  grid: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>',
  plug: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>'
};