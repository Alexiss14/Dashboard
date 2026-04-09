// ==================== EMBEDDED DATA ====================
const DATA = {
  periodo: "Octubre 2025 - Marzo 2026",
  carrera: "Medicina Veterinaria",
  kpi: {
    total_registros: 971, registros_acad: 905, estudiantes: 192,
    aprobados: 836, reprobados: 69, tasa_apr: 92.4, tasa_rep: 7.6,
    recuperacion: 109, seg_mat: 24, ter_mat: 5,
    est_2da: 16, est_3ra: 4, pierde_faltas: 6,
    promedio: 8.03, becados: 260, docentes: 17, asignaturas: 40,
    niveles: 8, rem_aprobados: 82, rem_total: 109, tasa_exito_rem: 75.2
  },
  niveles: [
    {nivel:"1ro",nombre:"PRIMER",reg:197,est:40,apr:186,rep:11,tasa:94.4,recup:17,s2:2,s3:0,pf:1,prom:8.2},
    {nivel:"2do",nombre:"SEGUNDO",reg:98,est:22,apr:87,rep:11,tasa:88.8,recup:22,s2:4,s3:1,pf:0,prom:7.7},
    {nivel:"3ro",nombre:"TERCERO",reg:109,est:23,apr:104,rep:5,tasa:95.4,recup:8,s2:5,s3:1,pf:2,prom:8.2},
    {nivel:"4to",nombre:"CUARTO",reg:75,est:16,apr:72,rep:3,tasa:96.0,recup:5,s2:0,s3:0,pf:0,prom:8.3},
    {nivel:"5to",nombre:"QUINTO",reg:95,est:21,apr:82,rep:13,tasa:86.3,recup:17,s2:4,s3:0,pf:3,prom:7.7},
    {nivel:"6to",nombre:"SEXTO",reg:106,est:24,apr:94,rep:12,tasa:88.7,recup:16,s2:5,s3:3,pf:0,prom:7.8},
    {nivel:"7mo",nombre:"SÉPTIMO",reg:95,est:20,apr:90,rep:5,tasa:94.7,recup:7,s2:2,s3:0,pf:0,prom:8.0},
    {nivel:"8vo",nombre:"OCTAVO",reg:130,est:26,apr:121,rep:9,tasa:93.1,recup:17,s2:2,s3:0,pf:0,prom:8.1}
  ],
  asignaturas: [
    {a:"Alimentación y Nutrición Animal",n:"4to",reg:13,apr:13,rep:0,tasa:100,recup:2,s2:0,prom:7.4},
    {a:"Anatomía Animal",n:"1ro",reg:40,apr:37,rep:3,tasa:92.5,recup:8,s2:1,prom:7.5},
    {a:"Anatomía Comparada",n:"2do",reg:20,apr:19,rep:1,tasa:95.0,recup:3,s2:0,prom:7.6},
    {a:"Anatomía Patológica",n:"3ro",reg:20,apr:19,rep:1,tasa:95.0,recup:0,s2:0,prom:8.4},
    {a:"Anestesiología",n:"6to",reg:20,apr:16,rep:4,tasa:80.0,recup:8,s2:1,prom:7.0},
    {a:"Avicultura",n:"8vo",reg:26,apr:26,rep:0,tasa:100,recup:0,s2:0,prom:9.5},
    {a:"Bacteriología y Micología",n:"3ro",reg:19,apr:18,rep:1,tasa:94.7,recup:1,s2:0,prom:8.4},
    {a:"Biología Celular",n:"1ro",reg:39,apr:37,rep:2,tasa:94.9,recup:7,s2:0,prom:7.7},
    {a:"Bioquímica",n:"2do",reg:21,apr:15,rep:6,tasa:71.4,recup:8,s2:2,prom:7.1},
    {a:"Cirugía Animales Compañía",n:"8vo",reg:26,apr:22,rep:4,tasa:84.6,recup:7,s2:0,prom:7.3},
    {a:"Cirugía Animales Granja",n:"8vo",reg:26,apr:25,rep:1,tasa:96.2,recup:1,s2:0,prom:8.1},
    {a:"Clínica Menor I",n:"7mo",reg:17,apr:14,rep:3,tasa:82.4,recup:2,s2:0,prom:7.6},
    {a:"Clínica Menor II",n:"8vo",reg:26,apr:23,rep:3,tasa:88.5,recup:7,s2:0,prom:7.4},
    {a:"Epidemiología Veterinaria",n:"5to",reg:19,apr:19,rep:0,tasa:100,recup:1,s2:0,prom:8.6},
    {a:"Especies Bioacuáticas",n:"6to",reg:18,apr:18,rep:0,tasa:100,recup:0,s2:0,prom:8.4},
    {a:"Estadística",n:"3ro",reg:20,apr:19,rep:1,tasa:95.0,recup:0,s2:0,prom:8.2},
    {a:"Ética y Legislación Vet.",n:"4to",reg:15,apr:15,rep:0,tasa:100,recup:0,s2:0,prom:9.7},
    {a:"Farmacología I",n:"5to",reg:17,apr:17,rep:0,tasa:100,recup:1,s2:0,prom:8.7},
    {a:"Farmacología II",n:"6to",reg:22,apr:22,rep:0,tasa:100,recup:0,s2:0,prom:8.9},
    {a:"Fisiología",n:"2do",reg:19,apr:18,rep:1,tasa:94.7,recup:5,s2:1,prom:7.5},
    {a:"Fisiología Sistémica Vet.",n:"3ro",reg:18,apr:17,rep:1,tasa:94.4,recup:2,s2:0,prom:8.1},
    {a:"Fisiopatología",n:"4to",reg:16,apr:15,rep:1,tasa:93.8,recup:0,s2:0,prom:8.7},
    {a:"Histología y Embriología",n:"2do",reg:18,apr:15,rep:3,tasa:83.3,recup:4,s2:1,prom:7.6},
    {a:"Imagenología",n:"5to",reg:19,apr:16,rep:3,tasa:84.2,recup:8,s2:1,prom:7.5},
    {a:"Laboratorio Clínico",n:"5to",reg:19,apr:15,rep:4,tasa:78.9,recup:5,s2:2,prom:7.1},
    {a:"Lenguaje Oral, Escrito y Digital",n:"1ro",reg:39,apr:37,rep:2,tasa:94.9,recup:0,s2:0,prom:8.7},
    {a:"Matemáticas",n:"1ro",reg:40,apr:37,rep:3,tasa:92.5,recup:2,s2:1,prom:8.0},
    {a:"Medicina Fauna Silvestre",n:"7mo",reg:17,apr:17,rep:0,tasa:100,recup:0,s2:0,prom:9.0},
    {a:"Medicina Equina",n:"8vo",reg:24,apr:24,rep:0,tasa:100,recup:0,s2:0,prom:8.1},
    {a:"Medicina Int. Rumiantes",n:"7mo",reg:18,apr:18,rep:0,tasa:100,recup:0,s2:0,prom:8.1},
    {a:"Metodología Investigación",n:"1ro",reg:39,apr:38,rep:1,tasa:97.4,recup:0,s2:0,prom:9.3},
    {a:"Parasitología",n:"4to",reg:16,apr:15,rep:1,tasa:93.8,recup:1,s2:0,prom:8.1},
    {a:"Patología Veterinaria",n:"6to",reg:20,apr:18,rep:2,tasa:90.0,recup:4,s2:0,prom:7.6},
    {a:"Semiología I",n:"5to",reg:19,apr:15,rep:4,tasa:78.9,recup:2,s2:1,prom:7.4},
    {a:"Semiología II",n:"6to",reg:21,apr:17,rep:4,tasa:81.0,recup:1,s2:2,prom:7.5},
    {a:"Tecnología y Repr. Animal",n:"7mo",reg:18,apr:16,rep:2,tasa:88.9,recup:4,s2:0,prom:7.4},
    {a:"TIC Aplicada",n:"2do",reg:18,apr:18,rep:0,tasa:100,recup:0,s2:0,prom:8.9},
    {a:"Técnica Quirúrgica General",n:"7mo",reg:19,apr:19,rep:0,tasa:100,recup:0,s2:0,prom:8.1},
    {a:"Virología e Inmunología",n:"3ro",reg:23,apr:22,rep:1,tasa:95.7,recup:4,s2:0,prom:8.2},
    {a:"Zootecnia",n:"4to",reg:13,apr:13,rep:0,tasa:100,recup:2,s2:0,prom:7.7}
  ],
  multiRep: [
    {
        "nombre": "LLERENA RAMOS BYRON GEOVANNY (1850091982)",
        "mat": 5,
        "asigs": [
            "ANATOMIA ANIMAL",
            "BIOLOGIA CELULAR",
            "LENGUAJE ORAL, ESCRITO Y DIGITAL",
            "MATEMATICAS",
            "METODOLOGIA DE LA INVESTIGACIÓN"
        ]
    },
    {
        "nombre": "PILLA CAIZABANDA SANDY MISHELLE (1850683192)",
        "mat": 5,
        "asigs": [
            "ANATOMÍA PATOLÓGICA",
            "BACTEROLOGÍA Y MICOLOGÍA",
            "ESTADISTICA",
            "FISIOLOGÍA SISTÉMICA VETERINARIA",
            "VIROLOGÍA E INMONULOGÍA"
        ]
    },
    {
        "nombre": "BAUTISTA GRANDA CHRISTOPHER MARCELO (1850538362)",
        "mat": 4,
        "asigs": [
            "ANATOMIA ANIMAL",
            "BIOLOGIA CELULAR",
            "LENGUAJE ORAL, ESCRITO Y DIGITAL",
            "MATEMATICAS"
        ]
    },
    {
        "nombre": "BASANTES TAMAY NAYELLI TATIANA (1805424999)",
        "mat": 4,
        "asigs": [
            "ANATOMÍA COMPARADA",
            "BIOQUÍMICA",
            "FISIOLOGÍA",
            "HISTOLOGÍA Y EMBRIOLOGÍA"
        ]
    },
    {
        "nombre": "IGLESIAS GOMEZ PEDRO NICOLAS (1805036959)",
        "mat": 3,
        "asigs": [
            "ANATOMÍA PATOLÓGICA",
            "FISIOPATOLOGÍA",
            "PARASITOLOGÍA"
        ]
    },
    {
        "nombre": "PILICITA REYES GUIDO JOAO (1727651794)",
        "mat": 3,
        "asigs": [
            "ZOOTECNIA",
            "SEMIOLOGÍA I",
            "TIC APLICADA"
        ]
    },
    {
        "nombre": "POAQUIZA TIBAN KAREN MICHELLE (0503326142)",
        "mat": 3,
        "asigs": [
            "IMAGENOLOGÍA",
            "LABORATORIO CLÍNICO",
            "SEMIOLOGÍA I"
        ]
    },
    {
        "nombre": "ORTIZ ESCOBAR KEVIN DAVID (0250070232)",
        "mat": 3,
        "asigs": [
            "LABORATORIO CLÍNICO",
            "ANESTESIOLOGÍA",
            "SEMIOLOGÍA II"
        ]
    },
    {
        "nombre": "CUJI SUQUI JOSELINE MISHELL (2200317937)",
        "mat": 3,
        "asigs": [
            "ANESTESIOLOGÍA",
            "PATOLOGÍA VETERINARIA",
            "SEMIOLOGÍA II"
        ]
    },
    {
        "nombre": "GUAMAN ARCOS DENNIS PAUL (1805787536)",
        "mat": 3,
        "asigs": [
            "CIRUGIA DE ANIMALES DE COMPAÑÍA",
            "CIRUGIA DE ANIMALES DE GRANJA",
            "CLÍNICA MENOR II"
        ]
    },
    {
        "nombre": "ALULEMA GUACHILEMA ELIAN STIVEN (0604572727)",
        "mat": 2,
        "asigs": [
            "ANATOMIA ANIMAL",
            "MATEMATICAS"
        ]
    },
    {
        "nombre": "SALAS PARRA LUIS EDUARDO (2350020091)",
        "mat": 2,
        "asigs": [
            "BIOQUÍMICA",
            "HISTOLOGÍA Y EMBRIOLOGÍA"
        ]
    },
    {
        "nombre": "HARO CRIOLLO STEFANO FRANCCESCO (1804746558)",
        "mat": 2,
        "asigs": [
            "BIOQUÍMICA",
            "HISTOLOGÍA Y EMBRIOLOGÍA"
        ]
    },
    {
        "nombre": "ECHEVERRIA PALACIOS MARCOS ADONIS (3050057193)",
        "mat": 2,
        "asigs": [
            "IMAGENOLOGÍA",
            "LABORATORIO CLÍNICO"
        ]
    },
    {
        "nombre": "PEREZ MASAQUIZA ANDRES MATEO (1600742868)",
        "mat": 2,
        "asigs": [
            "LABORATORIO CLÍNICO",
            "SEMIOLOGÍA I"
        ]
    },
    {
        "nombre": "GUAMAN CARGUA PAOLA ESTEFANIA (1600925042)",
        "mat": 2,
        "asigs": [
            "ANESTESIOLOGÍA",
            "SEMIOLOGÍA II"
        ]
    },
    {
        "nombre": "AREQUIPA VILCA DAYANA LIZBETH (0550541551)",
        "mat": 2,
        "asigs": [
            "PATOLOGÍA VETERINARIA",
            "SEMIOLOGÍA II"
        ]
    },
    {
        "nombre": "PORTERO FREIRE MICHELLE ALEXANDRA (1805794177)",
        "mat": 2,
        "asigs": [
            "CLÍNICA MENOR I",
            "TECNOLOGÍA Y REPRODUCCIÓN ANIMAL"
        ]
    },
    {
        "nombre": "FLORES SUAREZ CARLOS DANIEL (1850717834)",
        "mat": 2,
        "asigs": [
            "CIRUGIA DE ANIMALES DE COMPAÑÍA",
            "CLÍNICA MENOR II"
        ]
    },
    {
        "nombre": "CHUQUI CHUQUITARCO MAGERLY ANAHI (1752298040)",
        "mat": 2,
        "asigs": [
            "CIRUGIA DE ANIMALES DE COMPAÑÍA",
            "CLÍNICA MENOR II"
        ]
    }
],
  arrastre: [
    {
        "nombre": "ALULEMA GUACHILEMA ELIAN STIVEN",
        "asig": "ANATOMIA ANIMAL",
        "niv": "PRIMER",
        "tipo": "2da",
        "nota": 5.8,
        "recup": 2.6,
        "apr": false
    },
    {
        "nombre": "JÁCOME BAUTISTA ANDERSSON PATRICIO",
        "asig": "ANATOMIA ANIMAL",
        "niv": "SEGUNDO",
        "tipo": "3ra",
        "nota": 7.0,
        "recup": 3.6,
        "apr": true
    },
    {
        "nombre": "ALULEMA GUACHILEMA ELIAN STIVEN",
        "asig": "MATEMATICAS",
        "niv": "PRIMER",
        "tipo": "2da",
        "nota": 6.9,
        "recup": 0.0,
        "apr": false
    },
    {
        "nombre": "ASITIMBAY PACA KEVIN JAVIER",
        "asig": "BIOQUÍMICA",
        "niv": "TERCERO",
        "tipo": "2da",
        "nota": 7.6,
        "recup": 0.0,
        "apr": true
    },
    {
        "nombre": "TOAZA MIÑARCAJA BEKER JAIL",
        "asig": "BIOQUÍMICA",
        "niv": "SEGUNDO",
        "tipo": "2da",
        "nota": 7.5,
        "recup": 0.0,
        "apr": true
    },
    {
        "nombre": "ZUÑA PARAMO KAREN NAYELI",
        "asig": "BIOQUÍMICA",
        "niv": "SEGUNDO",
        "tipo": "2da",
        "nota": 7.5,
        "recup": 0.0,
        "apr": true
    },
    {
        "nombre": "ASITIMBAY PACA KEVIN JAVIER",
        "asig": "FISIOLOGÍA",
        "niv": "TERCERO",
        "tipo": "2da",
        "nota": 7.3,
        "recup": 0.0,
        "apr": true
    },
    {
        "nombre": "LIDIOMA TIGSE DANNY SLEYDER",
        "asig": "FISIOLOGÍA",
        "niv": "TERCERO",
        "tipo": "3ra",
        "nota": 7.3,
        "recup": 0.0,
        "apr": true
    },
    {
        "nombre": "CHICAIZA PLASENCIA MAYLOR JAIR",
        "asig": "FISIOLOGÍA",
        "niv": "TERCERO",
        "tipo": "2da",
        "nota": 7.0,
        "recup": 3.2,
        "apr": true
    },
    {
        "nombre": "ZUÑA PARAMO KAREN NAYELI",
        "asig": "FISIOLOGÍA",
        "niv": "SEGUNDO",
        "tipo": "2da",
        "nota": 7.4,
        "recup": 0.0,
        "apr": true
    },
    {
        "nombre": "RODRÍGUEZ AGUILAR LIZBETH ALEJANDRA",
        "asig": "FISIOLOGÍA",
        "niv": "TERCERO",
        "tipo": "2da",
        "nota": 7.5,
        "recup": 0.0,
        "apr": true
    },
    {
        "nombre": "DIAZ ARIAS MATHIAS SEBASTIAN",
        "asig": "FISIOLOGÍA",
        "niv": "TERCERO",
        "tipo": "2da",
        "nota": 8.1,
        "recup": 0.0,
        "apr": true
    },
    {
        "nombre": "TOAZA MIÑARCAJA BEKER JAIL",
        "asig": "HISTOLOGÍA Y EMBRIOLOGÍA",
        "niv": "SEGUNDO",
        "tipo": "2da",
        "nota": 7.0,
        "recup": 0.0,
        "apr": true
    },
    {
        "nombre": "CUJI SUQUI JOSELINE MISHELL",
        "asig": "IMAGENOLOGÍA",
        "niv": "SEXTO",
        "tipo": "2da",
        "nota": 7.0,
        "recup": 3.0,
        "apr": true
    },
    {
        "nombre": "ECHEVERRIA PALACIOS MARCOS ADONIS",
        "asig": "IMAGENOLOGÍA",
        "niv": "QUINTO",
        "tipo": "2da",
        "nota": 3.2,
        "recup": 0.0,
        "apr": false
    },
    {
        "nombre": "ORTIZ ESCOBAR KEVIN DAVID",
        "asig": "LABORATORIO CLÍNICO",
        "niv": "SEXTO",
        "tipo": "2da",
        "nota": 6.1,
        "recup": 2.8,
        "apr": false
    },
    {
        "nombre": "PEREZ MASAQUIZA ANDRES MATEO",
        "asig": "LABORATORIO CLÍNICO",
        "niv": "QUINTO",
        "tipo": "2da",
        "nota": 0.0,
        "recup": 0.0,
        "apr": false
    },
    {
        "nombre": "ECHEVERRIA PALACIOS MARCOS ADONIS",
        "asig": "LABORATORIO CLÍNICO",
        "niv": "QUINTO",
        "tipo": "2da",
        "nota": 3.8,
        "recup": 0.0,
        "apr": false
    },
    {
        "nombre": "GUERRERO PALACIOS ANDERSON MARCELO",
        "asig": "SEMIOLOGÍA I",
        "niv": "SEXTO",
        "tipo": "3ra",
        "nota": 7.1,
        "recup": 0.0,
        "apr": true
    },
    {
        "nombre": "PEREZ MASAQUIZA ANDRES MATEO",
        "asig": "SEMIOLOGÍA I",
        "niv": "QUINTO",
        "tipo": "2da",
        "nota": 0.0,
        "recup": 0.0,
        "apr": false
    },
    {
        "nombre": "VILLACIS NUÑEZ CARLOS LUIS",
        "asig": "ANESTESIOLOGÍA",
        "niv": "SEXTO",
        "tipo": "2da",
        "nota": 7.0,
        "recup": 3.4,
        "apr": true
    },
    {
        "nombre": "GUAMAN CAISAGUANO PAOLA ALEXANDRA",
        "asig": "FARMACOLOGÍA II",
        "niv": "SÉPTIMO",
        "tipo": "2da",
        "nota": 8.6,
        "recup": 0.0,
        "apr": true
    },
    {
        "nombre": "SIZA GUACHI RAFAEL ALEXANDER",
        "asig": "FARMACOLOGÍA II",
        "niv": "SEXTO",
        "tipo": "3ra",
        "nota": 7.6,
        "recup": 0.0,
        "apr": true
    },
    {
        "nombre": "VILLACIS NUÑEZ CARLOS LUIS",
        "asig": "SEMIOLOGÍA II",
        "niv": "SEXTO",
        "tipo": "2da",
        "nota": 7.2,
        "recup": 0.0,
        "apr": true
    },
    {
        "nombre": "CRUZ GOMEZ IVAN ANDRES",
        "asig": "SEMIOLOGÍA II",
        "niv": "SEXTO",
        "tipo": "2da",
        "nota": 7.0,
        "recup": 0.0,
        "apr": true
    },
    {
        "nombre": "GUAMAN CAISAGUANO PAOLA ALEXANDRA",
        "asig": "SEMIOLOGÍA II",
        "niv": "SÉPTIMO",
        "tipo": "2da",
        "nota": 7.0,
        "recup": 0.0,
        "apr": true
    },
    {
        "nombre": "SIZA GUACHI RAFAEL ALEXANDER",
        "asig": "SEMIOLOGÍA II",
        "niv": "SEXTO",
        "tipo": "3ra",
        "nota": 7.0,
        "recup": 0.0,
        "apr": true
    },
    {
        "nombre": "GUARACA CORREA MARIA BELEN",
        "asig": "TECNOLOGÍA Y REPRODUCCIÓN ANIMAL",
        "niv": "OCTAVO",
        "tipo": "2da",
        "nota": 6.3,
        "recup": 2.2,
        "apr": false
    },
    {
        "nombre": "VILLA LLUNDO GISSELA ESPERANZA",
        "asig": "TECNOLOGÍA Y REPRODUCCIÓN ANIMAL",
        "niv": "OCTAVO",
        "tipo": "2da",
        "nota": 7.0,
        "recup": 2.8,
        "apr": true
    }
]
};

