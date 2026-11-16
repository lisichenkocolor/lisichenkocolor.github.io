/* РАБОТЫ — редактируйте только этот файл для добавления проектов.
   Один объект { ... } = одно превью в сетке + отдельная страница проекта.
   Порядок объектов = порядок превью. После каждого объекта ставьте запятую.
   Чтобы добавить работу: скопируйте блок из PROJECT-TEMPLATE.txt и вставьте
   перед последней строкой ];. Заполните поля, положите файлы в images/ и video/.
   Новые работы автоматически переходят на следующую строку: пять на компьютере.

   БЫСТРАЯ ЗАГРУЗКА + 4K В ПОЛНОМ ЭКРАНЕ:
   каждый кадр хранится в четырёх версиях —
   thumb — уменьшенная копия для ячеек сетки и превью главной,
   src — копия 1920 px для большого кадра и мгновенного показа на весь экран,
   full — оптимизированный 4K, который открывается в полном экране,
   original — исходный файл 4K без малейших изменений (архив на диске).
   После добавления новых кадров запустите make-web-versions.bat —
   он сам создаст все копии в папках web/.
*/
const PROJECTS = [

  // ==================== РАБОТА 01 ====================
  {
    // Уникальный адрес работы. Латиница, цифры, дефис. Не повторять.
    id: "prj-01",
    // Название: появляется по центру превью и на странице проекта.
    title: "Сопка Колдунья. Камчатка",
    // Дополнительная строка под названием.
    subtitle: "Влог · естественный свет",
    // Картинка главной сетки — уменьшенная копия. Автоматически центрируется и заполняет блок.
    preview: "images/prj-01/web/frame-01-thumb.jpg",
    // Полное описание на странице проекта.
    description: "Видеоряд был снят мной во время поездки на родину. Задачей было передать окружение, природу, людей естественным образом. Снято на камеру Sony ZV-E10 с объективами Sigma.",
    // Первый кадр — крупный слева, два следующих — справа. Остальные — сетка по три без обрезки.
    // thumb — копия для ячеек, src — 1920 px, full — оптимизированный 4K для полного экрана,
    // original — исходный файл 4K без изменений.
    frames: [
      { src: "images/prj-01/web/frame-01.jpg", thumb: "images/prj-01/web/frame-01-thumb.jpg", full: "images/prj-01/web/frame-01-full.jpg", original: "images/prj-01/frame-01.jpg" },
      { src: "images/prj-01/web/frame-02.jpg", thumb: "images/prj-01/web/frame-02-thumb.jpg", full: "images/prj-01/web/frame-02-full.jpg", original: "images/prj-01/frame-02.jpg" },
      { src: "images/prj-01/web/frame-03.jpg", thumb: "images/prj-01/web/frame-03-thumb.jpg", full: "images/prj-01/web/frame-03-full.jpg", original: "images/prj-01/frame-03.jpg" },
      { src: "images/prj-01/web/frame-04.jpg", thumb: "images/prj-01/web/frame-04-thumb.jpg", full: "images/prj-01/web/frame-04-full.jpg", original: "images/prj-01/frame-04.jpg" },
      { src: "images/prj-01/web/frame-05.jpg", thumb: "images/prj-01/web/frame-05-thumb.jpg", full: "images/prj-01/web/frame-05-full.jpg", original: "images/prj-01/frame-05.jpg" },
      { src: "images/prj-01/web/frame-06.jpg", thumb: "images/prj-01/web/frame-06-thumb.jpg", full: "images/prj-01/web/frame-06-full.jpg", original: "images/prj-01/frame-06.jpg" },
      { src: "images/prj-01/web/frame-07.jpg", thumb: "images/prj-01/web/frame-07-thumb.jpg", full: "images/prj-01/web/frame-07-full.jpg", original: "images/prj-01/frame-07.jpg" },
      { src: "images/prj-01/web/frame-08.jpg", thumb: "images/prj-01/web/frame-08-thumb.jpg", full: "images/prj-01/web/frame-08-full.jpg", original: "images/prj-01/frame-08.jpg" },
      { src: "images/prj-01/web/frame-09.jpg", thumb: "images/prj-01/web/frame-09-thumb.jpg", full: "images/prj-01/web/frame-09-full.jpg", original: "images/prj-01/frame-09.jpg" },
      { src: "images/prj-01/web/frame-10.jpg", thumb: "images/prj-01/web/frame-10-thumb.jpg", full: "images/prj-01/web/frame-10-full.jpg", original: "images/prj-01/frame-10.jpg" },
    ],
    // Видео: null — пока нет; варианты подключения описаны в инструкции.
    video: null,
    // Сравнение: исходные кадры одного плана на разных этапах.
    // label — редактируемая подпись; src — лёгкая копия из web/ для быстрого показа.
    comparison: {
      frames: [
        { label: "Log", src: "images/prj-01/comparison/web/vs-1.jpg" },
        { label: "Rec.709", src: "images/prj-01/comparison/web/vs-2.jpg" },
        { label: "Primaries", src: "images/prj-01/comparison/web/vs-3.jpg" },
        { label: "Light, color & skin Fix", src: "images/prj-01/comparison/web/vs-4.jpg" },
        { label: "Grade", src: "images/prj-01/comparison/web/vs-5.jpg" },
        { label: "Final", src: "images/prj-01/comparison/web/vs-6.jpg" },
      ],
    },
    // true — пример из референса; для своей работы поставьте false.
    demo: false,
  },

  // ==================== РАБОТА 02 ====================
  {
    // Уникальный адрес работы. Латиница, цифры, дефис. Не повторять.
    id: "prj-02",
    // Название: появляется по центру превью и на странице проекта.
    title: "Бирюзовый автомобиль",
    // Дополнительная строка под названием.
    subtitle: "Клип",
    // Картинка главной сетки — уменьшенная копия. Автоматически центрируется и заполняет блок.
    preview: "images/prj-02/web/frame-01-thumb.jpg",
    // Полное описание на странице проекта.
    description: "",
    // Первый кадр — крупный слева, два следующих — справа. Остальные — сетка по три без обрезки.
    // thumb — копия для ячеек, src — 1920 px, full — оптимизированный 4K для полного экрана,
    // original — исходный файл 4K без изменений.
    frames: [
      { src: "images/prj-02/web/frame-01.jpg", thumb: "images/prj-02/web/frame-01-thumb.jpg", full: "images/prj-02/web/frame-01-full.jpg", original: "images/prj-02/frame-01.jpg" },
      { src: "images/prj-02/web/frame-02.jpg", thumb: "images/prj-02/web/frame-02-thumb.jpg", full: "images/prj-02/web/frame-02-full.jpg", original: "images/prj-02/frame-02.jpg" },
      { src: "images/prj-02/web/frame-03.jpg", thumb: "images/prj-02/web/frame-03-thumb.jpg", full: "images/prj-02/web/frame-03-full.jpg", original: "images/prj-02/frame-03.jpg" },
      { src: "images/prj-02/web/frame-04.jpg", thumb: "images/prj-02/web/frame-04-thumb.jpg", full: "images/prj-02/web/frame-04-full.jpg", original: "images/prj-02/frame-04.jpg" },
      { src: "images/prj-02/web/frame-05.jpg", thumb: "images/prj-02/web/frame-05-thumb.jpg", full: "images/prj-02/web/frame-05-full.jpg", original: "images/prj-02/frame-05.jpg" },
    ],
    // Видео: null — пока нет; варианты подключения описаны в инструкции.
    video: null,
    // Сравнение: исходные кадры одного плана на разных этапах.
    // label — редактируемая подпись; src — лёгкая копия из web/ для быстрого показа.
    comparison: {
      frames: [
        { label: "Log", src: "images/prj-02/comparison/web/vs-1.jpg" },
        { label: "Rec.709", src: "images/prj-02/comparison/web/vs-2.jpg" },
        { label: "Primaries", src: "images/prj-02/comparison/web/vs-3.jpg" },
        { label: "Light & color Fix", src: "images/prj-02/comparison/web/vs-4.jpg" },
        { label: "Local grade", src: "images/prj-02/comparison/web/vs-5.jpg" },
        { label: "Final", src: "images/prj-02/comparison/web/vs-6.jpg" },
      ],
    },
    // true — пример из референса; для своей работы поставьте false.
    demo: true,
  },

  // ==================== РАБОТА 03 ====================
  {
    // Уникальный адрес работы. Латиница, цифры, дефис. Не повторять.
    id: "prj-03",
    // Название: появляется по центру превью и на странице проекта.
    title: "Mercedes-AMG",
    // Дополнительная строка под названием.
    subtitle: "Клип",
    // Картинка главной сетки — уменьшенная копия. Автоматически центрируется и заполняет блок.
    preview: "images/prj-03/web/frame-01-thumb.jpg",
    // Полное описание на странице проекта.
    description: "",
    // Первый кадр — крупный слева, два следующих — справа. Остальные — сетка по три без обрезки.
    // thumb — копия для ячеек, src — 1920 px, full — оптимизированный 4K для полного экрана,
    // original — исходный файл 4K без изменений.
    frames: [
      { src: "images/prj-03/web/frame-01.jpg", thumb: "images/prj-03/web/frame-01-thumb.jpg", full: "images/prj-03/web/frame-01-full.jpg", original: "images/prj-03/frame-01.jpg" },
      { src: "images/prj-03/web/frame-02.jpg", thumb: "images/prj-03/web/frame-02-thumb.jpg", full: "images/prj-03/web/frame-02-full.jpg", original: "images/prj-03/frame-02.jpg" },
      { src: "images/prj-03/web/frame-03.jpg", thumb: "images/prj-03/web/frame-03-thumb.jpg", full: "images/prj-03/web/frame-03-full.jpg", original: "images/prj-03/frame-03.jpg" },
      { src: "images/prj-03/web/frame-05.jpg", thumb: "images/prj-03/web/frame-05-thumb.jpg", full: "images/prj-03/web/frame-05-full.jpg", original: "images/prj-03/frame-05.jpg" },
      { src: "images/prj-03/web/frame-06.jpg", thumb: "images/prj-03/web/frame-06-thumb.jpg", full: "images/prj-03/web/frame-06-full.jpg", original: "images/prj-03/frame-06.jpg" },
      { src: "images/prj-03/web/frame-07.jpg", thumb: "images/prj-03/web/frame-07-thumb.jpg", full: "images/prj-03/web/frame-07-full.jpg", original: "images/prj-03/frame-07.jpg" },
      { src: "images/prj-03/web/frame-08.jpg", thumb: "images/prj-03/web/frame-08-thumb.jpg", full: "images/prj-03/web/frame-08-full.jpg", original: "images/prj-03/frame-08.jpg" },
      { src: "images/prj-03/web/frame-09.jpg", thumb: "images/prj-03/web/frame-09-thumb.jpg", full: "images/prj-03/web/frame-09-full.jpg", original: "images/prj-03/frame-09.jpg" },
      { src: "images/prj-03/web/frame-10.jpg", thumb: "images/prj-03/web/frame-10-thumb.jpg", full: "images/prj-03/web/frame-10-full.jpg", original: "images/prj-03/frame-10.jpg" },
    ],
    // Видео: null — пока нет; варианты подключения описаны в инструкции.
    video: null,
    // Сравнение: исходные кадры одного плана на разных этапах.
    // label — редактируемая подпись; src — лёгкая копия из web/ для быстрого показа.
    comparison: {
      frames: [
        { label: "Log", src: "images/prj-03/comparison/web/vs-1.jpg" },
        { label: "Rec.709", src: "images/prj-03/comparison/web/vs-2.jpg" },
        { label: "Primaries", src: "images/prj-03/comparison/web/vs-3.jpg" },
        { label: "Color & skin Fix", src: "images/prj-03/comparison/web/vs-4.jpg" },
        { label: "Grade", src: "images/prj-03/comparison/web/vs-5.jpg" },
        { label: "Final", src: "images/prj-03/comparison/web/vs-6.jpg" },
      ],
    },
    // true — пример из референса; для своей работы поставьте false.
    demo: false,
  },

  // ==================== РАБОТА 04 ====================
  {
    // Уникальный адрес работы. Латиница, цифры, дефис. Не повторять.
    id: "prj-04",
    // Название: появляется по центру превью и на странице проекта.
    title: "Сопка Мишенная в тумане. Камчатка",
    // Дополнительная строка под названием.
    subtitle: "Влог · cinematic",
    // Картинка главной сетки — уменьшенная копия. Автоматически центрируется и заполняет блок.
    preview: "images/prj-04/web/frame-01-thumb.jpg",
    // Полное описание на странице проекта.
    description: "Футажи, снятые мной специально для цветокоррекции в ''киношном'' стиле. Камера Sony ZV-E10",
    // Первый кадр — крупный слева, два следующих — справа. Остальные — сетка по три без обрезки.
    // thumb — копия для ячеек, src — 1920 px, full — оптимизированный 4K для полного экрана,
    // original — исходный файл 4K без изменений.
    frames: [
      { src: "images/prj-04/web/frame-01.jpg", thumb: "images/prj-04/web/frame-01-thumb.jpg", full: "images/prj-04/web/frame-01-full.jpg", original: "images/prj-04/frame-01.jpg" },
      { src: "images/prj-04/web/frame-02.jpg", thumb: "images/prj-04/web/frame-02-thumb.jpg", full: "images/prj-04/web/frame-02-full.jpg", original: "images/prj-04/frame-02.jpg" },
      { src: "images/prj-04/web/frame-03.jpg", thumb: "images/prj-04/web/frame-03-thumb.jpg", full: "images/prj-04/web/frame-03-full.jpg", original: "images/prj-04/frame-03.jpg" },
      { src: "images/prj-04/web/frame-04.jpg", thumb: "images/prj-04/web/frame-04-thumb.jpg", full: "images/prj-04/web/frame-04-full.jpg", original: "images/prj-04/frame-04.jpg" },
      { src: "images/prj-04/web/frame-05.jpg", thumb: "images/prj-04/web/frame-05-thumb.jpg", full: "images/prj-04/web/frame-05-full.jpg", original: "images/prj-04/frame-05.jpg" },
      { src: "images/prj-04/web/frame-06.jpg", thumb: "images/prj-04/web/frame-06-thumb.jpg", full: "images/prj-04/web/frame-06-full.jpg", original: "images/prj-04/frame-06.jpg" },
      { src: "images/prj-04/web/frame-07.jpg", thumb: "images/prj-04/web/frame-07-thumb.jpg", full: "images/prj-04/web/frame-07-full.jpg", original: "images/prj-04/frame-07.jpg" },
      { src: "images/prj-04/web/frame-08.jpg", thumb: "images/prj-04/web/frame-08-thumb.jpg", full: "images/prj-04/web/frame-08-full.jpg", original: "images/prj-04/frame-08.jpg" },
      { src: "images/prj-04/web/frame-09.jpg", thumb: "images/prj-04/web/frame-09-thumb.jpg", full: "images/prj-04/web/frame-09-full.jpg", original: "images/prj-04/frame-09.jpg" },
    ],
    // Видео: null — пока нет; варианты подключения описаны в инструкции.
    video: null,
    // Сравнение: исходные кадры одного плана на разных этапах.
    // label — редактируемая подпись; src — путь к лёгкой копии или оригиналу.
    comparison: {
      frames: [
        { label: "Log", src: "" },
        { label: "Rec.709", src: "" },
        { label: "Primaries", src: "" },
        { label: "Color & skin Fix", src: "" },
        { label: "Grade", src: "" },
        { label: "Final", src: "" },
      ],
    },
    // true — пример из референса; для своей работы поставьте false.
    demo: true,
  },

  // ==================== РАБОТА 05 ====================
  {
    // Уникальный адрес работы. Латиница, цифры, дефис. Не повторять.
    id: "prj-05",
    // Название: появляется по центру превью и на странице проекта.
    title: "Дайверы",
    // Дополнительная строка под названием.
    subtitle: "Клип · документалистика",
    // Картинка главной сетки — уменьшенная копия. Автоматически центрируется и заполняет блок.
    preview: "images/prj-05/web/frame-01-thumb.jpg",
    // Полное описание на странице проекта.
    description: "",
    // Первый кадр — крупный слева, два следующих — справа. Остальные — сетка по три без обрезки.
    // thumb — копия для ячеек, src — 1920 px, full — оптимизированный 4K для полного экрана,
    // original — исходный файл 4K без изменений.
    frames: [
      { src: "images/prj-05/web/frame-01.jpg", thumb: "images/prj-05/web/frame-01-thumb.jpg", full: "images/prj-05/web/frame-01-full.jpg", original: "images/prj-05/frame-01.jpg" },
      { src: "images/prj-05/web/frame-02.jpg", thumb: "images/prj-05/web/frame-02-thumb.jpg", full: "images/prj-05/web/frame-02-full.jpg", original: "images/prj-05/frame-02.jpg" },
      { src: "images/prj-05/web/frame-03.jpg", thumb: "images/prj-05/web/frame-03-thumb.jpg", full: "images/prj-05/web/frame-03-full.jpg", original: "images/prj-05/frame-03.jpg" },
      { src: "images/prj-05/web/frame-04.jpg", thumb: "images/prj-05/web/frame-04-thumb.jpg", full: "images/prj-05/web/frame-04-full.jpg", original: "images/prj-05/frame-04.jpg" },
      { src: "images/prj-05/web/frame-05.jpg", thumb: "images/prj-05/web/frame-05-thumb.jpg", full: "images/prj-05/web/frame-05-full.jpg", original: "images/prj-05/frame-05.jpg" },
      { src: "images/prj-05/web/frame-06.jpg", thumb: "images/prj-05/web/frame-06-thumb.jpg", full: "images/prj-05/web/frame-06-full.jpg", original: "images/prj-05/frame-06.jpg" },
    ],
    // Видео: null — пока нет; варианты подключения описаны в инструкции.
    video: null,
    // Сравнение: исходные кадры одного плана на разных этапах.
    // label — редактируемая подпись; src — путь к лёгкой копии или оригиналу.
    comparison: {
      frames: [
        { label: "Log", src: "" },
        { label: "Rec.709", src: "" },
        { label: "Primaries", src: "" },
        { label: "Color & skin Fix", src: "" },
        { label: "Grade", src: "" },
        { label: "Final", src: "" },
      ],
    },
    // true — пример из референса; для своей работы поставьте false.
    demo: true,
  },

  // ==================== РАБОТА 06 ====================
  {
    // Уникальный адрес работы. Латиница, цифры, дефис. Не повторять.
    id: "prj-06",
    // Название: появляется по центру превью и на странице проекта.
    title: "Озеро. Закат. Камчатка",
    // Дополнительная строка под названием.
    subtitle: "Влог · cinematic",
    // Картинка главной сетки — уменьшенная копия. Автоматически центрируется и заполняет блок.
    preview: "images/prj-06/web/frame-01-thumb.jpg",
    // Полное описание на странице проекта.
    description: "Снятые мной футажи на камеру Sony ZV-E10. Идея была максимально передать невероятный закат, краски неба и переливы водяной глади.",
    // Первый кадр — крупный слева, два следующих — справа. Остальные — сетка по три без обрезки.
    // thumb — копия для ячеек, src — 1920 px, full — оптимизированный 4K для полного экрана,
    // original — исходный файл 4K без изменений.
    frames: [
      { src: "images/prj-06/web/frame-01.jpg", thumb: "images/prj-06/web/frame-01-thumb.jpg", full: "images/prj-06/web/frame-01-full.jpg", original: "images/prj-06/frame-01.jpg" },
      { src: "images/prj-06/web/frame-02.jpg", thumb: "images/prj-06/web/frame-02-thumb.jpg", full: "images/prj-06/web/frame-02-full.jpg", original: "images/prj-06/frame-02.jpg" },
      { src: "images/prj-06/web/frame-03.jpg", thumb: "images/prj-06/web/frame-03-thumb.jpg", full: "images/prj-06/web/frame-03-full.jpg", original: "images/prj-06/frame-03.jpg" },
      { src: "images/prj-06/web/frame-04.jpg", thumb: "images/prj-06/web/frame-04-thumb.jpg", full: "images/prj-06/web/frame-04-full.jpg", original: "images/prj-06/frame-04.jpg" },
      { src: "images/prj-06/web/frame-05.jpg", thumb: "images/prj-06/web/frame-05-thumb.jpg", full: "images/prj-06/web/frame-05-full.jpg", original: "images/prj-06/frame-05.jpg" },
    ],
    // Видео: null — пока нет; варианты подключения описаны в инструкции.
    video: null,
    // Сравнение: исходные кадры одного плана на разных этапах.
    // label — редактируемая подпись; src — путь к лёгкой копии или оригиналу.
    comparison: {
      frames: [
        { label: "Log", src: "" },
        { label: "Rec.709", src: "" },
        { label: "Primaries", src: "" },
        { label: "Color & skin Fix", src: "" },
        { label: "Grade", src: "" },
        { label: "Final", src: "" },
      ],
    },
    // true — пример из референса; для своей работы поставьте false.
    demo: true,
  },

  // ==================== РАБОТА 07 ====================
  {
    // Уникальный адрес работы. Латиница, цифры, дефис. Не повторять.
    id: "prj-07",
    // Название: появляется по центру превью и на странице проекта.
    title: "Лия с псом",
    // Дополнительная строка под названием.
    subtitle: "Клип · бэкстейдж",
    // Картинка главной сетки — уменьшенная копия. Автоматически центрируется и заполняет блок.
    preview: "images/prj-07/web/frame-01-thumb.jpg",
    // Полное описание на странице проекта.
    description: "Несколько клипов снятых мной для бэкстейджа будучи на фотосессии у https://www.instagram.com/ph_ignatova?obrf=dnEzdmcydDQxNXpt",
    // Первый кадр — крупный слева, два следующих — справа. Остальные — сетка по три без обрезки.
    // thumb — копия для ячеек, src — 1920 px, full — оптимизированный 4K для полного экрана,
    // original — исходный файл 4K без изменений.
    frames: [
      { src: "images/prj-07/web/frame-01.jpg", thumb: "images/prj-07/web/frame-01-thumb.jpg", full: "images/prj-07/web/frame-01-full.jpg", original: "images/prj-07/frame-01.jpg" },
      { src: "images/prj-07/web/frame-02.jpg", thumb: "images/prj-07/web/frame-02-thumb.jpg", full: "images/prj-07/web/frame-02-full.jpg", original: "images/prj-07/frame-02.jpg" },
      { src: "images/prj-07/web/frame-03.jpg", thumb: "images/prj-07/web/frame-03-thumb.jpg", full: "images/prj-07/web/frame-03-full.jpg", original: "images/prj-07/frame-03.jpg" },
      { src: "images/prj-07/web/frame-04.jpg", thumb: "images/prj-07/web/frame-04-thumb.jpg", full: "images/prj-07/web/frame-04-full.jpg", original: "images/prj-07/frame-04.jpg" },
      { src: "images/prj-07/web/frame-05.jpg", thumb: "images/prj-07/web/frame-05-thumb.jpg", full: "images/prj-07/web/frame-05-full.jpg", original: "images/prj-07/frame-05.jpg" },
    ],
    // Видео: null — пока нет; варианты подключения описаны в инструкции.
    video: null,
    // Сравнение: исходные кадры одного плана на разных этапах.
    // label — редактируемая подпись; src — путь к лёгкой копии или оригиналу.
    comparison: {
      frames: [
        { label: "Log", src: "" },
        { label: "Rec.709", src: "" },
        { label: "Primaries", src: "" },
        { label: "Color & skin Fix", src: "" },
        { label: "Grade", src: "" },
        { label: "Final", src: "" },
      ],
    },
    // true — пример из референса; для своей работы поставьте false.
    demo: true,
  },

  // ==================== РАБОТА 08 ====================
  {
    // Уникальный адрес работы. Латиница, цифры, дефис. Не повторять.
    id: "prj-08",
    // Название: появляется по центру превью и на странице проекта.
    title: "Серфинг",
    // Дополнительная строка под названием.
    subtitle: "Клип · cinematic",
    // Картинка главной сетки — уменьшенная копия. Автоматически центрируется и заполняет блок.
    preview: "images/prj-08/web/frame-01-thumb.jpg",
    // Полное описание на странице проекта.
    description: "",
    // Первый кадр — крупный слева, два следующих — справа. Остальные — сетка по три без обрезки.
    // thumb — копия для ячеек, src — 1920 px, full — оптимизированный 4K для полного экрана,
    // original — исходный файл 4K без изменений.
    frames: [
      { src: "images/prj-08/web/frame-01.jpg", thumb: "images/prj-08/web/frame-01-thumb.jpg", full: "images/prj-08/web/frame-01-full.jpg", original: "images/prj-08/frame-01.jpg" },
      { src: "images/prj-08/web/frame-02.jpg", thumb: "images/prj-08/web/frame-02-thumb.jpg", full: "images/prj-08/web/frame-02-full.jpg", original: "images/prj-08/frame-02.jpg" },
      { src: "images/prj-08/web/frame-03.jpg", thumb: "images/prj-08/web/frame-03-thumb.jpg", full: "images/prj-08/web/frame-03-full.jpg", original: "images/prj-08/frame-03.jpg" },
      { src: "images/prj-08/web/frame-04.jpg", thumb: "images/prj-08/web/frame-04-thumb.jpg", full: "images/prj-08/web/frame-04-full.jpg", original: "images/prj-08/frame-04.jpg" },

    ],
    // Видео: null — пока нет; варианты подключения описаны в инструкции.
    video: null,
    // Сравнение: исходные кадры одного плана на разных этапах.
    // label — редактируемая подпись; src — путь к лёгкой копии или оригиналу.
    comparison: {
      frames: [
        { label: "Log", src: "" },
        { label: "Rec.709", src: "" },
        { label: "Primaries", src: "" },
        { label: "Color & skin Fix", src: "" },
        { label: "Grade", src: "" },
        { label: "Final", src: "" },
      ],
    },
    // true — пример из референса; для своей работы поставьте false.
    demo: true,
  },

  // ==================== РАБОТА 09 ====================
  {
    // Уникальный адрес работы. Латиница, цифры, дефис. Не повторять.
    id: "prj-09",
    // Название: появляется по центру превью и на странице проекта.
    title: "Недвижимость",
    // Дополнительная строка под названием.
    subtitle: "Реклама",
    // Картинка главной сетки — уменьшенная копия. Автоматически центрируется и заполняет блок.
    preview: "images/prj-09/web/frame-01-thumb.jpg",
    // Полное описание на странице проекта.
    description: "",
    // Первый кадр — крупный слева, два следующих — справа. Остальные — сетка по три без обрезки.
    // thumb — копия для ячеек, src — 1920 px, full — оптимизированный 4K для полного экрана,
    // original — исходный файл 4K без изменений.
    frames: [
      { src: "images/prj-09/web/frame-01.jpg", thumb: "images/prj-09/web/frame-01-thumb.jpg", full: "images/prj-09/web/frame-01-full.jpg", original: "images/prj-09/frame-01.jpg" },
      { src: "images/prj-09/web/frame-02.jpg", thumb: "images/prj-09/web/frame-02-thumb.jpg", full: "images/prj-09/web/frame-02-full.jpg", original: "images/prj-09/frame-02.jpg" },

    ],
    // Видео: null — пока нет; варианты подключения описаны в инструкции.
    video: null,
    // Сравнение: исходные кадры одного плана на разных этапах.
    // label — редактируемая подпись; src — путь к лёгкой копии или оригиналу.
    comparison: {
      frames: [
        { label: "Log", src: "" },
        { label: "Rec.709", src: "" },
        { label: "Primaries", src: "" },
        { label: "Color & skin Fix", src: "" },
        { label: "Grade", src: "" },
        { label: "Final", src: "" },
      ],
    },
    // true — пример из референса; для своей работы поставьте false.
    demo: true,
  },

  // ==================== РАБОТА 10 ====================
  {
    // Уникальный адрес работы. Латиница, цифры, дефис. Не повторять.
    id: "prj-10",
    // Название: появляется по центру превью и на странице проекта.
    title: "Джаз-бэнд",
    // Дополнительная строка под названием.
    subtitle: "Клип",
    // Картинка главной сетки — уменьшенная копия. Автоматически центрируется и заполняет блок.
    preview: "images/prj-10/web/frame-01-thumb.jpg",
    // Полное описание на странице проекта.
    description: "",
    // Первый кадр — крупный слева, два следующих — справа. Остальные — сетка по три без обрезки.
    // thumb — копия для ячеек, src — 1920 px, full — оптимизированный 4K для полного экрана,
    // original — исходный файл 4K без изменений.
    frames: [
      { src: "images/prj-10/web/frame-01.jpg", thumb: "images/prj-10/web/frame-01-thumb.jpg", full: "images/prj-10/web/frame-01-full.jpg", original: "images/prj-10/frame-01.jpg" },
      { src: "images/prj-10/web/frame-02.jpg", thumb: "images/prj-10/web/frame-02-thumb.jpg", full: "images/prj-10/web/frame-02-full.jpg", original: "images/prj-10/frame-02.jpg" },
      { src: "images/prj-10/web/frame-03.jpg", thumb: "images/prj-10/web/frame-03-thumb.jpg", full: "images/prj-10/web/frame-03-full.jpg", original: "images/prj-10/frame-03.jpg" },
      { src: "images/prj-10/web/frame-04.jpg", thumb: "images/prj-10/web/frame-04-thumb.jpg", full: "images/prj-10/web/frame-04-full.jpg", original: "images/prj-10/frame-04.jpg" },
      { src: "images/prj-10/web/frame-05.jpg", thumb: "images/prj-10/web/frame-05-thumb.jpg", full: "images/prj-10/web/frame-05-full.jpg", original: "images/prj-10/frame-05.jpg" },
      { src: "images/prj-10/web/frame-06.jpg", thumb: "images/prj-10/web/frame-06-thumb.jpg", full: "images/prj-10/web/frame-06-full.jpg", original: "images/prj-10/frame-06.jpg" },
    ],
    // Видео: null — пока нет; варианты подключения описаны в инструкции.
    video: null,
    // Сравнение: исходные кадры одного плана на разных этапах.
    // label — редактируемая подпись; src — путь к лёгкой копии или оригиналу.
    comparison: {
      frames: [
        { label: "Log", src: "" },
        { label: "Rec.709", src: "" },
        { label: "Primaries", src: "" },
        { label: "Color & skin Fix", src: "" },
        { label: "Grade", src: "" },
        { label: "Final", src: "" },
      ],
    },
    // true — пример из референса; для своей работы поставьте false.
    demo: true,
  },
];
