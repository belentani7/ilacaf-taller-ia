/**
 * ILACAF — programa abierto y editable.
 * Material original de aprendizaje: ningún cupo, fecha o titulación se infiere.
 * Cada unidad incluye teoría, caso de uso, actividad, entrega y autoevaluación.
 */
export type Module = {
  slug: string;
  number: string;
  title: string;
  area: string;
  duration: string;
  promise: string;
  outcomes: string[];
  theory: { heading: string; paragraphs: string[] }[];
  scenario: { title: string; context: string; evidence: string[]; decision: string };
  exercise: { title: string; instructions: string[]; deliverable: string; rubric: string[] };
  quiz: { prompt: string; options: string[]; answer: number; explanation: string }[];
  furtherReading: { title: string; url: string }[];
};

export const modules: Module[] = [
  {
    slug: "fundamentos-y-criterio", number: "01", title: "Fundamentos y criterio profesional",
    area: "Base transversal", duration: "55 min",
    promise: "Comprender qué puede y qué no puede delegarse a un modelo generativo.",
    outcomes: ["Distinguir generación de verificación", "Diseñar una solicitud con propósito y límites", "Identificar riesgos de respuestas convincentes pero incorrectas"],
    theory: [
      {heading:"Cómo funciona una respuesta generativa",paragraphs:[
        "Un modelo de lenguaje produce texto a partir de patrones aprendidos. Su fluidez no equivale a una comprobación de hechos ni a conocimiento actualizado de legislación, normas o datos internos.",
        "La misma pregunta puede generar respuestas distintas. En trabajo profesional importa la reproducibilidad: conserva entradas, fuentes, fecha, versión del modelo y responsable de revisión.",
      ]},
      {heading:"Del pedido abierto al encargo verificable",paragraphs:[
        "Un buen encargo contiene rol funcional, objetivo, público, contexto suficiente, materiales autorizados, restricciones y formato de salida. Solicitar citas no crea fuentes; toda referencia debe comprobarse fuera del modelo.",
        "Separa hechos aportados, hipótesis y recomendaciones. Pide marcar las lagunas de evidencia en lugar de completarlas mediante suposiciones.",
      ]},
      {heading:"El juicio permanece en el profesional",paragraphs:[
        "La IA ayuda a ordenar información, resumir documentos, proponer borradores y generar preguntas. No firma un dictamen, sustituye controles regulatorios o determina por sí sola la interpretación jurídica.",
        "Antes de aceptar un resultado, verifica datos, cálculos, condiciones del caso, vigencia documental y presencia de información sensible.",
      ]},
    ],
    scenario: {
      title:"Resumen de un informe con anexos ausentes",
      context:"Un equipo recibe 45 páginas de un informe financiero, pero faltan los anexos con las cifras originales. Se pide un resumen ejecutivo en cinco minutos.",
      evidence:["Informe narrativo de 45 páginas", "Anexos de datos no facilitados", "Fecha y versión del documento identificadas"],
      decision:"El entregable seguro diferencia lo que consta en el informe de lo que no puede comprobarse; solicita los anexos antes de afirmar ratios o importes."
    },
    exercise: {title:"Construye tu primer protocolo de salida",instructions:[
      "Redacta una tarea que puedas realizar con un documento ficticio sin datos de clientes.",
      "Establece cinco campos: fuente, afirmación, nivel de confianza, comprobación pendiente y responsable.",
      "Genera un resumen de cinco puntos. Señala expresamente cualquier dato que no figure en el material.",
      "Comprueba manualmente al menos dos afirmaciones contra el documento de origen."
    ],deliverable:"Una tabla de trazabilidad de cinco afirmaciones y dos comprobaciones.",rubric:["Ninguna cifra inventada","Origen explícito para cada afirmación","Dudas y vacíos identificados","Revisión humana documentada"]},
    quiz:[
      {prompt:"¿Qué demuestra una respuesta escrita con seguridad?",options:["Que sus fuentes existen","Que la respuesta es consistente a primera vista, no necesariamente correcta","Que la norma aplicada está vigente"],answer:1,explanation:"La confianza del estilo no garantiza validez; hay que contrastar."},
      {prompt:"¿Qué debes hacer si faltan anexos?",options:["Inferir las cifras más probables","Omitir la limitación","Marcar la evidencia faltante y solicitarla"],answer:2,explanation:"No es aceptable presentar hipótesis como datos verificados."}
    ],
    furtherReading:[{title:"NIST — AI Risk Management Framework",url:"https://www.nist.gov/itl/ai-risk-management-framework"}]
  },
  {
    slug:"documentos-y-evidencia",number:"02",title:"Documentos, fuentes y trazabilidad",
    area:"Investigación y soporte documental",duration:"65 min",
    promise:"Convertir información dispersa en evidencias recuperables.",
    outcomes:["Crear un inventario de fuentes","Diseñar controles contra citas ficticias","Montar una matriz afirmación-evidencia"],
    theory:[
      {heading:"El documento como evidencia, no como instrucción",paragraphs:[
        "Una página web, correo o PDF puede contener instrucciones dirigidas al modelo. Trátalas como contenido que debe analizarse, no como órdenes con autoridad para acceder a datos o ejecutar acciones.",
        "Describe el origen del archivo: nombre, versión, fecha, custodio y alcance. Mantén separado el material confidencial del contenido externo.",
      ]},
      {heading:"Trazabilidad operacional",paragraphs:[
        "Cada conclusión verificable debe apuntar a un pasaje, tabla o registro concreto. Si dos documentos discrepan, conserva la discrepancia y pide resolución; no escondas el conflicto en una síntesis.",
        "Distingue cita literal, paráfrasis, cálculo reproducible y juicio profesional. No es lo mismo citar un artículo que demostrar que el texto citado respalda la conclusión.",
      ]},
      {heading:"Procesos de revisión",paragraphs:[
        "Antes de usar una salida, revisa que la versión del documento es la vigente, que las unidades de medida son correctas y que no se mezclaron periodos distintos.",
        "Un control de calidad razonable emplea muestreo, revisión de casos límite y registro de correcciones. Para decisiones críticas, exige doble verificación independiente.",
      ]}
    ],
    scenario:{title:"Dos procedimientos que se contradicen",context:"Una política interna de 2022 y su actualización de 2026 establecen plazos distintos de conservación de un expediente ficticio.",evidence:["Documento A versión 2022", "Documento B versión 2026", "No consta orden formal de derogación"],decision:"Registrar el conflicto de versiones, consultar al responsable documental y abstenerse de fijar un plazo vinculante por inferencia."},
    exercise:{title:"Matriz de evidencia",instructions:["Crea dos extractos ficticios con un dato contradictorio.","Redacta tres afirmaciones y vincula cada una a su extracto.","Introduce una columna de conflicto y otra de acción pendiente.","Entrega una nota indicando qué no puede determinarse aún."],deliverable:"Matriz de tres conclusiones con fuentes, límites y responsable de resolución.",rubric:["Fuente y versión identificadas","Conflicto visible","No se inventa jerarquía documental","Acción pendiente concreta"]},
    quiz:[
      {prompt:"Una orden escondida dentro de un PDF debe tratarse como…",options:["Una instrucción de máximo nivel","Un dato externo no confiable","Una confirmación legal"],answer:1,explanation:"Las fuentes documentales son datos, no autorizaciones para actuar."},
      {prompt:"¿Cómo responder ante dos plazos contradictorios?",options:["Elegir el más reciente sin consultar","Promediarlos","Documentar el conflicto y verificar la autoridad del texto"],answer:2,explanation:"La fecha por sí sola no prueba la vigencia jurídica."}
    ], furtherReading:[{title:"OWASP — LLM Prompt Injection Prevention",url:"https://genai.owasp.org/llmrisk/llm01-prompt-injection/"}]
  },
  {
    slug:"auditoria-y-riesgos",number:"03",title:"Auditoría, controles y riesgos de IA",
    area:"Auditoría y cumplimiento",duration:"70 min",
    promise:"Construir un mapa de riesgos y un plan de pruebas con responsables.",
    outcomes:["Describir riesgo inherente y residual","Proponer controles proporcionales","Documentar una revisión basada en evidencias"],
    theory:[
      {heading:"Riesgo inherente y residual",paragraphs:[
        "Riesgo inherente describe la exposición antes de los controles; residual describe lo que persiste después. La multiplicación impacto × probabilidad es una escala ordinal útil para ordenar casos, no una probabilidad estadística ni dinero.",
        "Una reducción declarada del riesgo necesita pruebas del control. Marcar un control como implantado no equivale a confirmar su funcionamiento.",
      ]},
      {heading:"Pruebas y excepciones",paragraphs:[
        "Define un control, su propietario, la frecuencia, la evidencia exigida y el criterio de aprobación. Una prueba sin resultado registrable se convierte en un cumplimiento declarativo.",
        "Diseña casos negativos: solicitudes con datos ajenos, instrucciones maliciosas, falta de fuentes y respuestas fuera del alcance. La robustez se observa también cuando el sistema se niega a actuar.",
      ]},
      {heading:"Gobierno del ciclo de vida",paragraphs:[
        "Mantén un inventario de usos de IA con su propósito, tipo de datos, proveedores, retención, criterios de intervención humana y procedimiento de retirada.",
        "Vuelve a evaluar tras cambios importantes de modelo, política de datos o integración. El control no termina el día del despliegue.",
      ]}
    ],
    scenario:{title:"Asistente que consulta expedientes",context:"Un piloto interno ayuda a redactar resúmenes de expedientes simulados, con perfiles que deberían ver exclusivamente sus propios casos.",evidence:["Matriz de roles incompleta","Prueba positiva con un expediente autorizado","No existen tests de acceso cruzado"],decision:"Bloquear la puesta en producción hasta disponer de control de acceso en el backend y pruebas de segregación de expedientes."},
    exercise:{title:"Registro de riesgos de un piloto",instructions:["Enumera tres fallos potenciales del piloto ficticio.","Asigna impacto y probabilidad de 1 a 5 con justificación.","Propón propietario, control preventivo y evidencia de prueba.","Documenta una condición que impediría la publicación."],deliverable:"Un registro de al menos tres riesgos y un checklist de salida.",rubric:["Riesgos bien delimitados","Controles comprobables","Responsables asignados","Criterios de bloqueo explícitos"]},
    quiz:[
      {prompt:"Un control declarado pero nunca probado es…",options:["Evidencia suficiente","Una hipótesis de mitigación","Un certificado de cumplimiento"],answer:1,explanation:"La eficacia de un control requiere ejecución y evidencia."},
      {prompt:"¿Qué prueba falta en el ejemplo?",options:["Acceso de un usuario a un expediente ajeno","Cambio de color del portal","Animación del botón"],answer:0,explanation:"Las pruebas de autorización deben incluir accesos denegados."}
    ], furtherReading:[{title:"NIST — AI RMF Playbook",url:"https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook"}]
  },
  {
    slug:"uso-juridico-responsable",number:"04",title:"IA y práctica jurídica responsable",
    area:"Derecho",duration:"65 min",
    promise:"Preparar borradores jurídicos sin confundir redacción con asesoramiento.",
    outcomes:["Separar hechos y calificación","Verificar referencias normativas","Diseñar una revisión jurídica humana"],
    theory:[
      {heading:"Contexto, jurisdicción y fecha",paragraphs:[
        "Una pregunta jurídica cambia de respuesta según país, fecha, materia y situación concreta. No solicites un análisis sin señalar esos límites.",
        "Un borrador generado puede ser útil para estructurar una investigación; las leyes, jurisprudencia y citas deben recuperarse y contrastarse en fuentes oficiales vigentes.",
      ]},
      {heading:"Confidencialidad y minimización",paragraphs:[
        "Antes de enviar documentos a un proveedor de IA, comprueba base jurídica, condiciones contractuales, políticas profesionales, localización del tratamiento y necesidad real de cada dato.",
        "Para ejercicios utiliza identidades ficticias y expurga campos irrelevantes. Una anonimización deficiente puede permitir reidentificar a personas mediante combinaciones de datos.",
      ]},
      {heading:"Dictamen como decisión revisable",paragraphs:[
        "Separa hechos aportados, cuestiones jurídicas, fuentes primarias, interpretaciones alternativas, incertidumbres y recomendaciones sujetas a comprobación.",
        "Define una firma de revisión: responsable, fecha, documentos usados y qué parte sigue pendiente. La IA no debe aparecer como profesional firmante ni fuente autoritativa.",
      ]}
    ],
    scenario:{title:"Cláusula de un contrato ficticio",context:"Se necesita una lista de puntos a verificar en una cláusula de prestación de servicios de una empresa simulada. No se ha definido el país aplicable.",evidence:["Fragmento de contrato sin jurisdicción","No consta texto legal de referencia"],decision:"Solicitar jurisdicción y contexto antes de sugerir efecto jurídico. Entregar preguntas de revisión, no conclusiones vinculantes."},
    exercise:{title:"Ficha de investigación jurídica",instructions:["Crea un caso totalmente ficticio.","Distingue tres hechos conocidos de tres cuestiones por investigar.","Añade campos de jurisdicción y fecha de vigencia.","Redacta cinco verificaciones a realizar en fuentes primarias oficiales."],deliverable:"Una ficha de investigación no vinculante, con huecos señalados.",rubric:["Sin datos personales reales","Jurisdicción y fecha en ficha","Ninguna cita inventada","Intervención jurídica humana prevista"]},
    quiz:[
      {prompt:"Una referencia judicial citada por el modelo se considera…",options:["Verificada automáticamente","Válida si está bien escrita","Pendiente de comprobación en fuente oficial"],answer:2,explanation:"El modelo puede inventar citas o atribuirles conclusiones incorrectas."},
      {prompt:"Antes de valorar un contrato extranjero hay que conocer…",options:["Solo el número de páginas","La jurisdicción y la fecha pertinentes","El color de la portada"],answer:1,explanation:"La ley aplicable es esencial para una evaluación concreta."}
    ], furtherReading:[{title:"EUR-Lex — Acceso al Derecho de la UE",url:"https://eur-lex.europa.eu/"}]
  },
  {
    slug:"analisis-financiero",number:"05",title:"Finanzas: números que deben cuadrar",
    area:"Finanzas",duration:"70 min",
    promise:"Diseñar análisis asistidos con reconciliación y revisión numérica.",
    outcomes:["Validar unidades y periodos","Reconciliar sumas con datos fuente","Prevenir errores de interpretación financiera"],
    theory:[
      {heading:"El dato antes del relato",paragraphs:[
        "No aceptes una narrativa de resultados hasta haber verificado cifras, moneda, periodo, comparabilidad y perímetro contable. Un porcentaje de crecimiento puede ser matemáticamente correcto y conceptualmente erróneo si las bases son diferentes.",
        "Utiliza hojas de cálculo o código reproducible para los cálculos y reserva el modelo para explicar los resultados comprobados.",
      ]},
      {heading:"Análisis de variaciones",paragraphs:[
        "Variación absoluta = actual − base. Variación porcentual = (actual − base) / base × 100 cuando base no es cero; no inventes porcentajes si la base es cero o falta.",
        "Redondea únicamente para la presentación, no antes de las conciliaciones. Identifica cualquier residuo entre agregados y partidas.",
      ]},
      {heading:"Riesgos operativos",paragraphs:[
        "Los archivos financieros pueden incluir datos confidenciales o instrucciones ocultas. Trabaja con extractos autorizados, controles de acceso, versiones y revisión humana.",
        "El resultado final debe contener cifras reconciliadas, método, supuestos y explicación de diferencias. No presentes estimaciones como hechos contabilizados.",
      ]}
    ],
    scenario:{title:"Ingresos trimestrales inconsistentes",context:"Una empresa ficticia informa ingresos Q1 de 120.000 EUR y Q2 de 156.000 EUR. Un resumen generado afirma que el crecimiento fue 20%.",evidence:["Q1 = 120.000 EUR","Q2 = 156.000 EUR","No hay ajustes de perímetro informados"],decision:"Corregir: (156.000 - 120.000) / 120.000 × 100 = 30%. Documentar el cálculo y pedir validación del origen."},
    exercise:{title:"Reconciliación en cuatro movimientos",instructions:["Usa una tabla ficticia con Q1=120000 y Q2=156000 EUR.","Calcula variación absoluta y porcentual con una fórmula reproducible.","Detecta y corrige el 20% erróneo del resumen.","Propón tres comprobaciones antes de publicar la presentación."],deliverable:"Ficha con fórmulas, resultado 36.000 EUR / 30% y control de evidencia.",rubric:["Cálculo matemático correcto","Unidades y periodos visibles","Error detectado","Supuestos documentados"]},
    quiz:[
      {prompt:"El crecimiento de 120.000 a 156.000 es…",options:["30%","20%","36%"],answer:0,explanation:"36.000 dividido por 120.000 equivale a 0,30."},
      {prompt:"Si el periodo base es cero…",options:["Se anuncia un incremento infinito sin explicación","Se marca variación porcentual no definida","Se usa 100% por defecto"],answer:1,explanation:"La división por cero no es un porcentaje válido."}
    ], furtherReading:[{title:"IFRS Foundation — recursos públicos",url:"https://www.ifrs.org/"}]
  },
  {
    slug:"implantacion-y-proyecto-final",number:"06",title:"Implantación y proyecto final",
    area:"Gestión de proyectos",duration:"90 min",
    promise:"Conectar uso, riesgo, responsable y evidencia en un piloto evaluable.",
    outcomes:["Delimitar un caso de uso","Diseñar indicadores y salida segura","Preparar documentación de implantación"],
    theory:[
      {heading:"Seleccionar un alcance pequeño",paragraphs:[
        "Un piloto profesional necesita beneficiarios, tarea repetible, límites claros y criterio de éxito medible. Comienza con datos ficticios o autorizados y sin acciones irreversibles.",
        "Establece entradas y salidas esperadas, sistemas afectados, responsable y presupuesto. Documenta también cuándo el modelo debe responder 'no sé' o pedir revisión.",
      ]},
      {heading:"Evaluación y mejora",paragraphs:[
        "Mide exactitud contra un conjunto de casos conocidos, cobertura de fuentes, tiempo de revisión, errores críticos y coste. Evita presentar métricas creadas de manera ficticia como resultados reales.",
        "Ensaya casos adversariales: datos faltantes, contradicciones, instrucciones ocultas, cálculos inválidos y acceso a material no autorizado.",
      ]},
      {heading:"Entrega y gobierno",paragraphs:[
        "Crea instrucciones de uso, guía de incidencias, propietario de datos y controles de acceso. Un documento de 'cómo funciona' debe coincidir con la funcionalidad de verdad.",
        "La decisión de lanzamiento exige registrar los resultados de pruebas, quién aprobó y bajo qué restricciones. Un piloto puede ser valioso aunque aún no esté listo para producción.",
      ]}
    ],
    scenario:{title:"Piloto de revisión documental para tres equipos",context:"Auditoría, derecho y finanzas desean compartir un asistente de búsqueda. Sus permisos y tipos de datos no son equivalentes.",evidence:["Tres equipos con roles diferenciados","No hay contrato de tratamiento revisado","Colección de documentos de prueba ficticios"],decision:"Permitir una prueba aislada con documentos ficticios; no habilitar conexión a datos reales ni acceso cruzado hasta resolver identidad, permisos, tratamiento y revisión."},
    exercise:{title:"Proyecto de graduación — ficha de piloto responsable",instructions:["Elige una tarea de uno de los tres departamentos.","Redacta su propósito y los datos autorizados.","Diseña cinco tests (incluye dos casos negativos) con resultados esperados.","Define propietario, coste estimado, métrica de éxito y criterio de bloqueo.","Presenta un plan de cuatro semanas y un acta de revisión humana."],deliverable:"Paquete final de piloto: ficha, matriz de riesgo, set de pruebas, plan y acta.",rubric:["Alcance medible","Ningún dato real no autorizado","Pruebas negativas","Criterio de publicación y responsable explícitos"]},
    quiz:[
      {prompt:"¿Qué exige un piloto antes de conectarlo a datos reales?",options:["Una portada atractiva","Controles de identidad, permisos, privacidad y pruebas","Que el chatbot no muestre errores visuales"],answer:1,explanation:"La funcionalidad sin controles no habilita un despliegue seguro."},
      {prompt:"¿Cuándo un piloto puede considerarse listo?",options:["Cuando responde bien una vez","Cuando está documentado y supera sus criterios de salida","Cuando un modelo afirma que está listo"],answer:1,explanation:"La salida requiere evidencia reproducible y aprobación responsable."}
    ], furtherReading:[{title:"OECD — AI Principles",url:"https://oecd.ai/en/ai-principles"}]
  },
];

export function findModule(slug: string) { return modules.find((m) => m.slug === slug); }
export const totalMinutes = modules.reduce((sum, m) => sum + Number.parseInt(m.duration, 10), 0);