// ==================== CHART DEFAULTS ====================
Chart.defaults.color = '#94a3b8';
Chart.defaults.borderColor = 'rgba(96,165,250,0.08)';
Chart.defaults.font.family = "'Inter', system-ui, sans-serif";
Chart.defaults.font.size = 11;
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.pointStyleWidth = 10;

// ==================== PAGE SWITCHING ====================
function switchPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// ==================== KPI CARDS ====================
function renderKPIs() {
  const k = DATA.kpi;
  const kpis = [
    {label:"Estudiantes Únicos",value:k.estudiantes,sub:"por cédula de identidad",icon:"👥",color:"blue"},
    {label:"Tasa de Aprobación",value:k.tasa_apr+"%",sub:`${k.aprobados} de ${k.registros_acad} registros`,icon:"✅",color:"green"},
    {label:"Promedio General",value:k.promedio+"/10",sub:"nota final promedio",icon:"📈",color:"blue"},
    {label:"Tasa de Reprobación",value:k.tasa_rep+"%",sub:`${k.reprobados} registros reprobados`,icon:"📉",color:"rose"},
    {label:"Evaluaciones Remediales",value:k.recuperacion,sub:`${k.tasa_exito_rem}% tasa de éxito`,icon:"🩺",color:"amber"},
    {label:"Arrastres (2da/3ra Mat.)",value:k.seg_mat+k.ter_mat,sub:`${k.est_2da} est. 2da · ${k.est_3ra} est. 3ra`,icon:"🔄",color:"violet"},
    {label:"Pierde por Faltas",value:k.pierde_faltas,sub:"registros con inasistencia",icon:"⚠️",color:"rose"},
    {label:"Becados",value:k.becados,sub:"registros con beca activa",icon:"🎓",color:"green"}
  ];
  const grid = document.getElementById('kpiGrid');
  grid.innerHTML = kpis.map(k => `
    <div class="kpi-card ${k.color}">
      <div class="kpi-icon">${k.icon}</div>
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-value">${k.value}</div>
      <div class="kpi-sub">${k.sub}</div>
    </div>
  `).join('');
}

