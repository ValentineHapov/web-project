<template>
  <div>

  </div>
</template>

<script>

export default {
  name: "PostsList",
  props: ['post'],
  data() {
    return {
      posts: [
        {
          id: 0,
          title: 'Во льдах в Антарктиде нашли неизвестных животных',
          url: 'Vo-Ldah',
          day: "14 Февраля",
          synop: 'Во время исследовательского бурения в Антарктиде' +
              ' британские ученые обнаружили на дне моря...',
          text: 'Ранее' +
              ' считали, что на антарктическом побережье отсутствуют ' +
              'прикрепленные бентосные формы жизни. Результаты исследования' +
              ' опубликованы в журнале Frontiers in Marine Science.\n' +
              'Плавучие шельфовые ледники занимают площадь более' +
              ' полутора миллионов квадратных километров вдоль' +
              ' побережья Антарктиды. Морское пространство под' +
              ' ними — величайшая неизведанная среда обитания на Земле.\n' +
              'Во время поискового бурения на шельфовом леднике' +
              ' Фильхнера исследователи из Британской антарктической ' +
              'службы пробурили всего восемь скважин на площади' +
              ' размером с теннисный корт, но этого было ' +
              'достаточно, чтобы сделать ряд открытий.'
        },
        {
          id: 1,
          title: 'Водород в автомобилях будущего планируется хранить в виде безопасной пасты',
          url: 'Hranit-vodorod',
          day: "14 Февраля",
          synop: 'Разработка принадлежит сотрудникам Института ' +
              'производственных технологий и перспективных ' +
              'материалов им. Фраунгофена IFAM в Дрездене. ',
          text: 'О разработке материал опубликовали на интернет-ресурсе ' +
              'данного учреждения.\n Основой нового вида водородного ' +
              'топлива стал твердый гидрид магния. Он в свою очередь ' +
              'принимает пастообразную форму, когда в среде со сложным ' +
              'эфиром взаимодействует с водородом.\n' +
              '\n' +
              'Ученые подчеркнули, что в двигателе водородная паста ' +
              'выделяется посредством плунжера, взаимодействует с водой, ' +
              'в итоге появляется газ. Перемещать Powerpaste можно будет ' +
              'в больших канистрах. Она весьма просто помещается в ' +
              'картриджи.\n' +
              '\n' +
              'Уже в текущем году на базе Центра проектов по хранению ' +
              'энергии и системам ZESS института IFAM начнут изготавливать ' +
              'Powerpaste в рамках пилотного проекта. Ожидается, что в год ' +
              'будут изготавливать порядка четырех тонн водородной ' +
              'топливной пасты.' +
              '\n'
        },

        {
          id: 2,
          title: 'Ученые выяснили причину вымирания мегафауны Северной Америки',
          url: 'Vimiranie-megafauni',
          day: "14 Февраля",
          synop:  'Результаты нового исследования немецких ученых ' +
              'предполагают, что исчезновение мамонтов и другой ' +
              'мегафауны Северной Америки в конце плейстоцена было ' +
              'связано с...' ,
          text: 'Результаты нового исследования немецких ученых ' +
              'предполагают, что исчезновение мамонтов и другой ' +
              'мегафауны Северной Америки в конце плейстоцена было ' +
              'связано с климатическими изменениями, а не с приходом ' +
              'на континент первых людей и истреблением ими крупных ' +
              'животных. Статья опубликована в журнале Nature ' +
              'Communications.\n' +
              'В позднем плейстоцене Северная Америка была домом для ' +
              'многих крупных животных, таких как мамонты, мастодонты, ' +
              'гигантские ленивцы, огромные бобры и похожие на броненосцев ' +
              'глиптодоны. Но примерно 12 тысяч лет назад большинство ' +
              'представителей мегафауны исчезли.\n' +
              'В свое время была выдвинута гипотеза, что причиной ' +
              'вымирания стал приход в Северную Америку 14 тысяч лет ' +
              'назад современных людей, охотников на "крупную дичь". ' +
              'Сторонники этой гипотезы утверждали, что крупные животные, ' +
              'которые сами находились на вершине пищевой цепи, не ' +
              'были готовы к встрече с вооруженным, хорошо ' +
              'социализированным противником и служили легкой добычей.'
        },

        {
          id: 3,
          title: 'Новый пластырь контролирует кровяное давление и биохимический уровень',
          url: 'Plastir-kotorii-kontroliruyet-davlenie',
          synop: '',
          day: "13 Февраля",
          text: 'Инженеры Калифорнийского университета в Сан-Диего ' +
              'разработали пластырь, который отслеживает кровяное ' +
              'давление, частоту сердечных сокращений, уровень глюкозы, ' +
              'а также алкоголя и кофеина. Это первое носимое ' +
              'устройство, которое контролирует сердечно-сосудистые ' +
              'сигналы и несколько биохимических уровней в организме ' +
              'человека одновременно. Такое устройство предназначено ' +
              'в частности для людей, страдающих от высокого давления, ' +
              'диабета или имеющих предрасположенность к тяжелой форме ' +
              'COVID-19. Он также может быть использован для выявления ' +
              'сепсиса — внезапного падения артериального давления, ' +
              'сопровождающегося повышением уровня лактата.'
        },
        {
          id: 4,
          title: 'Австралийские ученые научили нейросеть манипулировать действиями человека',
          url: 'Manipulirovat-nad-ludmi',
          synop: '',
          day: "13 Февраля",
          text: 'Манипулировать человеком и находить уязвимости в его ' +
              'поведении научили искусственный интеллект. Достижение ' +
              'принадлежит исследователям из Австралии.\n' +
              '\n' +
              'Нейросеть смогла выйти на новый уровень взаимодействия ' +
              'с человеком благодаря инновационной методике. ' +
              'Искусственный интеллект теперь может предсказывать ' +
              'поведение людей с точностью до 70%, рассказали ' +
              'австралийские специалисты после проведенных испытаний.\n' +
              '\n' +
              'Участникам эксперимента предлагалось нажимать кнопки ' +
              'синего и красного цветов, чтобы выиграть импровизированную ' +
              'валюту. Нейросеть тщательно изучила мотивы и причины ' +
              'выбора добровольцев, после чего смогла предугадывать ' +
              'последующие действия испытуемых и уязвимости в ' +
              'поведении. Искусственный интеллект даже смог ' +
              'манипулировать людьми'
        },
        {
          id: 5,
          title: 'Музыка Вивальди спасла от стресса одиноких рыбок. "Классическим" способом теперь хотят лечить тревожность у людей',
          url: 'Muzika-Vivaldi-spasla-ribok',
          synop: '',
          day: "13 Февраля",
          text: 'Взрослых рыбок вида зебраданио ученые разбили на две ' +
              'группы и подвергли каждую особь суточной изоляции, ' +
              'которая вызвала у каждой рыбки резкое повышение ' +
              'тревожности. Рыбкам из одной группы включали музыку ' +
              'Антонио Вивальди, двухчасовые сеансы проводились дважды ' +
              'за сутки — в 8:00 и в 17:00. Музыку включали на ' +
              'телефоне, размещенном на расстоянии 1,5 м от ' +
              'аквариумов. Громкость музыки достигала 65–75 децибелов. ' +
              'Рыбки из другой группы оставались в изоляции без ' +
              'музыкального сопровождения. Эксперимент показал: ' +
              'после того, как обе группы рыбок пересадили в ' +
              'незнакомый аквариум, те особи, которые "слушали" ' +
              'Вивальди, вели себя менее тревожно в новом месте. ' +
              'Чтобы убедиться в своей правоте, ученые провели ' +
              'индивидуальное поведенческое тестирование - в течение ' +
              'шести минут фиксировали поведение рыбок на камеру.'
        },
        {
          id: 6,
          title: 'Свиньи оказались отличными геймерами',
          url: 'Svini-okazalis-otlichnimi',
          synop: '',
          day: "12 Февраля",
          text: 'Исследователи из Канады научили свиней играть в ' +
              'видеоигры, доказав, что хрюши намного умнее, чем ' +
              'думают люди. Ученые настолько впечатлены результатами ' +
              'эксперимента, что теперь считают необходимым для ' +
              'человечества пересмотреть отношение к свиньям ' +
              'исключительно как к источнику сала и бекона.\n' +
              'Как сообщает телеканал «Наука», ученые работали с ' +
              'двумя йоркширскими свиньями и двумя микросвинками. ' +
              'Их учили играть в видеоигру, где надо перемещать ' +
              'курсор по экрану, управляя джойстиком при помощи ' +
              'пятачка.\n' +
              'Каждая из четырех свиней продемонстрировала не только ' +
              'понимание концепции игры, так и связи между движением ' +
              'джойстика и курсора. По мнению исследователей, хрюши ' +
              'не смогли достичь такого же геймерского уровня, как ' +
              'приматы, потому что джойстик и экран больше подходят ' +
              'для управления руками, а не пятачком.'
        },
        {
          id: 7,
          title: 'Антидепрессанты оказались самыми эффективными в лечении остеоартрита',
          url: 'Antidepressanti-okazalis-samim-effektivnimi',
          day: "12 Февраля",
          synop: '',
          text: 'Множество человек по всему миру страдают от ' +
              'остеоартрита, болезни суставов. Ученые из Соединенных ' +
              'Штатов предложили свой вариант лечения.\n' +
              '\n' +
              'Известно, что заболевание разрушает суставной хрящ, ' +
              'чем вызывает сильную боль. На данный момент существует ' +
              'только один способ лечения, согласованный мировым ' +
              'медицинским сообществом, — операция по замене сустава.\n' +
              '\n' +
              'Избежать хирургического вмешательства предлагают ученые ' +
              'из университета Пенсильвании в Соединенных Штатах. Они ' +
              'пришли к выводу, что популярный антидепрессант может ' +
              'ингибировать клеточный путь, который ведет ' +
              'остеоартриту. Медикамент способен не допустить ' +
              'распространение фермента GRK2, который провоцирует ' +
              'проблемы со здоровьем. Доказать это удалось благодаря ' +
              'эксперименту на мышах.'
        }
      ]

    }
  }
}
</script>

<style scoped>

</style>