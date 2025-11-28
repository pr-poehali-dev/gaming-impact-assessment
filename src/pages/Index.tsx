import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Gamepad2" className="text-primary" size={32} />
            <span className="text-xl md:text-2xl font-bold">КОМПЬЮТЕРНЫЕ ИГРЫ</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('positive')} className="hover:text-primary transition-colors">О пользе</button>
            <button onClick={() => scrollToSection('negative')} className="hover:text-primary transition-colors">Негатив</button>
            <button onClick={() => scrollToSection('addiction')} className="hover:text-primary transition-colors">Зависимость</button>
            <button onClick={() => scrollToSection('health')} className="hover:text-primary transition-colors">Здоровье</button>
            <button onClick={() => scrollToSection('recommendations')} className="hover:text-primary transition-colors">Родителям</button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-fade-in"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                <Icon name="Sparkles" className="text-primary" size={20} />
                <span className="text-sm font-medium">Научный подход к пониманию игр</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                КОМПЬЮТЕРНЫЕ ИГРЫ<br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  И ИХ ВЛИЯНИЕ НА МОЛОДЁЖЬ
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Современный взгляд на влияние видеоигр на развитие детей и подростков. 
                Научные данные, исследования и рекомендации для родителей.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button onClick={() => scrollToSection('positive')} size="lg" className="gap-2 hover-scale">
                  <Icon name="TrendingUp" size={20} />
                  Узнать о пользе
                </Button>
                <Button onClick={() => scrollToSection('recommendations')} variant="outline" size="lg" className="gap-2 hover-scale">
                  <Icon name="Users" size={20} />
                  Советы родителям
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="positive" className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/30 mb-4">
                  <Icon name="Plus" className="text-accent" size={20} />
                  <span className="text-sm font-medium">Позитивное влияние</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Польза компьютерных игр</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Научные исследования показывают, что умеренная игра способствует развитию важных навыков и психических функций
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: "Brain",
                    title: "Развитие интеллекта",
                    description: "Видеоигры, требующие когнитивных усилий, улучшают перцептивные, моторные и когнитивные навыки. Развивают восприятие, внимание, память и мышление."
                  },
                  {
                    icon: "Smile",
                    title: "Позитивные эмоции",
                    description: "Умеренная игра способствует возникновению положительных эмоций, является средством расслабления и снижения стресса."
                  },
                  {
                    icon: "Zap",
                    title: "Вовлеченность",
                    description: "Вовлеченность в выполнении игровых задач связана с повышением уровня счастья, интересом и мотивацией к достижению целей."
                  },
                  {
                    icon: "Users",
                    title: "Социализация",
                    description: "Многопользовательские игры расширяют социальные контакты. Подростки создают надежные связи, обмениваются опытом и действуют сообща."
                  },
                  {
                    icon: "Target",
                    title: "Осмысленность",
                    description: "Игры дают ощущение причастности к значимым событиям. Самостоятельное прохождение социально-направленных игр повышает уровень осмысленности."
                  },
                  {
                    icon: "Trophy",
                    title: "Достижения",
                    description: "Работа над игровыми целями способствует ощущению успешности и компетентности, особенно у подростков, испытывающих трудности в учебе."
                  }
                ].map((item, index) => (
                  <Card key={index} className="hover-scale bg-gradient-to-br from-card to-card/50 border-primary/20 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Icon name={item.icon as any} className="text-primary" size={24} />
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Icon name="Lightbulb" className="text-primary flex-shrink-0" size={32} />
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Ключевой вывод исследований</h3>
                      <p className="text-lg text-muted-foreground">
                        Уровень познавательного развития детей, умеренно играющих в компьютерные игры, 
                        во многом превосходит уровень развития неиграющих и много играющих детей. 
                        Главное — сбалансированность досуга.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="negative" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/20 rounded-full border border-destructive/30 mb-4">
                  <Icon name="AlertTriangle" className="text-destructive" size={20} />
                  <span className="text-sm font-medium">Риски и опасности</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Негативное влияние игр</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Чрезмерное увлечение видеоиграми содержит ряд рисков для здоровья и развития
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: "Activity",
                    title: "Снижение физической активности",
                    description: "Долгое время за экраном ведет к уменьшению физической активности. Подростки пренебрегают спортом и активными развлечениями на свежем воздухе.",
                    color: "destructive"
                  },
                  {
                    icon: "BookOpen",
                    title: "Влияние на учебу",
                    description: "Подростки проводят много времени за компьютером, отвлекаясь от учебных дел. Снижение академических результатов и ухудшение концентрации внимания.",
                    color: "destructive"
                  },
                  {
                    icon: "UserX",
                    title: "Разрушение социальных связей",
                    description: "Чрезмерная вовлеченность может привести к нежеланию сталкиваться с реальным миром, рутиной и повседневными проблемами.",
                    color: "destructive"
                  },
                  {
                    icon: "AlertCircle",
                    title: "Психическое здоровье",
                    description: "На фоне неблагоприятных обстоятельств жизни игры могут стать способом избегания проблем, что усугубляет ситуацию.",
                    color: "destructive"
                  }
                ].map((item, index) => (
                  <Card key={index} className="hover-scale bg-gradient-to-br from-card to-destructive/5 border-destructive/30 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-8 space-y-4">
                      <div className="w-14 h-14 rounded-xl bg-destructive/20 flex items-center justify-center">
                        <Icon name={item.icon as any} className="text-destructive" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-12 bg-gradient-to-r from-destructive/10 to-destructive/5 border-destructive/30">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Icon name="Info" className="text-destructive flex-shrink-0" size={32} />
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Важно понимать</h3>
                      <p className="text-lg text-muted-foreground">
                        Негативные последствия связаны не с самими играми, а с индивидуальными психологическими 
                        особенностями игроков и неблагоприятными внешними условиями (семейные проблемы, 
                        эпизоды насилия, общая неуспешность). Сама игра является лишь материалом реализации 
                        склонности к аддикции или агрессии.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="addiction" className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full border border-secondary/30 mb-4">
                  <Icon name="Skull" className="text-secondary" size={20} />
                  <span className="text-sm font-medium">Зависимость</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Игровая зависимость</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Понимание механизмов и признаков игровой аддикции
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Card className="bg-gradient-to-br from-card to-secondary/5 border-secondary/30">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <Icon name="BookMarked" className="text-secondary" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold">Что это такое?</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Зависимость от компьютерных игр — это чрезмерное или компульсивное использование 
                      компьютера и видеоигр, которые могут мешать повседневной жизни. Исследования показывают, 
                      что игровая зависимость имеет много общих физиологических черт с зависимостями от 
                      психоактивных средств (активность рецепторов дофамина).
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-secondary/5 border-secondary/30">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <Icon name="Users" className="text-secondary" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold">Кто в зоне риска?</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Аддикции преимущественно подвержены подростки и молодые люди, испытывающие 
                      (в силу личностных особенностей и жизненных обстоятельств) несколько функциональных 
                      потребностей. Одинокие дети, не имеющие надежной привязанности в семье, 
                      потенциально рискуют стать зависимыми.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-secondary/10 to-card border-secondary/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Icon name="CheckCircle2" className="text-secondary" size={28} />
                    Классические признаки зависимости
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Становятся поглощенными играми",
                      "Лгут о своем использовании игр",
                      "Теряют интерес к другим видам деятельности",
                      "Уходят от семьи и друзей ради игры",
                      "Используют игры как средство психологического бегства",
                      "Не могут контролировать время игры"
                    ].map((sign, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-secondary/20">
                        <Icon name="AlertCircle" className="text-secondary flex-shrink-0 mt-1" size={20} />
                        <span className="text-muted-foreground">{sign}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-8 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/30">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Icon name="Heart" className="text-accent flex-shrink-0" size={32} />
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Меры помощи</h3>
                      <p className="text-lg text-muted-foreground">
                        Исследования выявляют эффективные меры помощи: образование о рисках, 
                        переключение внимания на другие виды деятельности, работа с психологом. 
                        Эти подходы сокращают время игры и облегчают зависимость от видеоигр.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="health" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-4">
                  <Icon name="HeartPulse" className="text-primary" size={20} />
                  <span className="text-sm font-medium">Физическое здоровье</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Влияние на здоровье</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Как длительные игры влияют на физическое состояние детей и подростков
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: "Bone",
                    title: "Искривление позвоночника",
                    description: "Долгое сидение перед компьютером в одной позе способствует искривлению еще неокрепшего позвоночника детей. Неизбежна гиподинамия — ослабление мышечной деятельности, вызванное сидячим образом жизни.",
                    color: "primary"
                  },
                  {
                    icon: "Hand",
                    title: "Проблемы с кистью руки",
                    description: "При частом использовании мышки происходит однообразная нагрузка на кисть руки, что способствует сдавливанию нервов и может привести к синдрому запястного канала.",
                    color: "primary"
                  },
                  {
                    icon: "Eye",
                    title: "Нагрузка на зрение",
                    description: "Пагубное влияние на зрение — дети, следя за ходом игр, не отрывают взгляд от монитора. Длительное напряжение глаз приводит к ухудшению зрения.",
                    color: "primary"
                  },
                  {
                    icon: "Ear",
                    title: "Влияние на слух",
                    description: "Частое использование наушников не только негативно влияет на слуховые органы, но и является причиной перегруженности нервной системы.",
                    color: "primary"
                  },
                  {
                    icon: "Zap",
                    title: "Перегрузка нервной системы",
                    description: "Частые и длительные игры на компьютере перегружают нервную систему ребенка, что способствует появлению головных болей, раздражительности и нарушений сна.",
                    color: "primary"
                  }
                ].map((item, index) => (
                  <Card key={index} className="hover-scale bg-gradient-to-r from-card to-primary/5 border-primary/30 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Icon name={item.icon as any} className="text-primary" size={32} />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold">{item.title}</h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-12 bg-gradient-to-r from-destructive/10 to-destructive/5 border-destructive/30">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Icon name="ShieldAlert" className="text-destructive flex-shrink-0" size={32} />
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Итоговый вывод</h3>
                      <p className="text-lg text-muted-foreground">
                        Компьютерные игры при чрезмерном использовании пагубно влияют на физическое здоровье детей. 
                        Важно соблюдать баланс между игровой деятельностью и другими формами активности, 
                        включая физические упражнения и отдых на свежем воздухе.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="recommendations" className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/30 mb-4">
                  <Icon name="UserCheck" className="text-accent" size={20} />
                  <span className="text-sm font-medium">Рекомендации</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Практические советы</h2>
                <p className="text-lg text-muted-foreground">
                  Как сохранить здоровье при работе с компьютером
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                <Card className="bg-gradient-to-br from-card to-primary/5 border-primary/30 overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/projects/27e16dbc-bf04-436d-93cd-9d8dfb3d2361/files/086f3442-cc78-436c-900b-9d5fa613019d.jpg"
                      alt="Правильная работа за компьютером"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Icon name="User" className="text-accent" size={24} />
                      </div>
                      <h3 className="text-3xl font-bold">Для подростков</h3>
                    </div>
                    <ul className="space-y-4 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span><strong>Ограничить время работы.</strong> Максимальная продолжительность непрерывной работы за цифровым устройством без перерыва не должна превышать двух часов.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Coffee" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span><strong>Делать перерывы для физкультминутки.</strong> Время перерыва составляет не менее 15–20 минут, в течение которых рекомендуется делать специальную зрительную гимнастику.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Eye" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span><strong>Периодически фокусировать взгляд на отдалённых объектах.</strong> Каждые 20 минут делать перерыв на 20 секунд и переводить взгляд на объекты, находящиеся вдали (около 4–6 метров).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Focus" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span><strong>Выполнять упражнения для глаз.</strong> Вытянуть руку вперёд, посмотреть сначала на свои пальцы, потом на предмет вдали, а затем на горизонт. Повторить не менее десяти раз.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Calendar" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span><strong>Планировать работу так, чтобы глаза успевали отдыхать.</strong> Переносить некоторые дела с экрана на бумагу.</span>
                      </li>
                    </ul>
                    <Card className="mt-6 bg-accent/10 border-accent/30">
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground flex items-start gap-2">
                          <Icon name="TreePine" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                          <span>Важно чаще бывать на улице и заниматься спортом. Это добавит физической активности и поможет предупредить развитие психологических расстройств.</span>
                        </p>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-secondary/5 border-secondary/30 overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/projects/27e16dbc-bf04-436d-93cd-9d8dfb3d2361/files/8fe86314-50cf-40c6-b2bf-7224ec34b053.jpg"
                      alt="Упражнения и зарядка"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <Icon name="Users" className="text-secondary" size={24} />
                      </div>
                      <h3 className="text-3xl font-bold">Для родителей</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">Чтобы компьютерные игры не навредили здоровью ребёнка, рекомендуется соблюдать следующие правила:</p>
                    <ul className="space-y-4 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <Icon name="Timer" className="text-secondary flex-shrink-0 mt-1" size={20} />
                        <span><strong>Делать перерыв</strong> через каждые 20–30 минут работы на компьютере.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Clock" className="text-secondary flex-shrink-0 mt-1" size={20} />
                        <span><strong>Ограничить время работы:</strong> 8–10 лет — 45 мин, 11–13 лет — 1 час 30 мин, 14–16 лет — 2 часа 15 мин.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Moon" className="text-secondary flex-shrink-0 mt-1" size={20} />
                        <span><strong>Не играть перед сном.</strong> Лучше играть в компьютерные игры в первой половине дня.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Star" className="text-secondary flex-shrink-0 mt-1" size={20} />
                        <span><strong>Выбирать игры</strong> по возрасту ребёнка и с смысловыми задачами.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="ArrowUp" className="text-secondary flex-shrink-0 mt-1" size={20} />
                        <span><strong>Следить за правильной осанкой</strong> в процессе игры на компьютере.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Maximize2" className="text-secondary flex-shrink-0 mt-1" size={20} />
                        <span><strong>Контролировать расстояние</strong> от глаз до монитора — не более 60 см.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Eye" className="text-secondary flex-shrink-0 mt-1" size={20} />
                        <span><strong>После игры делать гимнастику для глаз.</strong></span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Icon name="Dumbbell" className="text-primary" size={32} />
                    <h3 className="text-3xl font-bold">Упражнения для разминки</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8">Эти упражнения помогут сохранить здоровье тела. Оптимальная продолжительность утренней зарядки — от 10 до 20 минут.</p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        icon: "MoveVertical",
                        title: "Наклоны головы",
                        description: "Встаньте прямо, ноги на ширину плеч. Плавно наклоняйте голову вперёд, назад, вправо и влево или делайте медленные круговые движения. Повторите 8–10 раз."
                      },
                      {
                        icon: "RotateCw",
                        title: "Круговые движения плечами",
                        description: "Встаньте прямо, свободно опустите руки вдоль тела и делайте вращательные движения плечами. Сначала «к себе», затем «от себя». Повторите 10 раз в каждую сторону."
                      },
                      {
                        icon: "ArrowDown",
                        title: "Наклоны туловища вперёд",
                        description: "Встаньте прямо, ноги на ширине плеч. Плавно наклонитесь вперёд, стараясь коснуться руками пола. Тянитесь грудью к бёдрам. Сделайте 10–12 наклонов."
                      },
                      {
                        icon: "Repeat",
                        title: "Повороты туловища",
                        description: "Встаньте прямо, ноги на ширине плеч, руки на поясе. Плавно поворачивайте корпус вправо и влево, нижняя часть тела неподвижна. По 10 поворотов в каждую сторону."
                      },
                      {
                        icon: "Cat",
                        title: "«Кошка–корова»",
                        description: "Встаньте на четвереньки. На вдохе прогнитесь в грудном отделе и вытяните шею вверх. На выдохе округлите спину, наклоните голову вниз. Повторите 10–12 раз."
                      },
                      {
                        icon: "Shield",
                        title: "Планка",
                        description: "Классическое силовое упражнение улучшает координацию и мышечный корсет. Удерживайтесь в положении планки 30 секунд, постепенно увеличивая время до минуты и более."
                      }
                    ].map((exercise, index) => (
                      <Card key={index} className="bg-card/50 border-primary/20 hover-scale">
                        <CardContent className="p-6 space-y-3">
                          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                            <Icon name={exercise.icon as any} className="text-primary" size={24} />
                          </div>
                          <h4 className="text-xl font-bold">{exercise.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{exercise.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="text-center mb-16 mt-20">
                <h3 className="text-3xl font-bold mb-4">Вопросы и ответы для родителей</h3>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    value: "time",
                    question: "Как контролировать время игры?",
                    answer: "Установите четкие временные рамки для игр. Для детей до 12 лет рекомендуется не более 1 часа в день, для подростков — до 2 часов. Используйте таймеры и родительский контроль. Важно договориться о правилах заранее и последовательно их соблюдать."
                  },
                  {
                    value: "balance",
                    question: "Как обеспечить сбалансированный досуг?",
                    answer: "Поощряйте разнообразие активностей: спорт, прогулки, чтение, творчество, общение с друзьями. Игры должны быть частью досуга, а не его заменой. Участвуйте вместе с ребенком в других формах развлечений, показывайте альтернативы."
                  },
                  {
                    value: "choice",
                    question: "Как выбирать подходящие игры?",
                    answer: "Обращайте внимание на возрастные рейтинги (PEGI, ESRB). Изучайте контент игры перед покупкой. Отдавайте предпочтение развивающим и образовательным играм. Избегайте игр с чрезмерным насилием, неподходящим для возраста ребенка."
                  },
                  {
                    value: "signs",
                    question: "Как распознать признаки зависимости?",
                    answer: "Следите за изменениями в поведении: снижение успеваемости, потеря интереса к другим занятиям, раздражительность при ограничении игр, ложь о времени игры, проблемы со сном, изоляция от друзей и семьи. При обнаружении этих признаков обратитесь к психологу."
                  },
                  {
                    value: "health",
                    question: "Как защитить здоровье ребенка?",
                    answer: "Обеспечьте правильную организацию рабочего места: удобное кресло, правильное расстояние до монитора (50-70 см), хорошее освещение. Делайте перерывы каждые 30-40 минут для разминки и гимнастики для глаз. Ограничьте использование наушников."
                  },
                  {
                    value: "communication",
                    question: "Как разговаривать с ребенком об играх?",
                    answer: "Проявляйте интерес к играм ребенка, спрашивайте о его достижениях. Обсуждайте содержание игр, их влияние. Объясняйте разницу между виртуальным и реальным миром. Не запрещайте категорично — это вызовет протест. Договаривайтесь и устанавливайте правила вместе."
                  },
                  {
                    value: "together",
                    question: "Стоит ли играть вместе с ребенком?",
                    answer: "Да! Совместная игра помогает лучше понять интересы ребенка, контролировать контент и проводить качественное время вместе. Это также возможность обсудить игровые ситуации, моральные дилеммы и развить критическое мышление."
                  },
                  {
                    value: "help",
                    question: "Когда обращаться за помощью?",
                    answer: "Обратитесь к специалисту, если ребенок демонстрирует явные признаки зависимости, агрессивное поведение, депрессию, проблемы в школе или семье. Детский психолог поможет выявить причины чрезмерного увлечения играми и разработать план коррекции поведения."
                  }
                ].map((item) => (
                  <AccordionItem key={item.value} value={item.value} className="bg-card border-primary/30 rounded-lg px-6">
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Card className="mt-12 bg-gradient-to-r from-accent/20 to-primary/20 border-accent/30">
                <CardContent className="p-8 text-center">
                  <Icon name="HeartHandshake" className="text-accent mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-3">Главное — баланс и внимание</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Компьютерные игры могут быть полезным инструментом развития при правильном подходе. 
                    Ваше участие, понимание и установление здоровых границ помогут ребенку получить 
                    максимум пользы и избежать негативных последствий.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold">
                <Icon name="Gamepad2" className="text-primary" size={32} />
                <span>КОМПЬЮТЕРНЫЕ ИГРЫ</span>
              </div>
              <p className="text-muted-foreground">
                Образовательный портал о влиянии компьютерных игр на детей и подростков
              </p>
              <p className="text-sm text-muted-foreground">
                Информация основана на научных исследованиях. При возникновении проблем обратитесь к специалисту.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;