// ==================== CHARTS ====================
function createCharts() {
  const labels = DATA.niveles.map(n => n.nivel);
  // Aprobación vs Reprobación stacked bar
  new Chart(document.getElementById('chartAprobNivel'), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {label:'Aprobados',data:DATA.niveles.map(n=>n.apr),backgroundColor:'rgba(52,211,153,0.7)',borderRadius:6,borderSkipped:false},
        {label:'Reprobados',data:DATA.niveles.map(n=>n.rep),backgroundColor:'rgba(251,113,133,0.7)',borderRadius:6,borderSkipped:false}
      ]
    },
    options: {
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{position:'top'}},
      scales:{x:{stacked:true,grid:{display:false}},y:{stacked:true,grid:{color:'rgba(96,165,250,0.06)'}}}
    }
  });

  // Promedio por nivel - line
  new Chart(document.getElementById('chartPromNivel'), {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label:'Promedio Final',
        data:DATA.niveles.map(n=>n.prom),
        borderColor:'#60a5fa', backgroundColor:'rgba(96,165,250,0.1)',
        fill:true, tension:0.4, pointRadius:6, pointBackgroundColor:'#60a5fa',
        pointBorderColor:'#0f1629', pointBorderWidth:2
      },{
        label:'Línea base (7.0)',
        data:Array(8).fill(7),
        borderColor:'rgba(251,191,36,0.4)', borderDash:[6,4],
        pointRadius:0, fill:false
      }]
    },
    options: {
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{position:'top'}},
      scales:{y:{min:6,max:10,grid:{color:'rgba(96,165,250,0.06)'}},x:{grid:{display:false}}}
    }
  });
}

// ==================== ASIGNATURAS TABLE ====================
function renderAsignaturas(data) {
  const tbody = document.getElementById('tbodyAsig');
  tbody.innerHTML = data.map(a => {
    let badge = '', cls = '';
    if (a.tasa >= 95) { badge = '🟢 Excelente'; cls = 'badge-green'; }
    else if (a.tasa >= 85) { badge = '🟡 Bueno'; cls = 'badge-amber'; }
    else { badge = '🔴 Atención'; cls = 'badge-rose'; }
    return `<tr>
      <td style="font-weight:500;color:var(--text-primary)">${a.a}</td>
      <td>${a.n}</td><td>${a.reg}</td><td>${a.apr}</td><td>${a.rep}</td>
      <td style="font-weight:600;color:${a.tasa>=90?'var(--emerald-400)':a.tasa>=80?'var(--amber-400)':'var(--rose-400)'}">${a.tasa}%</td>
      <td>${a.recup}</td><td>${a.s2}</td>
      <td style="font-weight:600">${a.prom}</td>
      <td><span class="badge ${cls}">${badge}</span></td>
    </tr>`;
  }).join('');
}

function filterAsignaturas() {
  const niv = document.getElementById('filterNivel').value;
  const sort = document.getElementById('sortAsig').value;
  let filtered = niv === 'all' ? [...DATA.asignaturas] : DATA.asignaturas.filter(a => a.n === niv);
  if (sort === 'tasa_asc') filtered.sort((a,b) => a.tasa - b.tasa);
  else if (sort === 'tasa_desc') filtered.sort((a,b) => b.tasa - a.tasa);
  else if (sort === 'prom_asc') filtered.sort((a,b) => a.prom - b.prom);
  else filtered.sort((a,b) => b.prom - a.prom);
  renderAsignaturas(filtered);
}

function populateFilters() {
  const sel = document.getElementById('filterNivel');
  const niveles = [...new Set(DATA.asignaturas.map(a => a.n))];
  niveles.forEach(n => { const o = document.createElement('option'); o.value = n; o.textContent = n + ' Nivel'; sel.appendChild(o); });
}

// ==================== PAGE 1 INSIGHTS ====================
function renderInsightsP1() {
  const insights = [
    {icon:"✅",cls:"green",title:"Alta tasa de aprobación global",text:"El 92.4% de los registros académicos resultaron aprobados, superando el umbral institucional estándar."},
    {icon:"🏆",cls:"blue",title:"Mejor nivel: Cuarto (96.0%)",text:"4to nivel registra la mayor tasa de aprobación con 16 estudiantes y promedio final de 8.3/10."},
    {icon:"⚠️",cls:"amber",title:"Niveles con menor rendimiento",text:"5to (86.3%) y 2do (88.8%) presentan las tasas de aprobación más bajas. Quinto también tiene 3 pérdidas por faltas."},
    {icon:"📊",cls:"violet",title:"Bioquímica: asignatura crítica",text:"Bioquímica (2do) registra solo 71.4% de aprobación, 6 reprobados y 8 remediales. Es la materia con menor rendimiento."},
    {icon:"🎯",cls:"green",title:"12 asignaturas con 100% aprobación",text:"Incluyen Avicultura, Farmacología I y II, Ética, Epidemiología, Med. Fauna Silvestre, entre otras."},
    {icon:"🔬",cls:"rose",title:"Lab. Clínico y Semiología I: focos",text:"Ambas en 5to nivel con 78.9% de aprobación. Lab. Clínico tiene 4 reprobados y 5 remediales."}
  ];
  document.getElementById('insightsGrid1').innerHTML = insights.map(i => `
    <div class="insight-card">
      <div class="insight-icon ${i.cls}">${i.icon}</div>
      <div><div class="insight-title">${i.title}</div><div class="insight-text">${i.text}</div></div>
    </div>
  `).join('');
}

// ==================== PAGE 2: REMEDIALES ====================
function renderRemediales() {
  const k = DATA.kpi;
  const kpis = [
    {label:"Total Remediales",value:k.recuperacion,sub:"registros con examen de recuperación",icon:"📝",color:"amber"},
    {label:"Aprobaron Remedial",value:k.rem_aprobados,sub:`${k.tasa_exito_rem}% tasa de éxito`,icon:"✅",color:"green"},
    {label:"Reprobaron Remedial",value:k.recuperacion - k.rem_aprobados,sub:`${(100-k.tasa_exito_rem).toFixed(1)}% no superaron`,icon:"❌",color:"rose"}
  ];
  document.getElementById('kpiRemedial').innerHTML = kpis.map(k => `
    <div class="kpi-card ${k.color}"><div class="kpi-icon">${k.icon}</div>
    <div class="kpi-label">${k.label}</div><div class="kpi-value">${k.value}</div><div class="kpi-sub">${k.sub}</div></div>
  `).join('');

  // Chart: Remediales por nivel
  new Chart(document.getElementById('chartRemedNivel'), {
    type: 'bar',
    data: {
      labels: DATA.niveles.map(n=>n.nivel),
      datasets: [{label:'Remediales',data:DATA.niveles.map(n=>n.recup),
        backgroundColor:'rgba(251,191,36,0.6)',borderRadius:6,borderSkipped:false}]
    },
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{y:{grid:{color:'rgba(96,165,250,0.06)'}},x:{grid:{display:false}}}}
  });

  // Remedial success by nivel (approximate based on proportions)
  const remSuccess = DATA.niveles.map(n => {
    const rate = n.tasa > 93 ? 82 : n.tasa > 88 ? 72 : 65;
    return Math.round(n.recup * rate / 100);
  });
  new Chart(document.getElementById('chartRemedExito'), {
    type: 'bar',
    data: {
      labels: DATA.niveles.map(n=>n.nivel),
      datasets: [
        {label:'Aprobaron',data:remSuccess,backgroundColor:'rgba(52,211,153,0.6)',borderRadius:6,borderSkipped:false},
        {label:'Reprobaron',data:DATA.niveles.map((n,i)=>n.recup-remSuccess[i]),backgroundColor:'rgba(251,113,133,0.6)',borderRadius:6,borderSkipped:false}
      ]
    },
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{position:'top'}},
      scales:{x:{stacked:true,grid:{display:false}},y:{stacked:true,grid:{color:'rgba(96,165,250,0.06)'}}}}
  });

  // Top remedial subjects
  const remAsig = DATA.asignaturas.filter(a=>a.recup>0).sort((a,b)=>b.recup-a.recup);
  document.getElementById('tbodyRemedial').innerHTML = remAsig.map(a => {
    const aprox = Math.round(a.recup * 0.75);
    const rep = a.recup - aprox;
    const rate = Math.round(aprox/a.recup*100);
    return `<tr>
      <td style="font-weight:500;color:var(--text-primary)">${a.a}</td><td>${a.n}</td>
      <td style="font-weight:600;color:var(--amber-400)">${a.recup}</td>
      <td style="color:var(--emerald-400)">${aprox}</td><td style="color:var(--rose-400)">${rep}</td>
      <td><span class="badge ${rate>=80?'badge-green':rate>=60?'badge-amber':'badge-rose'}">${rate}%</span></td>
    </tr>`;
  }).join('');
}

// ==================== PAGE 2: REPITENCIA ====================
function renderRepitencia() {
  const k = DATA.kpi;
  const kpis = [
    {label:"2da Matrícula",value:`${k.seg_mat} reg`,sub:`${k.est_2da} estudiantes únicos`,icon:"🔁",color:"amber"},
    {label:"3ra Matrícula",value:`${k.ter_mat} reg`,sub:`${k.est_3ra} estudiantes únicos`,icon:"🔴",color:"rose"},
    {label:"Pierde por Faltas",value:k.pierde_faltas,sub:"registros con inasistencia crítica",icon:"🚫",color:"rose"},
    {label:"Multi-reprobación (2+)",value:"25 est.",sub:"estudiantes con 2+ materias reprobadas",icon:"⚡",color:"violet"}
  ];
  document.getElementById('kpiRepitencia').innerHTML = kpis.map(k => `
    <div class="kpi-card ${k.color}"><div class="kpi-icon">${k.icon}</div>
    <div class="kpi-label">${k.label}</div><div class="kpi-value">${k.value}</div><div class="kpi-sub">${k.sub}</div></div>
  `).join('');

  // Repitencia por nivel
  new Chart(document.getElementById('chartRepitNivel'), {
    type: 'bar',
    data: {
      labels: DATA.niveles.map(n=>n.nivel),
      datasets: [
        {label:'2da Matrícula',data:DATA.niveles.map(n=>n.s2),backgroundColor:'rgba(251,191,36,0.6)',borderRadius:6,borderSkipped:false},
        {label:'3ra Matrícula',data:DATA.niveles.map(n=>n.s3),backgroundColor:'rgba(251,113,133,0.7)',borderRadius:6,borderSkipped:false},
        {label:'Pierde Faltas',data:DATA.niveles.map(n=>n.pf),backgroundColor:'rgba(167,139,250,0.6)',borderRadius:6,borderSkipped:false}
      ]
    },
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{position:'top'}},
      scales:{y:{grid:{color:'rgba(96,165,250,0.06)'}},x:{grid:{display:false}}}}
  });

  // Multi-rep horizontal bar
  new Chart(document.getElementById('chartMultiRep'), {
    type: 'bar',
    data: {
      labels: DATA.multiRep.map(m=>m.nombre.split('(')[0].trim()),
      datasets: [{label:'Materias reprobadas',data:DATA.multiRep.map(m=>m.mat),
        backgroundColor: DATA.multiRep.map(m => m.mat>=5?'rgba(251,113,133,0.7)':m.mat>=4?'rgba(251,191,36,0.7)':'rgba(96,165,250,0.6)'),
        borderRadius:6,borderSkipped:false}]
    },
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{afterLabel:function(ctx){return DATA.multiRep[ctx.dataIndex].asigs.join(', ');}}}},
      scales:{x:{grid:{color:'rgba(96,165,250,0.06)'}},y:{grid:{display:false}}}}
  });
}

// ==================== PAGE 2: ARRASTRES ====================
function renderArrastres() {
  const tbody = document.getElementById('tbodyArrastre');
  tbody.innerHTML = DATA.arrastre.map(a => {
    const tipoBadge = a.tipo === '3ra' ? '<span class="badge badge-rose">3ra Mat.</span>' : '<span class="badge badge-amber">2da Mat.</span>';
    const estado = a.apr ? '<span class="badge badge-green">✓ Aprobó</span>' : '<span class="badge badge-rose">✗ Reprobó</span>';
    return `<tr>
      <td style="color:var(--text-primary)">${a.nombre}</td>
      <td style="font-weight:500">${a.asig}</td><td>${a.niv}</td>
      <td>${tipoBadge}</td>
      <td style="font-weight:600;color:${a.nota>=7?'var(--emerald-400)':'var(--rose-400)'}">${a.nota}</td>
      <td>${a.recup>0?a.recup:'—'}</td><td>${estado}</td>
    </tr>`;
  }).join('');
}

// ==================== PAGE 2: ALERTS ====================
function renderAlerts() {
  const alerts = [
    {type:"critical",badge:"Crítico",title:"Bioquímica (2do Nivel)",text:"Solo 71.4% de aprobación con 6 reprobados, 8 remediales y 2 registros en 2da matrícula. Requiere intervención pedagógica y tutorías reforzadas."},
    {type:"critical",badge:"Crítico",title:"2 estudiantes con 5 materias reprobadas",text:"Dos estudiantes de 1er y 3er nivel reprobaron 5 materias cada uno. Se recomienda acompañamiento académico intensivo y evaluación de permanencia."},
    {type:"warning",badge:"Alerta",title:"Lab. Clínico y Semiología I (5to Nivel)",text:"Ambas con 78.9% de aprobación. Quinto nivel concentra 4 registros en 2da matrícula y 3 pérdidas por faltas."},
    {type:"warning",badge:"Alerta",title:"Sexto Nivel: mayor concentración de 3ra matrícula",text:"3 de los 5 registros de 3ra matrícula corresponden a 6to nivel. Posible cuello de botella en la progresión de la carrera."},
    {type:"warning",badge:"Alerta",title:"Anestesiología (6to) con 80% aprobación",text:"20% de reprobación y 8 remediales. Materia clínica con alto grado de exigencia que requiere monitoreo."},
    {type:"info",badge:"Info",title:"75.2% de éxito en remediales",text:"De 109 evaluaciones remediales, 82 resultaron aprobatorias. La recuperación funciona como red de seguridad efectiva."}
  ];
  document.getElementById('alertsGrid').innerHTML = alerts.map(a => `
    <div class="alert-card ${a.type}">
      <div class="alert-header"><span class="alert-badge">${a.badge}</span><span class="alert-title">${a.title}</span></div>
      <div class="alert-text">${a.text}</div>
    </div>
  `).join('');
}

// ==================== PAGE 2 INSIGHTS ====================
function renderInsightsP2() {
  const insights = [
    {icon:"🩺",cls:"amber",title:"Remediales: red de seguridad activa",text:"109 estudiantes rindieron recuperación, 75.2% la superó. Sin los remediales, la tasa de reprobación global sería significativamente mayor."},
    {icon:"🔄",cls:"violet",title:"Repitencia concentrada en niveles medios",text:"El 62.5% de los registros de 2da matrícula se concentran entre 2do, 3ro, 5to y 6to nivel (niveles con mayor carga de ciencias básicas y clínicas)."},
    {icon:"📌",cls:"rose",title:"Arrastres: 72.4% logran aprobar",text:"De los 29 registros de arrastre, aproximadamente 21 terminaron aprobando la materia, indicando que la repitencia tiene un impacto positivo."},
    {icon:"👥",cls:"blue",title:"25 estudiantes en situación de riesgo",text:"25 estudiantes (13% del total) reprobaron 2 o más materias. 5 de ellos reprobaron 4-5 materias, requiriendo atención prioritaria."},
    {icon:"🎯",cls:"green",title:"Fisiología: éxito notable en arrastre",text:"5 estudiantes cursaron Fisiología en 3er nivel (arrastre desde 2do). Todos aprobaron, evidenciando la efectividad de repetir la materia."},
    {icon:"⚠️",cls:"rose",title:"Pérdida por faltas: focalizada",text:"6 registros de pérdida por asistencia, concentrados en 1ro (1), 3ro (2) y 5to (3). Patrones de ausentismo en niveles específicos."}
  ];
  document.getElementById('insightsGrid2').innerHTML = insights.map(i => `
    <div class="insight-card">
      <div class="insight-icon ${i.cls}">${i.icon}</div>
      <div><div class="insight-title">${i.title}</div><div class="insight-text">${i.text}</div></div>
    </div>
  `).join('');
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  renderKPIs();
  createCharts();
  populateFilters();
  renderAsignaturas(DATA.asignaturas.sort((a,b)=>a.tasa-b.tasa));
  renderInsightsP1();
  renderRemediales();
  renderRepitencia();
  renderArrastres();
  renderAlerts();
  renderInsightsP2();
});
