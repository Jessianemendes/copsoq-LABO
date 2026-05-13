var DB_CARGOS={};

// ═══════════════════════════════════════════════════════════════
// SISTEMA DE PERFIS PGR — Configuração Genérica de Matrizes
// ═══════════════════════════════════════════════════════════════
var PGR_PERFIS_BUILTIN = {
  "engerseg_4x4": {
    nome: "Engerseg — BS 8800 (4×4)",
    tamanho: 4,
    usaC: false,
    formulaLabel: "P × S (posição na matriz)",
    pNomes: ["Altamente Improvável","Improvável","Pouco Provável","Provável"],
    sNomes: ["Reversível Leve","Reversível Severo","Irreversível","Fatal ou Incapacitante"],
    graus: [
      {nome:"Irrelevante", cor:"#dcfce7", corTxt:"#166534", rpnMin:0, rpnMax:2},
      {nome:"Baixo", cor:"#bfdbfe", corTxt:"#1e40af", rpnMin:2, rpnMax:4},
      {nome:"Médio", cor:"#fef9c3", corTxt:"#92400e", rpnMin:4, rpnMax:8},
      {nome:"Alto", cor:"#fed7aa", corTxt:"#9a3412", rpnMin:8, rpnMax:12},
      {nome:"Crítico", cor:"#fee2e2", corTxt:"#991b1b", rpnMin:12, rpnMax:16}
    ],
    matriz4x4: [
      ["Irrelevante","Baixo","Baixo","Médio"],
      ["Baixo","Baixo","Médio","Alto"],
      ["Baixo","Médio","Alto","Alto"],
      ["Médio","Alto","Alto","Crítico"]
    ],
    classificacao: {fav:"Aceitável",int:"Tolerável",ris:"Não Aceitável"},
    prazos: {0:"Monitoramento",1:"Monitoramento",2:"180 dias",3:"90 dias",4:"30 dias",5:"Imediato"},
    refMetodologica: "Mulhausen & Damiano (1998) e Apêndice D da BS 8800 (BSI, 1996)",
    refNormativa: "BS 8800 (BSI, 1996) | NR-01 | NR-17",
    descMetodo: "A Matriz de Risco foi construída conforme o Apêndice D da BS 8800 (BSI, 1996), recomendada pela Fundacentro, utilizando escala 4×4 (Probabilidade × Gravidade) para classificação de riscos psicossociais. A avaliação resulta em cinco níveis de risco: Irrelevante, Baixo, Médio, Alto e Crítico."
  },
  "santa_clara_4x4": {
    nome: "Santa Clara — BS 8800 (4×4)",
    tamanho: 4,
    usaC: false,
    formulaLabel: "P × S (posição na matriz)",
    pNomes: ["Altamente Improvável","Improvável","Pouco Provável","Provável"],
    sNomes: ["Reversível Leve","Reversível Severo","Irreversível","Fatal ou Incapacitante"],
    graus: [
      {nome:"Irrelevante", cor:"#dcfce7", corTxt:"#166534", rpnMin:0, rpnMax:2},
      {nome:"Risco Baixo", cor:"#bbf7d0", corTxt:"#166534", rpnMin:2, rpnMax:4},
      {nome:"Risco Médio", cor:"#fef9c3", corTxt:"#92400e", rpnMin:4, rpnMax:8},
      {nome:"Risco Alto", cor:"#fed7aa", corTxt:"#9a3412", rpnMin:8, rpnMax:12},
      {nome:"Risco Crítico", cor:"#fee2e2", corTxt:"#991b1b", rpnMin:12, rpnMax:16}
    ],
    matriz4x4: [
      ["Irrelevante","Risco Baixo","Risco Baixo","Risco Médio"],
      ["Risco Baixo","Risco Baixo","Risco Médio","Risco Alto"],
      ["Risco Baixo","Risco Médio","Risco Alto","Risco Alto"],
      ["Risco Médio","Risco Alto","Risco Alto","Risco Crítico"]
    ],
    classificacao: {fav:"Tolerável",int:"Tolerável",ris:"Não Tolerável"},
    prazos: {0:"Monitoramento",1:"Monitoramento",2:"180 dias",3:"90 dias",4:"30 dias",5:"Imediato"},
    refMetodologica: "Mulhausen & Damiano (1998) e Apêndice D da BS 8800 (BSI, 1996)",
    refNormativa: "BS 8800 (BSI, 1996) | NR-01 | NR-17",
    descMetodo: "A Matriz de Risco foi construída conforme o Apêndice D da BS 8800 (BSI, 1996), utilizando escala 4×4 (Probabilidade × Gravidade). A avaliação resulta em cinco níveis de risco: Irrelevante, Risco Baixo, Risco Médio, Risco Alto e Risco Crítico. A classificação contempla ações recomendadas conforme o nível: Irrelevante (nenhuma ação), Baixo (manter controles), Médio (monitorar e avaliar novos controles), Alto (implementar novos controles), Crítico (paralisar atividade até implementação de controles eficazes)."
  },
  "pedra_aiha_5x5": {
    nome: "Pedra — AIHA/Fundacentro (5×5)",
    tamanho: 5,
    usaC: false,
    usaEstimativa: true,
    formulaLabel: "P × S (posição na matriz 5×5)",
    pNomes: ["Rara","Pouco Provável","Possível","Provável","Muito Provável"],
    sNomes: ["Leve","Baixa","Moderada","Alta","Extrema"],
    graus: [
      {nome:"Trivial", cor:"#dcfce7", corTxt:"#166534", rpnMin:0, rpnMax:3},
      {nome:"Tolerável", cor:"#d1fae5", corTxt:"#065f46", rpnMin:3, rpnMax:8},
      {nome:"Moderado", cor:"#fef9c3", corTxt:"#92400e", rpnMin:8, rpnMax:12},
      {nome:"Substancial", cor:"#fed7aa", corTxt:"#9a3412", rpnMin:12, rpnMax:15},
      {nome:"Intolerável", cor:"#fee2e2", corTxt:"#991b1b", rpnMin:15, rpnMax:25}
    ],
    matriz5x5: [
      [1,2,3,4,5],
      [2,4,6,8,10],
      [3,6,9,12,15],
      [4,8,12,16,20],
      [5,10,15,20,25]
    ],
    estimativas: ["Certa (0)","Incerta (1)","Altamente Incerta (2)"],
    classificacao: {fav:"Trivial",int:"Tolerável",ris:"Intolerável"},
    prazos: {0:"Monitoramento",1:"Monitoramento",2:"180 dias",3:"90 dias",4:"30 dias",5:"Imediato"},
    refMetodologica: "AIHA — American Industrial Hygiene Association, AS/NZS 4360 e European Comission (Fundacentro)",
    refNormativa: "AIHA (2015) | AS/NZS 4360 | NR-01 | NR-17",
    descMetodo: "A Matriz de Risco utilizada é no formato 5×5, baseada nas estimativas de gradações de Severidade e Probabilidade da AIHA — American Industrial Hygiene Association, AS/NZS 4360 e European Comission (recomendadas pela Fundacentro). Os níveis de risco são cinco: Trivial (1-3), Tolerável (3-8), Moderado (4-12), Substancial (10-15) e Intolerável (15-25). Cada nível possui método de controle sugerido, baseado na estimativa (grau de certeza) da avaliação.",
    usaIQCT: true,
    formulaIQCT: "(4*nB + 3*nM + nA) / ((nB + nM + nA) * 4) * 100"
  },
  "arseg_aiha_5x5": {
    nome: "ARSEG — AIHA/Fundacentro (5×5)",
    tamanho: 5,
    usaC: false,
    usaEstimativa: true,
    formulaLabel: "P × S (numérico, posição na matriz 5×5)",
    pNomes: ["Rara","Pouco Provável","Possível","Provável","Muito Provável"],
    sNomes: ["Leve","Baixa","Moderada","Alta","Extrema"],
    graus: [
      {nome:"Trivial", cor:"#dcfce7", corTxt:"#166534", rpnMin:0, rpnMax:3},
      {nome:"Tolerável", cor:"#d1fae5", corTxt:"#065f46", rpnMin:3, rpnMax:8},
      {nome:"Moderado", cor:"#fef9c3", corTxt:"#92400e", rpnMin:8, rpnMax:12},
      {nome:"Substancial", cor:"#fed7aa", corTxt:"#9a3412", rpnMin:12, rpnMax:15},
      {nome:"Intolerável", cor:"#fee2e2", corTxt:"#991b1b", rpnMin:15, rpnMax:25}
    ],
    matriz5x5: [
      [1,2,3,4,5],
      [2,4,6,8,10],
      [3,6,9,12,15],
      [4,8,12,16,20],
      [5,10,15,20,25]
    ],
    estimativas: ["Certa (0)","Incerta (1)","Altamente Incerta (2)"],
    classificacao: {fav:"Trivial",int:"Tolerável",ris:"Intolerável"},
    prazos: {0:"Monitoramento",1:"Monitoramento",2:"180 dias",3:"90 dias",4:"30 dias",5:"Imediato"},
    refMetodologica: "AIHA — American Industrial Hygiene Association, AS/NZS 4360 e European Comission (Fundacentro)",
    refNormativa: "AIHA (2015) | AS/NZS 4360 | NR-01 | NR-17",
    descMetodo: "A Matriz de Risco utilizada é no formato 5×5, baseada nas estimativas de gradações de Severidade e Probabilidade da AIHA — American Industrial Hygiene Association, AS/NZS 4360 e European Comission (recomendadas pela Fundacentro). Os níveis de risco são cinco: Trivial (1-3), Tolerável (3-8), Moderado (4-12), Substancial (10-15) e Intolerável (15-25).",
    usaIQCT: true,
    formulaIQCT: "(4*nB + 3*nM + nA) / ((nB + nM + nA) * 4) * 100"
  }
};

// Perfis customizados salvos pelo usuário
var PGR_PERFIS_CUSTOM = {};

// Retorna o perfil PGR ativo do AEP atual (ou null se não selecionado)
function getPGR() {
  var id = aep.perfilPGR || '';
  if (!id) return null;
  return PGR_PERFIS_BUILTIN[id] || PGR_PERFIS_CUSTOM[id] || null;
}

// Calcula o nível de risco conforme o perfil PGR ativo
function calcRiscoPGR(p, s, c) {
  var perfil = getPGR();
  if (!perfil) {
    // fallback — sem perfil: usa P×S÷C original
    if (!p || !s || !c) return null;
    var n = p * s / c;
    return { rpn: n, nivel: nRisco(p, s, c).replace(/[🟢🟡🟠🔴🚨]\s*/g, ''), bg: nrBg(n) };
  }
  if (!p || !s) return null;
  var rpn, nivel = '—', bg = '#f8fafc';

  if (perfil.tamanho === 4 && perfil.matriz4x4) {
    // Matriz 4×4 — resultado é texto da posição
    var pi = Math.min(Math.max(p - 1, 0), 3);
    var si = Math.min(Math.max(s - 1, 0), 3);
    nivel = perfil.matriz4x4[si][pi]; // severidade nas linhas, prob nas colunas
    rpn = p * s;
    // Encontrar cor do grau
    var grau = perfil.graus.find(function(g) { return g.nome === nivel; });
    bg = grau ? grau.cor : '#f8fafc';
  } else if (perfil.tamanho === 5 && perfil.matriz5x5) {
    // Matriz 5×5 — resultado numérico
    var pi5 = Math.min(Math.max(p - 1, 0), 4);
    var si5 = Math.min(Math.max(s - 1, 0), 4);
    rpn = perfil.matriz5x5[pi5][si5];
    // Encontrar grau pela faixa de RPN
    var grau5 = null;
    for (var g = perfil.graus.length - 1; g >= 0; g--) {
      if (rpn >= perfil.graus[g].rpnMin) { grau5 = perfil.graus[g]; break; }
    }
    nivel = grau5 ? grau5.nome : '—';
    bg = grau5 ? grau5.cor : '#f8fafc';
  } else if (perfil.usaC && c) {
    rpn = p * s / c;
    var grauC = null;
    for (var gc = perfil.graus.length - 1; gc >= 0; gc--) {
      if (rpn >= perfil.graus[gc].rpnMin) { grauC = perfil.graus[gc]; break; }
    }
    nivel = grauC ? grauC.nome : '—';
    bg = grauC ? grauC.cor : '#f8fafc';
  } else {
    rpn = p * s;
    var grauD = null;
    for (var gd = perfil.graus.length - 1; gd >= 0; gd--) {
      if (rpn >= perfil.graus[gd].rpnMin) { grauD = perfil.graus[gd]; break; }
    }
    nivel = grauD ? grauD.nome : '—';
    bg = grauD ? grauD.cor : '#f8fafc';
  }
  return { rpn: rpn, nivel: nivel, bg: bg };
}

// Retorna o prazo sugerido conforme perfil PGR
function prazoPGR(p, s, c) {
  var r = calcRiscoPGR(p, s, c);
  if (!r) return 'Monitoramento';
  var perfil = getPGR();
  if (!perfil) return prazoAuto(p, s, c);
  // Mapear nível para prazo
  var nivel = r.nivel;
  var graus = perfil.graus;
  for (var i = 0; i < graus.length; i++) {
    if (graus[i].nome === nivel) {
      var priorIdx = i; // 0=menor, 4=maior
      if (priorIdx >= 4) return 'Imediato';
      if (priorIdx === 3) return '30 dias';
      if (priorIdx === 2) return '90 dias';
      if (priorIdx === 1) return '180 dias';
      return 'Monitoramento';
    }
  }
  return 'Monitoramento';
}

// Cor de fundo do RPN conforme perfil PGR
function bgRiscoPGR(p, s, c) {
  var r = calcRiscoPGR(p, s, c);
  return r ? r.bg : '#f8fafc';
}

// Texto do nível de risco conforme perfil PGR
function txtRiscoPGR(p, s, c) {
  var r = calcRiscoPGR(p, s, c);
  return r ? r.nivel : '—';
}




// ═══════════════════════════════════════════════════════════════
// GERENCIADOR DE PERFIS PGR CUSTOMIZADOS
// ═══════════════════════════════════════════════════════════════

function salvarPerfisCustom(){
  try{ localStorage.setItem('pgr_perfis_custom', JSON.stringify(PGR_PERFIS_CUSTOM)); }catch(e){}
}
function carregarPerfisCustom(){
  try{
    var s=localStorage.getItem('pgr_perfis_custom');
    if(s) PGR_PERFIS_CUSTOM=JSON.parse(s);
  }catch(e){}
}

function excluirPerfilPGR(id){
  if(!PGR_PERFIS_CUSTOM[id]) return;
  if(!confirm('Excluir perfil "'+PGR_PERFIS_CUSTOM[id].nome+'"?')) return;
  delete PGR_PERFIS_CUSTOM[id];
  salvarPerfisCustom();
  if(aep.perfilPGR===id){aep.perfilPGR='';salvarAEP();}
  renderAEP();
}

function abrirEditorPerfil(editId){
  var perfil = editId ? (PGR_PERFIS_CUSTOM[editId]||null) : null;
  var isEdit = !!perfil;
  var tam = perfil ? perfil.tamanho : 4;
  var usaC = perfil ? (perfil.usaC||false) : false;
  var usaEst = perfil ? (perfil.usaEstimativa||false) : false;

  var h='<div id="pgr-editor-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);z-index:99998;display:flex;align-items:center;justify-content:center;overflow-y:auto;padding:20px">';
  h+='<div style="background:white;border-radius:12px;max-width:720px;width:100%;max-height:90vh;overflow-y:auto;padding:24px;box-shadow:0 20px 60px rgba(0,0,0,.3)">';
  h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">';
  h+='<div style="font-size:16px;font-weight:800;color:#1e293b">'+(isEdit?'✏️ Editar':'➕ Criar')+' Perfil PGR</div>';
  h+='<button onclick="fecharEditorPerfil()" style="background:none;border:none;font-size:20px;cursor:pointer;color:#94a3b8">✕</button>';
  h+='</div>';

  h+='<div style="display:grid;gap:12px">';
  h+='<div><label style="font-size:11px;font-weight:700;color:#64748b">Nome do Perfil</label>';
  h+='<input id="pf_nome" type="text" value="'+(perfil?perfil.nome:'')+'" placeholder="Ex: AIHA 5×5, BS 8800 4×4..." style="width:100%;padding:8px 12px;border:1px solid #e2e8f0;border-radius:6px;font-size:13px"/></div>';

  h+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">';
  h+='<div><label style="font-size:11px;font-weight:700;color:#64748b">Tamanho da Matriz</label>';
  h+='<select id="pf_tam" onchange="window._pfTamChanged()" style="width:100%;padding:8px;border:1px solid #e2e8f0;border-radius:6px">';
  h+='<option value="3"'+(tam===3?' selected':'')+'>3×3</option>';
  h+='<option value="4"'+(tam===4?' selected':'')+'>4×4</option>';
  h+='<option value="5"'+(tam===5?' selected':'')+'>5×5</option>';
  h+='</select></div>';
  h+='<div><label style="font-size:11px;font-weight:700;color:#64748b">Usa Controle (C)?</label>';
  h+='<select id="pf_usaC" style="width:100%;padding:8px;border:1px solid #e2e8f0;border-radius:6px">';
  h+='<option value="0"'+(!usaC?' selected':'')+'>Não</option>';
  h+='<option value="1"'+(usaC?' selected':'')+'>Sim</option>';
  h+='</select></div>';
  h+='<div><label style="font-size:11px;font-weight:700;color:#64748b">Usa Estimativa?</label>';
  h+='<select id="pf_usaEst" style="width:100%;padding:8px;border:1px solid #e2e8f0;border-radius:6px">';
  h+='<option value="0"'+(!usaEst?' selected':'')+'>Não</option>';
  h+='<option value="1"'+(usaEst?' selected':'')+'>Sim (0-Certa, 1-Incerta, 2-Alt.Incerta)</option>';
  h+='</select></div>';
  h+='</div>';

  // P names
  h+='<div><label style="font-size:11px;font-weight:700;color:#64748b">Nomes dos Níveis de PROBABILIDADE (1 por linha)</label>';
  var pDef = perfil ? perfil.pNomes.join('\n') : 'Altamente Improvável\nImprovável\nPouco Provável\nProvável';
  h+='<textarea id="pf_pNomes" rows="'+tam+'" style="width:100%;padding:8px 12px;border:1px solid #e2e8f0;border-radius:6px;font-size:12px">'+pDef+'</textarea></div>';

  // S names
  h+='<div><label style="font-size:11px;font-weight:700;color:#64748b">Nomes dos Níveis de SEVERIDADE (1 por linha)</label>';
  var sDef = perfil ? perfil.sNomes.join('\n') : 'Reversível Leve\nReversível Severo\nIrreversível\nFatal ou Incapacitante';
  h+='<textarea id="pf_sNomes" rows="'+tam+'" style="width:100%;padding:8px 12px;border:1px solid #e2e8f0;border-radius:6px;font-size:12px">'+sDef+'</textarea></div>';

  // Graus de risco
  h+='<div><label style="font-size:11px;font-weight:700;color:#64748b">GRAUS DE RISCO (nome | cor hex | rpnMin | rpnMax — 1 por linha)</label>';
  var gDef = perfil ? perfil.graus.map(function(g){return g.nome+'|'+g.cor+'|'+g.rpnMin+'|'+g.rpnMax;}).join('\n') :
    'Irrelevante|#dcfce7|0|2\nBaixo|#bfdbfe|2|4\nMédio|#fef9c3|4|8\nAlto|#fed7aa|8|12\nCrítico|#fee2e2|12|16';
  h+='<textarea id="pf_graus" rows="5" style="width:100%;padding:8px 12px;border:1px solid #e2e8f0;border-radius:6px;font-size:12px;font-family:monospace">'+gDef+'</textarea></div>';

  // Formula label
  h+='<div><label style="font-size:11px;font-weight:700;color:#64748b">Fórmula (descrição)</label>';
  h+='<input id="pf_formula" type="text" value="'+(perfil?perfil.formulaLabel:'P × S (posição na matriz)')+'" style="width:100%;padding:8px 12px;border:1px solid #e2e8f0;border-radius:6px;font-size:12px"/></div>';

  // Referências
  h+='<div><label style="font-size:11px;font-weight:700;color:#64748b">Referência Metodológica</label>';
  h+='<input id="pf_refMet" type="text" value="'+(perfil?perfil.refMetodologica:'')+'" placeholder="Ex: Mulhausen & Damiano (1998) e BS 8800" style="width:100%;padding:8px 12px;border:1px solid #e2e8f0;border-radius:6px;font-size:12px"/></div>';

  h+='<div><label style="font-size:11px;font-weight:700;color:#64748b">Referência Normativa</label>';
  h+='<input id="pf_refNorm" type="text" value="'+(perfil?perfil.refNormativa:'')+'" placeholder="Ex: BS 8800 (BSI, 1996) | NR-01 | NR-17" style="width:100%;padding:8px 12px;border:1px solid #e2e8f0;border-radius:6px;font-size:12px"/></div>';

  h+='<div><label style="font-size:11px;font-weight:700;color:#64748b">Descrição da Metodologia (aparece na introdução do PDF)</label>';
  h+='<textarea id="pf_descMetodo" rows="4" style="width:100%;padding:8px 12px;border:1px solid #e2e8f0;border-radius:6px;font-size:12px">'+(perfil?perfil.descMetodo:'')+'</textarea></div>';

  h+='</div>'; // end grid

  h+='<div style="display:flex;gap:10px;margin-top:16px;justify-content:flex-end">';
  h+='<button onclick="fecharEditorPerfil()" style="padding:10px 20px;border:1px solid #e2e8f0;border-radius:6px;background:white;cursor:pointer;font-size:13px">Cancelar</button>';
  h+='<button onclick="salvarEditorPerfil('+(isEdit?"'"+editId+"'":"null")+')" style="padding:10px 20px;border:none;border-radius:6px;background:#1e40af;color:white;cursor:pointer;font-size:13px;font-weight:600">'+(isEdit?'Salvar Alterações':'Criar Perfil')+'</button>';
  h+='</div>';

  h+='</div></div>';

  var div=document.createElement('div');
  div.id='pgr-editor-wrapper';
  div.innerHTML=h;
  document.body.appendChild(div);
}

window._pfTamChanged = function(){
  // Could dynamically adjust textarea rows, but for simplicity just let user manage
};

function fecharEditorPerfil(){
  var el=document.getElementById('pgr-editor-wrapper');
  if(el) el.remove();
}

function salvarEditorPerfil(editId){
  var nome=document.getElementById('pf_nome').value.trim();
  if(!nome){alert('Preencha o nome do perfil.');return;}
  var tam=parseInt(document.getElementById('pf_tam').value);
  var usaC=document.getElementById('pf_usaC').value==='1';
  var usaEst=document.getElementById('pf_usaEst').value==='1';
  var pNomes=document.getElementById('pf_pNomes').value.trim().split('\n').filter(function(l){return l.trim();});
  var sNomes=document.getElementById('pf_sNomes').value.trim().split('\n').filter(function(l){return l.trim();});
  var grausRaw=document.getElementById('pf_graus').value.trim().split('\n').filter(function(l){return l.trim();});
  var formula=document.getElementById('pf_formula').value.trim();
  var refMet=document.getElementById('pf_refMet').value.trim();
  var refNorm=document.getElementById('pf_refNorm').value.trim();
  var descMetodo=document.getElementById('pf_descMetodo').value.trim();

  if(pNomes.length!==tam){alert('Probabilidade precisa de '+tam+' níveis (você tem '+pNomes.length+').');return;}
  if(sNomes.length!==tam){alert('Severidade precisa de '+tam+' níveis (você tem '+sNomes.length+').');return;}
  if(grausRaw.length<2){alert('Precisa de pelo menos 2 graus de risco.');return;}

  var graus=[];
  for(var i=0;i<grausRaw.length;i++){
    var parts=grausRaw[i].split('|').map(function(s){return s.trim();});
    if(parts.length<4){alert('Grau '+(i+1)+' precisa de: nome|cor|rpnMin|rpnMax');return;}
    graus.push({nome:parts[0],cor:parts[1],corTxt:'#1e293b',rpnMin:parseFloat(parts[2]),rpnMax:parseFloat(parts[3])});
  }

  // Build the matrix (P x S = numeric)
  var matrizKey = 'matriz'+tam+'x'+tam;
  var matriz=[];
  for(var pi=0;pi<tam;pi++){
    var row=[];
    for(var si=0;si<tam;si++){
      row.push((pi+1)*(si+1));
    }
    matriz.push(row);
  }

  var perfil={
    nome:nome, tamanho:tam, usaC:usaC,
    formulaLabel:formula||('P × S'+(usaC?' ÷ C':'')),
    pNomes:pNomes.map(function(s){return s.trim();}),
    sNomes:sNomes.map(function(s){return s.trim();}),
    graus:graus,
    classificacao:{fav:graus[0]?graus[0].nome:'Trivial',int:graus.length>1?graus[1].nome:'Tolerável',ris:graus[graus.length-1]?graus[graus.length-1].nome:'Intolerável'},
    prazos:{0:'Monitoramento',1:'Monitoramento',2:'180 dias',3:'90 dias',4:'30 dias',5:'Imediato'},
    refMetodologica:refMet||'Metodologia definida pelo PGR',
    refNormativa:refNorm||'NR-01 | NR-17',
    descMetodo:descMetodo||'Metodologia conforme PGR da organização.'
  };
  if(usaEst) perfil.usaEstimativa=true;
  perfil[matrizKey]=matriz;

  var id=editId||('custom_'+Date.now());
  PGR_PERFIS_CUSTOM[id]=perfil;
  salvarPerfisCustom();
  fecharEditorPerfil();
  aep.perfilPGR=id;
  salvarAEP();
  renderAEP();
  showMsg('Perfil "'+nome+'" salvo com sucesso!');
}


// ── Hash SHA-256 para senhas (nunca salvar senha em texto puro) ──
async function _hashSenha(senha){
  var enc=new TextEncoder();
  var buf=await crypto.subtle.digest('SHA-256',enc.encode(senha));
  return Array.from(new Uint8Array(buf)).map(function(b){return b.toString(16).padStart(2,'0');}).join('');
}

// ════════════════════════════════════════════════════════════════
// MAPEAMENTO DE QUESTÕES COPSOQ II
// ════════════════════════════════════════════════════════════════
const Q=[
  {n:1,dom:"Exigências Laborais",dim:"Exigências quantitativas",inv:false},
  {n:2,dom:"Exigências Laborais",dim:"Exigências quantitativas",inv:false},
  {n:3,dom:"Exigências Laborais",dim:"Ritmo de trabalho",inv:false},
  {n:4,dom:"Exigências Laborais",dim:"Exigências Cognitivas",inv:false},
  {n:5,dom:"Exigências Laborais",dim:"Exigências Cognitivas",inv:false},
  {n:6,dom:"Exigências Laborais",dim:"Exigências emocionais",inv:false},
  {n:7,dom:"Organização do Trabalho e Conteúdo",dim:"Influência do Trabalho",inv:true},
  {n:8,dom:"Organização do Trabalho e Conteúdo",dim:"Possibilidade de Desenvolvimento",inv:true},
  {n:9,dom:"Organização do Trabalho e Conteúdo",dim:"Possibilidade de Desenvolvimento",inv:true},
  {n:10,dom:"Relações Sociais e Liderança",dim:"Previsibilidade",inv:true},
  {n:11,dom:"Relações Sociais e Liderança",dim:"Previsibilidade",inv:true},
  {n:12,dom:"Relações Sociais e Liderança",dim:"Transparência do Papel Laboral",inv:true},
  {n:13,dom:"Relações Sociais e Liderança",dim:"Reconhecimento",inv:true},
  {n:14,dom:"Relações Sociais e Liderança",dim:"Reconhecimento",inv:true},
  {n:15,dom:"Relações Sociais e Liderança",dim:"Suporte social de superiores",inv:true},
  {n:16,dom:"Valores no Local de Trabalho",dim:"Sentido de pertença à comunidade",inv:true},
  {n:17,dom:"Relações Sociais e Liderança",dim:"Qualidade da liderança",inv:true},
  {n:18,dom:"Relações Sociais e Liderança",dim:"Qualidade da liderança",inv:true},
  {n:19,dom:"Valores no Local de Trabalho",dim:"Confiança Vertical",inv:true},
  {n:20,dom:"Valores no Local de Trabalho",dim:"Confiança Vertical",inv:true},
  {n:21,dom:"Valores no Local de Trabalho",dim:"Justiça Organizacional",inv:true},
  {n:22,dom:"Valores no Local de Trabalho",dim:"Justiça Organizacional",inv:true},
  {n:23,dom:"Personalidade",dim:"Autoeficácia",inv:true},
  {n:24,dom:"Organização do Trabalho e Conteúdo",dim:"Significado do Trabalho",inv:true},
  {n:25,dom:"Organização do Trabalho e Conteúdo",dim:"Significado do Trabalho",inv:true},
  {n:26,dom:"Organização do Trabalho e Conteúdo",dim:"Compromisso face ao Local de Trabalho",inv:true},
  {n:27,dom:"Interface Trabalho-Indivíduo",dim:"Satisfação com o trabalho",inv:true},
  {n:28,dom:"Interface Trabalho-Indivíduo",dim:"Insegurança",inv:false},
  {n:29,dom:"Saúde e Bem-Estar",dim:"Auto Avaliação da Saúde",inv:true},
  {n:30,dom:"Interface Trabalho-Indivíduo",dim:"Conflito Trabalho-Família",inv:false},
  {n:31,dom:"Interface Trabalho-Indivíduo",dim:"Conflito Trabalho-Família",inv:false},
  {n:32,dom:"Saúde e Bem-Estar",dim:"Problema de sono",inv:false},
  {n:33,dom:"Saúde e Bem-Estar",dim:"Burnout",inv:false},
  {n:34,dom:"Saúde e Bem-Estar",dim:"Burnout",inv:false},
  {n:35,dom:"Saúde e Bem-Estar",dim:"Stress",inv:false},
  {n:36,dom:"Saúde e Bem-Estar",dim:"Stress",inv:false},
  {n:37,dom:"Saúde e Bem-Estar",dim:"Sintomas Depressivos",inv:false},
  {n:38,dom:"Comportamento Ofensivo",dim:"Comportamento Ofensivo",inv:false},
  {n:39,dom:"Comportamento Ofensivo",dim:"Comportamento Ofensivo",inv:false},
  {n:40,dom:"Comportamento Ofensivo",dim:"Comportamento Ofensivo",inv:false},
  {n:41,dom:"Comportamento Ofensivo",dim:"Comportamento Ofensivo",inv:false},
];
const DOMS=["Exigências Laborais","Organização do Trabalho e Conteúdo","Relações Sociais e Liderança","Valores no Local de Trabalho","Personalidade","Interface Trabalho-Indivíduo","Saúde e Bem-Estar","Comportamento Ofensivo"];
const FATORES_RISCO={
  "Exigências Laborais":"Sobrecarga de trabalho / Ritmo excessivo / Pressão por metas / Exigências emocionais",
  "Organização do Trabalho e Conteúdo":"Baixa autonomia / Monotonia / Subutilização de competências / Falta de significado no trabalho",
  "Relações Sociais e Liderança":"Déficit de apoio da chefia / Conflitos interpessoais / Liderança inadequada / Falta de feedback",
  "Valores no Local de Trabalho":"Insegurança no emprego / Falta de reconhecimento / Conflito ético / Injustiça organizacional",
  "Personalidade":"Dificuldade de adaptação / Autoexigência excessiva / Vulnerabilidade individual ao estresse",
  "Interface Trabalho-Indivíduo":"Conflito trabalho-família / Imprevisibilidade de horários / Jornadas extensas / Falta de conciliação",
  "Saúde e Bem-Estar":"Sintomas de estresse / Esgotamento profissional (burnout) / Distúrbios do sono / Absenteísmo",
  "Comportamento Ofensivo":"Assédio moral / Intimidação / Violência psicológica / Discriminação"
};
const INDICADORES_RESULTADO={
  "Exigências Laborais":"Redução do percentual de horas extras não programadas; cumprimento do prazo mínimo de comunicação de escala em 100% dos casos; redução do score médio de Exigências Laborais na reaplicação do COPSOQ II.",
  "Organização do Trabalho e Conteúdo":"Implantação de rodízio de tarefas documentado; revisão das descrições de cargo com participação dos trabalhadores; melhora no score médio na reaplicação do COPSOQ II.",
  "Relações Sociais e Liderança":"Número de lideranças capacitadas em CNV e gestão de pessoas; implantação de reuniões setoriais periódicas documentadas com ata; melhora no score médio de Relações Sociais e Liderança na reaplicação do COPSOQ II.",
  "Valores no Local de Trabalho":"Implantação de programa formal de reconhecimento; pesquisa de percepção de justiça organizacional; melhora no score médio na reaplicação do COPSOQ II.",
  "Interface Trabalho-Indivíduo":"Implantação formal da política de gestão de escala com registro; percentual de setores com critérios objetivos de banco de horas formalizados; redução do score médio de Interface Trabalho-Indivíduo na reaplicação.",
  "Saúde e Bem-Estar":"Percentual de trabalhadores com acesso ao apoio psicológico implantado; taxa de adesão ao serviço; monitoramento trimestral de absenteísmo por transtorno mental junto ao PCMSO.",
  "Comportamento Ofensivo":"Percentual de setores com percepção positiva do canal de denúncias na reaplicação do COPSOQ II; número de comunicados coletivos emitidos sobre funcionamento do canal.",
  "Personalidade":"Acompanhamento individual quando indicado pelo PCMSO; não gera ação coletiva específica."
};
const CL_TXT={fav:"Situação Favorável",int:"Situação Intermediária",ris:"Risco para Saúde"};
const CL_COR={fav:"#22c55e",int:"#f59e0b",ris:"#ef4444"};

// ── Helpers ──────────────────────────────────────────────────────
function extrairNum(s){if(!s&&s!==0)return null;const m=String(s).trim().match(/^(\d)/);if(m){const v=parseInt(m[1]);return v>=1&&v<=5?v:null;}return null;}
function toScore(i,r){const v=extrairNum(r);if(v===null)return null;return Q[i].inv?6-v:v;}
function avg(a){return a.length?a.reduce((x,y)=>x+y,0)/a.length:null;}
const fmt=v=>(v!==null&&!isNaN(v))?v.toFixed(2):"—";
function classif(m){if(m===null||isNaN(m)||m===undefined)return null;if(m<=2.33)return"fav";if(m<=3.66)return"int";return"ris";}
const corNum=m=>!m||isNaN(m)?"#aaa":m<=2.33?"#16a34a":m<=3.66?"#d97706":"#dc2626";
const clTxt=cl=>cl===null?"—":cl==="fav"?"✅ Favorável":cl==="int"?"⚠️ Intermediário":"🔴 Risco";
const nRisco=(p,s,cv)=>{const n=p*s/cv;if(n<=1)return"🟢 Trivial";if(n<=2)return"🟡 Tolerável";if(n<=4)return"🟠 Moderado";if(n<=7)return"🔴 Substancial";return"🚨 Intolerável";}
const pAuto=m=>{if(!m||isNaN(m))return[1,1,1];if(m<=2.33)return[1,1,2];if(m<=3.66)return[2,2,1];return[3,3,1];}
function prazoAuto(p,s,c){
  var pf=getPGR();
  if(pf){
    var r=calcRiscoPGR(p,s,c);
    if(!r) return "Monitoramento";
    var idx=-1;
    for(var i=0;i<pf.graus.length;i++){if(pf.graus[i].nome===r.nivel){idx=i;break;}}
    if(idx<=1) return "Monitoramento";
    if(idx===2) return "180 dias";
    if(idx===3) return "90 dias";
    return "Imediato";
  }
  var n=p*s/(c||1);if(n<=1)return"Monitoramento";if(n<=2)return"180 dias";if(n<=4)return"90 dias";if(n<=8)return"30 dias";return"IMEDIATO";
}

function parseCSV(text){
  const sep=text.split(/\r?\n/)[0].split(";").length>text.split(/\r?\n/)[0].split(",").length?";":","
  function pr(row){const c=[];let cur="",q=false;for(let i=0;i<row.length;i++){const ch=row[i];if(ch==='"'){q=!q;}else if(ch===sep&&!q){c.push(cur.replace(/^"|"$/g,"").trim());cur="";}else cur+=ch;}c.push(cur.replace(/^"|"$/g,"").trim());return c;}
  
  // Detectar formato pelo cabeçalho ou primeira linha de dados
  // Formato completo: timestamp, setor, funcao, sexo, turno, q1..q41, comentario
  // Formato simplificado (Google Forms sem funcao/turno): timestamp, setor, sexo, q1..q41, comentario
  const allLines=text.split(/\r?\n/).map(x=>x.trim()).filter(x=>x);
  let isSexoNaCol2=false;
  for(const l of allLines){
    const c=pr(l);
    if(!/^[\d\/]/.test(c[0]||"")) continue; // pular cabeçalho
    const col2=(c[2]||'').toLowerCase();
    isSexoNaCol2=(col2==='masculino'||col2==='feminino'||col2==='outro'||col2.includes('prefiro')||col2==='male'||col2==='female');
    break;
  }
  
  const out=[];
  for(const l of allLines){
    const c=pr(l);
    if(!/^[\d\/]/.test(c[0]||""))continue;
    if(c.length<20)continue;
    let setor,funcao,sexo,turno,comentario,r;
    if(isSexoNaCol2){
      // Formato simplificado: sem funcao e turno
      setor=(c[1]||"Não informado").trim();
      funcao="";
      sexo=(c[2]||"").trim();
      turno="";
      r=Array.from({length:41},(_,q)=>extrairNum(c[3+q]||""));
      comentario=(c[44]||"").trim();
    } else {
      // Formato completo
      setor=(c[1]||"Não informado").trim();
      funcao=(c[2]||"").trim();
      sexo=(c[3]||"").trim();
      turno=(c[4]||"").trim();
      r=Array.from({length:41},(_,q)=>extrairNum(c[5+q]||""));
      comentario=(c[46]||"").trim();
    }
    if(r.filter(v=>v!==null).length<5)continue;
    out.push({setor:setor,funcao:funcao,sexo:sexo,turno:turno,respostas:r,comentario:comentario});
  }
  return out;
}

function calcMedias(linhas){
  const ds={},dd={};
  Q.forEach(q=>ds[q.dim]=[]);DOMS.forEach(d=>dd[d]=[]);
  (linhas||[]).forEach(l=>{if(!l?.respostas)return;Q.forEach((q,i)=>{const s=toScore(i,l.respostas[i]);if(s!==null){ds[q.dim].push(s);dd[q.dom].push(s);}});});
  const mDim={},mDom={};
  Object.keys(ds).forEach(k=>mDim[k]=avg(ds[k]));DOMS.forEach(k=>mDom[k]=avg(dd[k]));
  return{mDim,mDom};
}

// Calcula média de um domínio para uma linha individual
function mediaDom(linha, dominio){
  if(!linha||!linha.respostas) return 0;
  var vals=[];
  Q.forEach(function(q,i){
    if(q.dom===dominio){
      var s=toScore(i,linha.respostas[i]);
      if(s!==null) vals.push(s);
    }
  });
  return vals.length?vals.reduce(function(a,b){return a+b;},0)/vals.length:0;
}

// ════════════════════════════════════════════════════════════════
// ESTADO GLOBAL
// ════════════════════════════════════════════════════════════════
let dados=[],tabAtual="dashboard",filtroSetor="Todos",modalSetor=null,copiado=false,msgData=null,msgTimer=null;
let clienteAtual=null;

// Estado da AEP (campos editáveis + calculados)
// Função que retorna um AEP completamente limpo (sem dados de nenhum cliente)
function _aepLimpo(nomeEmpresa){
  return {ghe:{},perfilPGR:"",logoSrc:"",logoPos:"capa",logoTam:"medio",logoTamHdr:"medio",
    doc_numero:"",doc_versao:"01",doc_revisao:"",doc_prox_revisao:"",
    cnae:"",grau_risco:"",total_trab:0,
    escopo:"Avaliação dos Fatores de Risco Psicossociais — todos os setores/GHEs.",
    metodologia:"COPSOQ II validado para o Brasil. Escala 1,00–5,00.",
    criterio_sev:"1=Leve | 2=Menor | 3=Moderada | 4=Maior | 5=Morte ou incapacidade total",
    criterio_prob:"1=Muito Improvável | 2=Pouco Provável | 3=Possível | 4=Provável | 5=Muito Provável",
    criterio_rpn:"",
    criterio_tolerancia:"Risco tolerável quando atendidos todos os requisitos NR-1/NR-17.",
    empresa:nomeEmpresa||"", cnpj:"", endereco:"", responsavel:"", crea:"", data:new Date().toLocaleDateString("pt-BR"),
    pgr:"", pcmso:"", setor_avaliado:"Toda a organização",
    matriz: DOMS.map(function(){return{p:1,c:1,acoes:"",responsavel:"",prazo:"",status:"Pendente",evidencia:""};}),
    hier: DOMS.map(function(){return{elim:"Não aplicável",subst:"Verificar",eng:"",adm:"",ind:""};}),
    conclusao:"", recomendacoes:"", base_legal:"NR-01 (Port. MTE 1.419/2024) | NR-17 | ISO 45003:2021 | LDRT – Port. GM/MS 5.674/2024",
  };
}
let aep=_aepLimpo();

function novoCliente(){
  var nome=prompt("Nome do cliente:");if(!nome||!nome.trim())return;
  var id="cli_"+Date.now(),clis=carregarClientes();
  var novo={id:id,nome:nome.trim(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),aep:null,dados:[]};
  clis.push(novo);
  salvarClientes(clis);
  _salvarFirestore(novo);
  showMsg("Cliente '"+nome.trim()+"' criado e sincronizado!");tabAtual="clientes";render();
}
function ativarCliente(id){
  if(clienteAtual) salvarAEP();
  showMsg("⏳ Carregando...");
  carregarClienteCompleto(id,function(cli){
    if(!cli){showMsg("Cliente não encontrado.",false);return;}
    clienteAtual=id;
    // RESET COMPLETO: sempre começa com AEP limpa, depois sobrescreve com dados do cliente
    if(cli.aep) aep=Object.assign(_aepLimpo(),cli.aep);
    else aep=_aepLimpo(cli.nome||"");
    if(cli.dados&&cli.dados.length){dados=cli.dados;filtroSetor="Todos";}
    else{dados=[];filtroSetor="Todos";}
    window._cargosCliente=cli.cargos||null;
    // v4: NÃO salvar no localStorage — dados ficam no Firestore
    showMsg("Cliente '"+(cli.nome||"")+"' carregado!");
    tabAtual="aep"; render();
  });
}
function excluirCliente(id){
  if(!confirm("Excluir cliente? Esta ação será sincronizada com todos os computadores."))return;
  if(clienteAtual===id){clienteAtual=null;aep=_aepLimpo();dados=[];window._cargosCliente=null;}

  // 1. Atualizar lista local imediatamente
  var clis=carregarClientes().filter(function(x){return x.id!==id;});
  salvarClientes(clis);

  // 2. Deletar do Firestore: arp_clientes + arp_logos + índice
  if(window._FB&&window._FB.db){
    var promessas=[];
    // Deletar documento completo da coleção arp_clientes
    promessas.push(window._FB.db.collection('arp_clientes').doc(id).delete().catch(function(){}));
    // Deletar logo separada
    promessas.push(window._FB.db.collection('arp_logos').doc(id).delete().catch(function(){}));
    // Atualizar índice geral
    promessas.push(window._FB.db.collection("empresa").doc("clientes").set({
      data:JSON.stringify(clis.map(_meta)),
      updatedAt:new Date().toISOString()
    }).catch(function(){}));
    Promise.all(promessas).then(function(){
      showMsg("✅ Cliente excluído de todos os computadores!");
    }).catch(function(e){
      showMsg("Excluído localmente. Erro ao sincronizar: "+e.message,false);
    });
  }
  render();
}
function exportarClienteJSON(id){
  var cli=carregarClientes().find(x=>x.id===id);if(!cli)return;
  var a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob([JSON.stringify(cli,null,2)],{type:"application/json"}));
  a.download="cliente_"+cli.nome.replace(/[^a-z0-9]/gi,"_")+".json";a.click();
}
function importarClienteJSON(){
  var inp=document.createElement("input");inp.type="file";inp.accept=".json";
  inp.onchange=function(e){
    var r=new FileReader();
    r.onload=function(ev){
      try{
        var cli=JSON.parse(ev.target.result);if(!cli.id||!cli.nome)throw new Error("inválido");
        var clis=carregarClientes(),i=clis.findIndex(x=>x.id===cli.id);
        if(i>=0){if(!confirm("Sobrescrever '"+cli.nome+"'?"))return;clis[i]=cli;}else clis.push(cli);
        salvarClientes(clis);showMsg("Cliente '"+cli.nome+"' importado!");render();
      }catch(er){showMsg("Arquivo inválido",false);}
    };r.readAsText(e.target.files[0]);
  };inp.click();
}

// Retorna cargos do cliente ativo (sem fallback para DB_CARGOS do LABO)
function _getCargosSetor(setor){
  var base=window._cargosCliente||{};
  var key=Object.keys(base).find(function(k){return k.toUpperCase()===setor.toUpperCase();})||'';
  return key?base[key]:[];
}
function _getAllCargos(){
  var base=window._cargosCliente||{};
  var all=[];
  Object.values(base).forEach(function(lista){lista.forEach(function(dc){all.push(dc);});});
  return all;
}

function salvarClienteManual(){
  if(clienteAtual){
    var clis=carregarClientes();
    var ci=clis.findIndex(function(x){return x.id===clienteAtual;});
    var cli=ci>=0?clis[ci]:null;
    if(cli){
      cli.aep=JSON.parse(JSON.stringify(aep));
      cli.dados=dados.slice();
      if(window._cargosCliente) cli.cargos=window._cargosCliente;
      cli.updatedAt=new Date().toISOString();
      clis[ci]=cli;
    } else {
      cli={id:clienteAtual,nome:aep.empresa||clienteAtual,
           aep:JSON.parse(JSON.stringify(aep)),dados:dados.slice(),
           cargos:window._cargosCliente||null,
           createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};
      clis.push(cli);
    }
    salvarClientes(clis);         // atualiza localStorage leve + cache
    _salvarFirestore(cli);        // salva dados completos no Firestore
    showMsg("✅ Cliente '"+(cli.nome||"")+"' salvo!");
  } else {
    salvarAEP();
    showMsg("AEP salva! Use Clientes para organizar por empresa.");
  }
}

function renderPainel(){
  if(!window._FB||!window._FB.db){
    return '<div class="card" style="text-align:center;padding:40px;color:#94a3b8">'+
      '<p style="font-size:15px;margin-bottom:8px">🔒 Firebase necessário</p>'+
      '<p style="font-size:12px">Faça login com Google para acessar o painel.</p></div>';
  }
  var html='<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">'+
    '<h3 style="margin:0;color:#7d2020;font-size:15px;font-weight:700">📡 Painel de Acompanhamento</h3>'+
    '<button onclick="atualizarPainel()" style="background:#7d2020;color:white;border:none;padding:8px 16px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer">🔄 Atualizar</button>'+
    '</div>'+
    '<div id="painel-content"><div style="text-align:center;padding:40px;color:#94a3b8">⏳ Carregando dados dos portais...</div></div>'+
    '</div>'+
    '<div class="card" style="margin-top:16px">'+
      '<div style="margin-bottom:14px"><h3 style="margin:0;color:#7d2020;font-size:15px;font-weight:700">🔐 Usuários Autorizados</h3>'+
      '<p style="font-size:11px;color:#94a3b8;margin-top:4px">Apenas estes e-mails podem acessar o sistema.</p></div>'+
      renderUsuariosAutorizados()+
    '</div>';
  // Carregar dados assincronamente
  setTimeout(function(){atualizarPainel();},100);
  return html;
}

function atualizarPainel(){
  if(!window._FB||!window._FB.db)return;
  var container=document.getElementById('painel-content');
  if(!container)return;
  container.innerHTML='<div style="text-align:center;padding:20px;color:#94a3b8">⏳ Carregando...</div>';

  window._FB.db.collection('portais').get().then(function(snap){
    if(snap.empty){
      container.innerHTML='<p style="text-align:center;color:#94a3b8;padding:20px">Nenhum portal publicado ainda.</p>';
      return;
    }
    var promessas=snap.docs.map(function(doc){
      return doc.ref.collection('plano_acao').get().then(function(acoesSnap){
        return {id:doc.id, dados:doc.data(), acoes:acoesSnap.docs.map(function(d){return Object.assign({id:d.id},d.data());})};
      });
    });
    return Promise.all(promessas);
  }).then(function(portais){
    if(!portais){return;}
    var agora=new Date();
    var html='<table style="width:100%;border-collapse:collapse;font-size:12px">'+
      '<thead><tr style="background:#7d2020;color:white">'+
      '<th style="padding:8px;text-align:left">Cliente</th>'+
      '<th style="padding:8px;text-align:center">Progresso</th>'+
      '<th style="padding:8px;text-align:center">✅ Concl.</th>'+
      '<th style="padding:8px;text-align:center">🔄 Andamento</th>'+
      '<th style="padding:8px;text-align:center">⚠️ Atrasadas</th>'+
      '<th style="padding:8px;text-align:center">❌ Cancel.</th>'+
      '<th style="padding:8px;text-align:left">Última atualiz.</th>'+
      '<th style="padding:8px;text-align:center">Ações</th>'+
      '</tr></thead><tbody>';

    portais.forEach(function(p){
      var acoes=p.acoes||[];
      var total=acoes.length;
      var concl=acoes.filter(function(a){return a.status_atual==='Concluído';}).length;
      var andamento=acoes.filter(function(a){return a.status_atual==='Em andamento';}).length;
      var cancel=acoes.filter(function(a){return a.status_atual==='Cancelado';}).length;
      var atrasadas=acoes.filter(function(a){
        if(!a.prazo||a.status_atual==='Concluído'||a.status_atual==='Cancelado')return false;
        var parts=a.prazo.split('/');
        if(parts.length<3)return false;
        var prazo=new Date(parts[2]+'-'+parts[1]+'-'+parts[0]);
        return prazo < agora;
      }).length;
      var perc=total?Math.round(concl/total*100):0;
      var link='https://arp-mendes-silva.web.app/portal.html?t='+(p.dados.token||'');
      var ultima=acoes.reduce(function(max,a){return a.updatedAt>max?a.updatedAt:max;},'');
      var ultimaFmt=ultima?new Date(ultima).toLocaleDateString('pt-BR'):'—';
      var bloqueado=p.dados.bloqueado?'🔒':' ';
      var bgRow=atrasadas>0?'#fff8f8':'';

      html+='<tr style="border-bottom:1px solid #f1f5f9;background:'+bgRow+'">'+
        '<td style="padding:8px;font-weight:600">'+bloqueado+' '+(p.dados.nome||p.id)+'</td>'+
        '<td style="padding:8px;text-align:center">'+
          '<div style="background:#e2e8f0;border-radius:10px;height:8px;width:80px;margin:0 auto">'+
          '<div style="background:#22c55e;border-radius:10px;height:8px;width:'+perc+'%"></div></div>'+
          '<span style="font-size:10px;color:#64748b">'+perc+'%</span>'+
        '</td>'+
        '<td style="padding:8px;text-align:center;color:#22c55e;font-weight:700">'+concl+'/'+total+'</td>'+
        '<td style="padding:8px;text-align:center;color:#f59e0b;font-weight:700">'+andamento+'</td>'+
        '<td style="padding:8px;text-align:center;color:#ef4444;font-weight:700">'+atrasadas+'</td>'+
        '<td style="padding:8px;text-align:center;color:#94a3b8">'+cancel+'</td>'+
        '<td style="padding:8px;color:#64748b">'+ultimaFmt+'</td>'+
        '<td style="padding:8px;text-align:center">'+
          '<button onclick="window.open(\''+link+'\',\'_blank\')" style="background:#0f6e56;color:white;border:none;padding:4px 10px;border-radius:6px;font-size:11px;cursor:pointer;margin-right:4px">🔗 Ver</button>'+
          '<button data-cid="'+p.id+'" data-bloq="'+(p.dados.bloqueado?'1':'0')+'" onclick="bloquearPortalBtn(this)" style="background:#64748b;color:white;border:none;padding:4px 10px;border-radius:6px;font-size:11px;cursor:pointer">'+
          (p.dados.bloqueado?'🔓 Desbloquear':'🔒 Bloquear')+'</button>'+
          '<button data-cid="'+p.id+'" onclick="excluirPortalBtn(this)" style="background:#991b1b;color:white;border:none;padding:4px 10px;border-radius:6px;font-size:11px;cursor:pointer;margin-left:4px">🗑️ Excluir</button>'+
        '</td>'+
        '</tr>';

      // Ações críticas — expandir detalhes se hover
      if(atrasadas>0||cancel>0){
        html+='<tr style="background:#fef9c3;border-bottom:1px solid #fde047"><td colspan="8" style="padding:6px 8px;font-size:11px;color:#854d0e">';
        acoes.filter(function(a){
          var atrasada=false;
          if(a.prazo&&a.status_atual!=='Concluído'&&a.status_atual!=='Cancelado'){
            var parts=a.prazo.split('/');
            if(parts.length===3){var prazo=new Date(parts[2]+'-'+parts[1]+'-'+parts[0]);atrasada=prazo<agora;}
          }
          return atrasada||a.status_atual==='Cancelado';
        }).forEach(function(a){
          var isAtrasada=a.status_atual!=='Cancelado';
          html+='<span style="margin-right:12px">'+(isAtrasada?'⚠️ Atrasada':'❌ Cancelada')+': <strong>'+a.dominio+'</strong>';
          if(a.comentario_atual) html+=' — '+a.comentario_atual.substring(0,60);
          html+='</span>';
        });
        html+='</td></tr>';
      }
    });

    html+='</tbody></table>';
    container.innerHTML=html;
  }).catch(function(e){
    if(e.message&&e.message.includes('permissions')){
      container.innerHTML='<div style="padding:20px;background:#fef9c3;border-radius:8px;border:1px solid #fde047">'+
        '<p style="font-weight:700;color:#854d0e;margin-bottom:8px">⚠️ Permissão necessária no Firebase</p>'+
        '<p style="font-size:12px;color:#854d0e;margin-bottom:12px">As regras do Firestore precisam incluir a coleção <code>portais</code>.</p>'+
        '<p style="font-size:12px;color:#475569">Acesse o <a href="https://console.firebase.google.com/project/arp-mendes-silva/firestore/rules" target="_blank" style="color:#7d2020;font-weight:700">Firebase Console → Firestore → Regras</a> e adicione:</p>'+
        '<pre style="background:#f1f5f9;padding:10px;border-radius:6px;font-size:11px;margin-top:8px">match /portais/{document=**} {\n  allow read, write: if request.auth != null;\n}</pre>'+
        '<p style="font-size:11px;color:#94a3b8;margin-top:8px">O cliente acessa sem login — o portal.html usa regras públicas separadas.</p>'+
      '</div>';
    } else {
      container.innerHTML='<p style="color:#ef4444;padding:20px">Erro: '+e.message+'</p>';
    }
  });
}

function bloquearPortal(clienteId, bloquear){
  if(!window._FB||!window._FB.db)return;
  window._FB.db.collection('portais').doc(clienteId).update({bloqueado:bloquear})
  .then(function(){showMsg(bloquear?'Portal bloqueado!':'Portal desbloqueado!');atualizarPainel();})
  .catch(function(e){showMsg('Erro: '+e.message,false);});
}
function bloquearPortalBtn(el){
  var cid=el.dataset.cid;
  var bloquear=el.dataset.bloq!=='1';
  bloquearPortal(cid,bloquear);
}
function excluirPortalBtn(el){
  var cid=el.dataset.cid;
  if(!confirm('Tem certeza que deseja EXCLUIR este portal?\n\nO link do cliente deixará de funcionar e todos os dados do plano de ação serão apagados.\n\nEsta ação não pode ser desfeita.'))return;
  if(!window._FB||!window._FB.db)return;
  // Excluir ações da subcoleção
  window._FB.db.collection('portais').doc(cid).collection('plano_acao').get()
  .then(function(snap){
    var batch=window._FB.db.batch();
    snap.docs.forEach(function(d){batch.delete(d.ref);});
    return batch.commit();
  }).then(function(){
    return window._FB.db.collection('portais').doc(cid).delete();
  }).then(function(){
    // Remover portalToken e portalLink do cliente local
    var clis=carregarClientes();
    var cli=clis.find(function(x){return x.id===cid;});
    if(cli){delete cli.portalToken;delete cli.portalLink;salvarClientes(clis);}
    showMsg('Portal excluído com sucesso!');
    atualizarPainel();
  }).catch(function(e){showMsg('Erro ao excluir: '+e.message,false);});
}

function renderClientes(){
  window._ativar=id=>{ativarCliente(id);};
  window._portal=function(id){
    var clis=carregarClientes();
    var cli=clis.find(function(x){return x.id===id;});
    if(!cli){showMsg("Cliente não encontrado.",false);return;}
    if(clienteAtual===id) salvarClienteManual();
    clis=carregarClientes();
    cli=clis.find(function(x){return x.id===id;});
    if(!cli.aep||!cli.aep.empresa){showMsg("Preencha a empresa na AEP antes de gerar o portal.",false);return;}
    if(!cli.dados||!cli.dados.length){showMsg("Importe o CSV deste cliente antes de gerar o portal.",false);return;}
    var dadosCliente={id:cli.id,nome:cli.nome,aep:cli.aep||null,dados:cli.dados||[],cargos:cli.cargos||null};
    var dadosJson=JSON.stringify(dadosCliente);
    function b64dec(s){try{return decodeURIComponent(escape(atob(s)));}catch(e){return "";}}
    var portalCSS=b64dec("Cgoqe2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW46MDtwYWRkaW5nOjA7fQpib2R5e2ZvbnQtZmFtaWx5OidTZWdvZSBVSScsQXJpYWwsc2Fucy1zZXJpZjtiYWNrZ3JvdW5kOiNmMGY0Zjg7bWluLWhlaWdodDoxMDB2aDt9Ci5wb3J0YWwtaGVhZGVye2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywjN2QyMDIwLCM5ZTM1MzUpO2NvbG9yOndoaXRlO3BhZGRpbmc6MTZweCAyNHB4O2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7ZmxleC13cmFwOndyYXA7Z2FwOjEwcHg7cG9zaXRpb246c3RpY2t5O3RvcDowO3otaW5kZXg6MTAwO2JveC1zaGFkb3c6MCAycHggOHB4IHJnYmEoMCwwLDAsLjIpO30KLnBvcnRhbC1oZWFkZXIgaDF7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NzAwO30KLnBvcnRhbC1oZWFkZXIgcHtmb250LXNpemU6MTFweDtvcGFjaXR5Oi44O21hcmdpbi10b3A6MnB4O30KLnBvcnRhbC1hY3Rpb25ze2Rpc3BsYXk6ZmxleDtnYXA6OHB4O2FsaWduLWl0ZW1zOmNlbnRlcjtmbGV4LXdyYXA6d3JhcDt9Ci5idG4tcHJpbnR7YmFja2dyb3VuZDp3aGl0ZTtjb2xvcjojN2QyMDIwO2JvcmRlcjpub25lO3BhZGRpbmc6OHB4IDE2cHg7Ym9yZGVyLXJhZGl1czo4cHg7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NzAwO2N1cnNvcjpwb2ludGVyO30KLmJ0bi1wcmludDpob3ZlcntiYWNrZ3JvdW5kOiNmZGYyZjI7fQoucG9ydGFsLWJvZHl7bWF4LXdpZHRoOjEwMDBweDttYXJnaW46MCBhdXRvO3BhZGRpbmc6MjRweCAxNnB4O30KLyogU29icmVzY3JldmVyIC5hZXAtcGFnZSBwYXJhIG1vZG8gZWxldHLDtG5pY28gKi8KLmFlcC1wYWdlewogIHBhZ2UtYnJlYWstYWZ0ZXI6YXV0byFpbXBvcnRhbnQ7CiAgYmFja2dyb3VuZDp3aGl0ZTsKICBib3JkZXItcmFkaXVzOjEycHg7CiAgYm94LXNoYWRvdzowIDJweCAxMnB4IHJnYmEoMCwwLDAsLjA4KTsKICBtYXJnaW4tYm90dG9tOjI0cHg7CiAgcGFkZGluZzoyNHB4IDI4cHghaW1wb3J0YW50Owp9Ci5hZXAtY2FwYXttaW4taGVpZ2h0OmF1dG8haW1wb3J0YW50O3BhZGRpbmc6NDBweCAyMHB4IWltcG9ydGFudDt9Ci5wb3J0YWwtZW1wdHl7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzo2MHB4O2NvbG9yOiM5NGEzYjg7fQpAbWVkaWEgcHJpbnR7CiAgLnBvcnRhbC1oZWFkZXJ7ZGlzcGxheTpub25lIWltcG9ydGFudDt9CiAgLnBvcnRhbC1ib2R5e3BhZGRpbmc6MCFpbXBvcnRhbnQ7bWF4LXdpZHRoOjEwMCUhaW1wb3J0YW50O30KICAuYWVwLXBhZ2V7Ym94LXNoYWRvdzpub25lIWltcG9ydGFudDtib3JkZXItcmFkaXVzOjAhaW1wb3J0YW50O21hcmdpbi1ib3R0b206MCFpbXBvcnRhbnQ7cGFkZGluZzoxNG1tIDE1bW0gMTJtbSFpbXBvcnRhbnQ7cGFnZS1icmVhay1hZnRlcjphbHdheXMhaW1wb3J0YW50O30KICAuYWVwLXBhZ2U6bGFzdC1jaGlsZHtwYWdlLWJyZWFrLWFmdGVyOmF1dG8haW1wb3J0YW50O30KICBib2R5e2JhY2tncm91bmQ6d2hpdGUhaW1wb3J0YW50O30KICAqey13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0IWltcG9ydGFudDtwcmludC1jb2xvci1hZGp1c3Q6ZXhhY3QhaW1wb3J0YW50O30KICBAcGFnZXtzaXplOkE0O21hcmdpbjo3bW07fQp9Cgpmcm9te29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fQojcmVsYXRvcmlvLXBkZntkaXNwbGF5Om5vbmU7fQpAbWVkaWEobWF4LXdpZHRoOjcwMHB4KXsKICAuYWVwLWRvbS1yb3csLmFlcC1kb20taGVhZGVye2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgNjBweCA1MHB4IDUwcHggNTBweCA3MHB4IDEwMHB4IDgwcHg7Zm9udC1zaXplOjExcHg7fQogIC5hZXAtcGxhbm8tZ3JpZHtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO30KICAuYWVwLWdyaWQtMiwuYWVwLWdyaWQtM3tncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO30KfQpAbWVkaWEgcHJpbnR7CiAgYm9keT4qOm5vdCgjcmVsYXRvcmlvLXBkZil7ZGlzcGxheTpub25lIWltcG9ydGFudDt9CiAgI3JlbGF0b3Jpby1wZGZ7ZGlzcGxheTpibG9jayFpbXBvcnRhbnQ7fQogICp7LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6ZXhhY3QhaW1wb3J0YW50O3ByaW50LWNvbG9yLWFkanVzdDpleGFjdCFpbXBvcnRhbnQ7fQogICNyZWxhdG9yaW8tcGRme2ZvbnQtZmFtaWx5OidTZWdvZSBVSScsQXJpYWwsc2Fucy1zZXJpZjtmb250LXNpemU6MTBwdDtjb2xvcjojMTExO2JhY2tncm91bmQ6d2hpdGU7fQogIC5wLXBhZ2V7cGFnZS1icmVhay1hZnRlcjphbHdheXM7cGFkZGluZzoxNG1tIDEybW0gMTBtbTttaW4taGVpZ2h0OjEwMHZoO30KICAucC1wYWdlOmxhc3QtY2hpbGR7cGFnZS1icmVhay1hZnRlcjphdXRvO30KICAucC1oZWFkZXJ7YmFja2dyb3VuZDojN2QyMDIwO2NvbG9yOndoaXRlO3BhZGRpbmc6MTBweCAxNHB4O2JvcmRlci1yYWRpdXM6NXB4O21hcmdpbi1ib3R0b206MTRweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6ZmxleC1lbmQ7fQogIC5wLWhlYWRlciBoMXtmb250LXNpemU6MTNwdDtmb250LXdlaWdodDo4MDA7bWFyZ2luOjAgMCAycHg7fQogIC5wLWhlYWRlciBwe2ZvbnQtc2l6ZTo3LjVwdDtvcGFjaXR5Oi44NTttYXJnaW46MDt9CiAgLnAtbWV0YXt0ZXh0LWFsaWduOnJpZ2h0O2ZvbnQtc2l6ZTo3LjVwdDtvcGFjaXR5Oi44NTt9CiAgLnAtc2VjdGlvbnttYXJnaW4tYm90dG9tOjEycHg7fQogIC5wLXNlY3Rpb24tdGl0bGV7Zm9udC1zaXplOjlwdDtmb250LXdlaWdodDo3MDA7Y29sb3I6IzdkMjAyMDtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjN2QyMDIwO3BhZGRpbmctYm90dG9tOjJweDttYXJnaW4tYm90dG9tOjdweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6LjVweDt9CiAgLnAtdGFibGV7d2lkdGg6MTAwJTtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Zm9udC1zaXplOjhwdDttYXJnaW4tYm90dG9tOjhweDt9CiAgLnAtdGFibGUgdGh7YmFja2dyb3VuZDojN2QyMDIwO2NvbG9yOndoaXRlO3BhZGRpbmc6NHB4IDdweDt0ZXh0LWFsaWduOmxlZnQ7fQogIC5wLXRhYmxlIHRoLmMsLnAtdGFibGUgdGQuY3t0ZXh0LWFsaWduOmNlbnRlcjt9CiAgLnAtdGFibGUgdGR7cGFkZGluZzo0cHggN3B4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlMmU4ZjA7fQogIC5wLXRhYmxlIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kOiNmOGZhZmM7fQogIC5wLWJhZGdle3BhZGRpbmc6MnB4IDZweDtib3JkZXItcmFkaXVzOjIwcHg7Zm9udC1zaXplOjdwdDtmb250LXdlaWdodDo3MDA7Y29sb3I6d2hpdGU7ZGlzcGxheTppbmxpbmUtYmxvY2s7fQogIC5wLWZhdntiYWNrZ3JvdW5kOiMyMmM1NWU7fS5wLWludHtiYWNrZ3JvdW5kOiNmNTllMGI7fS5wLXJpc3tiYWNrZ3JvdW5kOiNlZjQ0NDQ7fQogIC5wLWRvbS1ncmlke2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDQsMWZyKTtnYXA6NnB4O21hcmdpbi1ib3R0b206MTBweDt9CiAgLnAtZG9tLWNhcmR7Ym9yZGVyLXJhZGl1czo0cHg7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlcjoxcHggc29saWQgI2UyZThmMDt9CiAgLnAtZG9tLWNhcmQtaGVhZHtwYWRkaW5nOjVweCA3cHg7Y29sb3I6d2hpdGU7fQogIC5wLWRvbS1sYWJlbHtmb250LXNpemU6NnB0O29wYWNpdHk6Ljk7bWFyZ2luLWJvdHRvbToxcHg7Zm9udC13ZWlnaHQ6NjAwO30KICAucC1kb20tYXZne2ZvbnQtc2l6ZToxMnB0O2ZvbnQtd2VpZ2h0OjgwMDtjb2xvcjp3aGl0ZTt9CiAgLnAtZG9tLWNhcmQtYm9keXtwYWRkaW5nOjNweCA3cHg7Zm9udC1zaXplOjYuNXB0O2NvbG9yOiM0NDQ7fQogIC5wLXNldG9yLWJsb2Nre21hcmdpbi1ib3R0b206MTBweDtib3JkZXI6MXB4IHNvbGlkICNlMmU4ZjA7Ym9yZGVyLXJhZGl1czo0cHg7b3ZlcmZsb3c6aGlkZGVuO30KICAucC1zZXRvci1oZWFke2JhY2tncm91bmQ6I2YxZjVmOTtwYWRkaW5nOjRweCA4cHg7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO30KICAucC1zZXRvci1oZWFkIGgze2ZvbnQtc2l6ZTo4cHQ7Y29sb3I6IzdkMjAyMDtmb250LXdlaWdodDo3MDA7bWFyZ2luOjA7fQogIC5wLXNldG9yLWhlYWQgc3Bhbntmb250LXNpemU6Ny41cHQ7Y29sb3I6Izg4ODt9CiAgLnAtY29tZW50YXJpb3twYWRkaW5nOjRweCA3cHg7Ym9yZGVyLWxlZnQ6M3B4IHNvbGlkICNjNGI1ZmQ7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjcuNXB0O2JhY2tncm91bmQ6I2ZhZjVmZjt9CiAgLnAtZm9vdGVye2ZvbnQtc2l6ZTo2LjVwdDtjb2xvcjojOTRhM2I4O2JvcmRlci10b3A6MXB4IHNvbGlkICNlMmU4ZjA7cGFkZGluZy10b3A6NXB4O21hcmdpbi10b3A6MTJweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47fQogIC50LWZhdntjb2xvcjojMTZhMzRhO2ZvbnQtd2VpZ2h0OjcwMDt9LnQtaW50e2NvbG9yOiNkOTc3MDY7Zm9udC13ZWlnaHQ6NzAwO30udC1yaXN7Y29sb3I6I2RjMjYyNjtmb250LXdlaWdodDo3MDA7fQogIEBwYWdle3NpemU6QTQ7bWFyZ2luOjdtbTt9Cn0KCgovKiDilIDilIAgQ1NTIEltcHJlc3PDo28gQUVQIChnZXJhckFFUHBkZikg4pSA4pSAICovCiNyZWxhdG9yaW8tcGRme2Rpc3BsYXk6bm9uZTt9Ci5hZXAtcGFnZXtwYWdlLWJyZWFrLWFmdGVyOmFsd2F5cztwYWRkaW5nOjE0bW0gMTVtbSAxMm1tO2ZvbnQtZmFtaWx5OidTZWdvZSBVSScsQXJpYWwsc2Fucy1zZXJpZjtmb250LXNpemU6OXB0O2NvbG9yOiMxMTE7YmFja2dyb3VuZDp3aGl0ZTstd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDpleGFjdDtwcmludC1jb2xvci1hZGp1c3Q6ZXhhY3Q7fQouYWVwLXBhZ2U6bGFzdC1jaGlsZHtwYWdlLWJyZWFrLWFmdGVyOmF1dG87fQouYWVwLWNhcGF7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttaW4taGVpZ2h0Ojkwdmg7dGV4dC1hbGlnbjpjZW50ZXI7fQouYWVwLWNhcGEtbG9nb3tiYWNrZ3JvdW5kOiM3ZDIwMjA7Y29sb3I6d2hpdGU7cGFkZGluZzoxOHB4IDMycHg7Ym9yZGVyLXJhZGl1czo4cHg7Zm9udC1zaXplOjIycHQ7Zm9udC13ZWlnaHQ6ODAwO2xldHRlci1zcGFjaW5nOjFweDttYXJnaW4tYm90dG9tOjIwcHg7LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6ZXhhY3Q7cHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O30KLmFlcC1jYXBhIGgxe2ZvbnQtc2l6ZToxN3B0O2NvbG9yOiM3ZDIwMjA7Zm9udC13ZWlnaHQ6ODAwO21hcmdpbi1ib3R0b206OHB4O30KLmFlcC1jYXBhIGgye2ZvbnQtc2l6ZToxMnB0O2NvbG9yOiM5ZTM1MzU7Zm9udC13ZWlnaHQ6NjAwO21hcmdpbi1ib3R0b206MzBweDt9Ci5hZXAtY2FwYS1ib3h7YmFja2dyb3VuZDojZjFmNWY5O2JvcmRlcjoxcHggc29saWQgI2NiZDVlMTtib3JkZXItcmFkaXVzOjhweDtwYWRkaW5nOjE2cHggMjRweDt0ZXh0LWFsaWduOmxlZnQ7bWluLXdpZHRoOjM4MHB4O21hcmdpbi1ib3R0b206MjBweDstd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDpleGFjdDtwcmludC1jb2xvci1hZGp1c3Q6ZXhhY3Q7fQouYWVwLWNhcGEtYm94IHB7Zm9udC1zaXplOjlwdDttYXJnaW46NHB4IDA7Y29sb3I6IzMzNDE1NTt9Ci5hZXAtY2FwYS1ib3ggc3Ryb25ne2NvbG9yOiM3ZDIwMjA7fQouYWVwLWNhcGEtZm9vdGVye2ZvbnQtc2l6ZTo3LjVwdDtjb2xvcjojOTRhM2I4O21hcmdpbi10b3A6YXV0bztib3JkZXItdG9wOjFweCBzb2xpZCAjZTJlOGYwO3BhZGRpbmctdG9wOjhweDt3aWR0aDoxMDAlO30KLmFlcC1waHtmb250LXNpemU6MTBwdDtmb250LXdlaWdodDo3MDA7Y29sb3I6IzdkMjAyMCFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzdkMjAyMDtwYWRkaW5nLWJvdHRvbToycHg7bWFyZ2luOjE0cHggMCA3cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOi41cHg7fQouYWVwLXBoMntmb250LXNpemU6OXB0O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojOWUzNTM1IWltcG9ydGFudDttYXJnaW46MTBweCAwIDRweDt9Ci5hZXAtdHh0e2ZvbnQtc2l6ZTo4LjVwdDtsaW5lLWhlaWdodDoxLjY7bWFyZ2luLWJvdHRvbTo2cHg7Y29sb3I6IzFlMjkzYjt9Ci5hZXAtdHh0LWJveHtiYWNrZ3JvdW5kOiNmOGZhZmM7Ym9yZGVyLWxlZnQ6NHB4IHNvbGlkICM3ZDIwMjA7cGFkZGluZzo3cHggMTBweDttYXJnaW46NnB4IDA7Zm9udC1zaXplOjhwdDtsaW5lLWhlaWdodDoxLjU7LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6ZXhhY3Q7cHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O30KLmFlcC10eHQtYm94IHN0cm9uZ3tmb250LXN0eWxlOm5vcm1hbDt9Ci5hZXAtdGFibGV7d2lkdGg6MTAwJTtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Zm9udC1zaXplOjhwdDttYXJnaW46OHB4IDA7fQouYWVwLXRhYmxlIHRoe2JhY2tncm91bmQ6IzdkMjAyMCFpbXBvcnRhbnQ7Y29sb3I6d2hpdGUhaW1wb3J0YW50O3BhZGRpbmc6NHB4IDhweDt0ZXh0LWFsaWduOmxlZnQ7LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6ZXhhY3Q7cHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O30KLmFlcC10YWJsZSB0ZHtwYWRkaW5nOjRweCA4cHg7Ym9yZGVyOjFweCBzb2xpZCAjZTJlOGYwO30KLmFlcC10YWJsZSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZDojZjhmYWZjOy13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O3ByaW50LWNvbG9yLWFkanVzdDpleGFjdDt9Ci5hZXAtYmFkZ2UtZ3tiYWNrZ3JvdW5kOiMyMmM1NWUhaW1wb3J0YW50O2NvbG9yOndoaXRlIWltcG9ydGFudDtwYWRkaW5nOjJweCA3cHg7Ym9yZGVyLXJhZGl1czoxMHB4O2ZvbnQtc2l6ZTo3cHQ7Zm9udC13ZWlnaHQ6NzAwOy13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O3ByaW50LWNvbG9yLWFkanVzdDpleGFjdDt9Ci5hZXAtYmFkZ2UtYXtiYWNrZ3JvdW5kOiNmNTllMGIhaW1wb3J0YW50O2NvbG9yOndoaXRlIWltcG9ydGFudDtwYWRkaW5nOjJweCA3cHg7Ym9yZGVyLXJhZGl1czoxMHB4O2ZvbnQtc2l6ZTo3cHQ7Zm9udC13ZWlnaHQ6NzAwOy13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O3ByaW50LWNvbG9yLWFkanVzdDpleGFjdDt9Ci5hZXAtYmFkZ2UtcntiYWNrZ3JvdW5kOiNlZjQ0NDQhaW1wb3J0YW50O2NvbG9yOndoaXRlIWltcG9ydGFudDtwYWRkaW5nOjJweCA3cHg7Ym9yZGVyLXJhZGl1czoxMHB4O2ZvbnQtc2l6ZTo3cHQ7Zm9udC13ZWlnaHQ6NzAwOy13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O3ByaW50LWNvbG9yLWFkanVzdDpleGFjdDt9Ci5hZXAtc2V0b3ItaGRye2JhY2tncm91bmQ6IzdkMjAyMCFpbXBvcnRhbnQ7Y29sb3I6d2hpdGUhaW1wb3J0YW50O3BhZGRpbmc6NnB4IDEwcHg7Ym9yZGVyLXJhZGl1czo0cHggNHB4IDAgMDtmb250LXNpemU6OXB0O2ZvbnQtd2VpZ2h0OjcwMDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O3ByaW50LWNvbG9yLWFkanVzdDpleGFjdDt9Ci5hZXAtc2V0b3ItYm9keXtib3JkZXI6MXB4IHNvbGlkICM3ZDIwMjA7Ym9yZGVyLXRvcDpub25lO2JvcmRlci1yYWRpdXM6MCAwIDRweCA0cHg7cGFkZGluZzo4cHggMTBweDttYXJnaW4tYm90dG9tOjEwcHg7fQouYWVwLWdoZS1ncmlke2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmciAxZnIgOTBweDtnYXA6NnB4O21hcmdpbi1ib3R0b206OHB4O30KLmFlcC1naGUtY2VsbHtmb250LXNpemU6Ny41cHQ7fQouYWVwLWdoZS1sYWJlbHtjb2xvcjojNjQ3NDhiO2ZvbnQtc2l6ZTo2LjVwdDtmb250LXdlaWdodDo3MDA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO30KLmFlcC1naGUtdmFse2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjojMWUyOTNiO30KLmFlcC1uci1mYXZ7YmFja2dyb3VuZDojZGNmY2U3IWltcG9ydGFudDtjb2xvcjojMTY2NTM0IWltcG9ydGFudDtmb250LXdlaWdodDo3MDA7LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6ZXhhY3Q7cHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O30KLmFlcC1uci1pbnR7YmFja2dyb3VuZDojZmVmOWMzIWltcG9ydGFudDtjb2xvcjojODU0ZDBlIWltcG9ydGFudDtmb250LXdlaWdodDo3MDA7LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6ZXhhY3Q7cHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O30KLmFlcC1uci1yaXN7YmFja2dyb3VuZDojZmVlMmUyIWltcG9ydGFudDtjb2xvcjojOTkxYjFiIWltcG9ydGFudDtmb250LXdlaWdodDo3MDA7LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6ZXhhY3Q7cHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O30KLmFlcC1uci10e2JhY2tncm91bmQ6I2RjZmNlNyFpbXBvcnRhbnQ7LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6ZXhhY3Q7cHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O30KLmFlcC1uci1ie2JhY2tncm91bmQ6I2QxZmFlNSFpbXBvcnRhbnQ7LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6ZXhhY3Q7cHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O30KLmFlcC1uci1te2JhY2tncm91bmQ6I2ZlZjljMyFpbXBvcnRhbnQ7LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6ZXhhY3Q7cHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O30KLmFlcC1uci1he2JhY2tncm91bmQ6I2ZlZTJlMiFpbXBvcnRhbnQ7LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6ZXhhY3Q7cHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O30KLmFlcC1uci1je2JhY2tncm91bmQ6I2ZmYjNiMyFpbXBvcnRhbnQ7LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6ZXhhY3Q7cHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O30KLmFlcC1oaWVyLWJsa3ttYXJnaW4tYm90dG9tOjhweDtib3JkZXI6MXB4IHNvbGlkICNlMmU4ZjA7Ym9yZGVyLXJhZGl1czo0cHg7b3ZlcmZsb3c6aGlkZGVuO3BhZ2UtYnJlYWstaW5zaWRlOmF2b2lkO30KLmFlcC1oaWVyLWhkcntiYWNrZ3JvdW5kOiMzMzQxNTUhaW1wb3J0YW50O2NvbG9yOndoaXRlIWltcG9ydGFudDtwYWRkaW5nOjRweCA4cHg7Zm9udC1zaXplOjcuNXB0O2ZvbnQtd2VpZ2h0OjcwMDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O3ByaW50LWNvbG9yLWFkanVzdDpleGFjdDt9Ci5hZXAtaGllci1yb3d7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxMDBweCA1NXB4IDFmciAxZnIgMTEwcHg7Z2FwOjA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2YxZjVmOTt9Ci5hZXAtaGllci1yb3c6bGFzdC1jaGlsZHtib3JkZXItYm90dG9tOm5vbmU7fQouYWVwLWhpZXItY2VsbHtwYWRkaW5nOjRweCA2cHg7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZjFmNWY5O30KLmFlcC1xdWFsLWJveHtib3JkZXI6MXB4IHNvbGlkICNlMmU4ZjA7Ym9yZGVyLXJhZGl1czo0cHg7cGFkZGluZzo3cHggOXB4O21hcmdpbi10b3A6NnB4O2ZvbnQtc2l6ZTo4cHQ7Y29sb3I6IzMzNDE1NTt3aGl0ZS1zcGFjZTpwcmUtbGluZTt9Ci5hZXAtcXVhbC1sYWJlbHtmb250LXNpemU6N3B0O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojNjQ3NDhiO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTttYXJnaW4tYm90dG9tOjNweDt9Ci5hZXAtZmF2LW5vdGljZXtiYWNrZ3JvdW5kOiNkY2ZjZTchaW1wb3J0YW50O2JvcmRlcjoxcHggc29saWQgIzg2ZWZhYztib3JkZXItcmFkaXVzOjRweDtwYWRkaW5nOjZweCA5cHg7Zm9udC1zaXplOjhwdDtjb2xvcjojMTY2NTM0IWltcG9ydGFudDtmb250LXdlaWdodDo2MDA7LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6ZXhhY3Q7cHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0O30KCgovKiBDYW1wb3MgZWRpdMOhdmVpcyBubyBQREYg4oCUIHZpc8OtdmVpcyBuYSBpbXByZXNzw6NvICovCkBtZWRpYSBwcmludCB7CiAgI3JlbGF0b3Jpby1wZGYgc2VsZWN0LAogICNyZWxhdG9yaW8tcGRmIHRleHRhcmVhLAogICNyZWxhdG9yaW8tcGRmIGlucHV0IHsKICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdCAhaW1wb3J0YW50OwogICAgcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdCAhaW1wb3J0YW50OwogICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsKICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDsKICB9CiAgI3JlbGF0b3Jpby1wZGYgc2VsZWN0IHsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMCAhaW1wb3J0YW50OyB9CiAgI3JlbGF0b3Jpby1wZGYgdGV4dGFyZWEgeyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwICFpbXBvcnRhbnQ7IG1pbi1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDsgfQp9CgpAbWVkaWEgcHJpbnQgewogICNwZGYtYnRuLWJhciB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfQogICNyZWxhdG9yaW8tcGRmIHsKICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDsKICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50OwogICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDsKICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7CiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7CiAgICB6LWluZGV4OiBhdXRvICFpbXBvcnRhbnQ7CiAgfQogICNyZWxhdG9yaW8tcGRmIHNlbGVjdCwKICAjcmVsYXRvcmlvLXBkZiB0ZXh0YXJlYSB7CiAgICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3QgIWltcG9ydGFudDsKICAgIHByaW50LWNvbG9yLWFkanVzdDogZXhhY3QgIWltcG9ydGFudDsKICB9Cn0KCg==");
    var portalJS=b64dec("CgoKCnZhciBIS0VZUz1bImVsaW0iLCJzdWJzdCIsImVuZyIsImFkbSIsImluZCJdOwp2YXIgSElFUk5BTUVTPVsiMeKAk0VsaW1pbmHDp8OjbyIsIjLigJNTdWJzdGl0dWnDp8OjbyIsIjPigJNDb2xldGl2YS9FbmcuIiwiNOKAk0FkbWluaXN0cmF0aXZhIiwiNeKAk0luZC4vUHJvdGXDp8OjbyJdOwp2YXIgSElFUkNPUj1bIiNkYzI2MjYiLCIjZWE1ODBjIiwiI2NhOGEwNCIsIiM2YjQyMjYiLCIjMTZhMzRhIl07CmZ1bmN0aW9uIHRvU2NvcmUoaSxyKXtjb25zdCB2PWV4dHJhaXJOdW0ocik7aWYodj09PW51bGwpcmV0dXJuIG51bGw7cmV0dXJuIFFbaV0uaW52PzYtdjp2O30KZnVuY3Rpb24gY2FsY01lZGlhcyhsaW5oYXMpewogIGNvbnN0IGRzPXt9LGRkPXt9OwogIFEuZm9yRWFjaChxPT5kc1txLmRpbV09W10pO0RPTVMuZm9yRWFjaChkPT5kZFtkXT1bXSk7CiAgKGxpbmhhc3x8W10pLmZvckVhY2gobD0+e2lmKCFsPy5yZXNwb3N0YXMpcmV0dXJuO1EuZm9yRWFjaCgocSxpKT0+e2NvbnN0IHM9dG9TY29yZShpLGwucmVzcG9zdGFzW2ldKTtpZihzIT09bnVsbCl7ZHNbcS5kaW1dLnB1c2gocyk7ZGRbcS5kb21dLnB1c2gocyk7fX0pO30pOwogIGNvbnN0IG1EaW09e30sbURvbT17fTsKICBPYmplY3Qua2V5cyhkcykuZm9yRWFjaChrPT5tRGltW2tdPWF2Zyhkc1trXSkpO0RPTVMuZm9yRWFjaChrPT5tRG9tW2tdPWF2ZyhkZFtrXSkpOwogIHJldHVybnttRGltLG1Eb219Owp9CmZ1bmN0aW9uIGNsYXNzaWYobSl7aWYobT09PW51bGx8fGlzTmFOKG0pfHxtPT09dW5kZWZpbmVkKXJldHVybiBudWxsO2lmKG08PTIuMzMpcmV0dXJuImZhdiI7aWYobTw9My42NilyZXR1cm4iaW50IjtyZXR1cm4icmlzIjt9CgoKCmZ1bmN0aW9uIG5yQ2xhc3MobnIpe3JldHVybiBucj09PW51bGw/IiI6bnI8PTE/ImFlcC1uci10Ijpucjw9Mj8iYWVwLW5yLWIiOm5yPD00PyJhZXAtbnItbSI6bnI8PTg/ImFlcC1uci1hIjoiYWVwLW5yLWMiO30KZnVuY3Rpb24gY2xCYWRnZShjbCl7cmV0dXJuIGNsPT09ImZhdiI/IjxzcGFuIGNsYXNzPSdhZXAtYmFkZ2UtZyc+RmF2b3LDoXZlbDwvc3Bhbj4iOmNsPT09ImludCI/IjxzcGFuIGNsYXNzPSdhZXAtYmFkZ2UtYSc+SW50ZXJtZWRpw6FyaWE8L3NwYW4+IjpjbD09PSJyaXMiPyI8c3BhbiBjbGFzcz0nYWVwLWJhZGdlLXInPlJpc2NvPC9zcGFuPiI6IjxzcGFuPuKAlDwvc3Bhbj4iO30KCmZ1bmN0aW9uIGdlcmFyUG9ydGFsSFRNTChhZXAsZGFkb3MsREJfQ0FSR09TX0VYVFJBKXsKICB2YXIgX0RCPURCX0NBUkdPU19FWFRSQXx8REJfQ0FSR09TOwogIGlmKCFkYWRvc3x8IWRhZG9zLmxlbmd0aCl7cmV0dXJuICI8cD5TZW0gZGFkb3MuPC9wPiI7fQogIHZhciBzZXRvcmVzPVsuLi5uZXcgU2V0KGRhZG9zLm1hcChmdW5jdGlvbihkKXtyZXR1cm4gZC5zZXRvcjt9KSldLnNvcnQoKTsKICB2YXIgYWdvcmE9bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoInB0LUJSIix7ZGF5OiIyLWRpZ2l0Iixtb250aDoiMi1kaWdpdCIseWVhcjoibnVtZXJpYyJ9KTsKICB2YXIgZW1wPWFlcC5lbXByZXNhfHwiW0VtcHJlc2EgbsOjbyBpbmZvcm1hZGFdIjsKICB2YXIgY25waj1hZXAuY25wanx8IiI7CiAgdmFyIGVuZD1hZXAuZW5kZXJlY298fCIiOwogIHZhciByZXNwPWFlcC5yZXNwb25zYXZlbHx8IiI7CiAgdmFyIGR0PWFlcC5kYXRhfHxhZ29yYTsKICB2YXIgcGdyPWFlcC5wZ3J8fCIiOwogIHZhciBwY21zbz1hZXAucGNtc298fCIiOwogIHZhciBiYXNlPWFlcC5iYXNlX2xlZ2FsfHwiTlItMDEgKFBvcnQuIE1URSAxLjQxOS8yMDI0KSB8IE5SLTE3IHwgSVNPIDQ1MDAzOjIwMjEiOwogIHZhciBkb2NOdW09YWVwLmRvY19udW1lcm98fCIiOwogIHZhciBkb2NWZXI9YWVwLmRvY192ZXJzYW98fCIwMSI7CiAgdmFyIGRvY1Jldj1hZXAuZG9jX3JldmlzYW98fCIiOwogIHZhciBkb2NQcm94UmV2PWFlcC5kb2NfcHJveF9yZXZpc2FvfHwiIjsKICB2YXIgY25hZT1hZXAuY25hZXx8IiI7CiAgdmFyIGdyYXVSaXNjbz1hZXAuZ3JhdV9yaXNjb3x8IiI7CiAgdmFyIHRvdGFsVHJhYj1hZXAudG90YWxfdHJhYnx8IiI7CiAgdmFyIGVzY29wbz1hZXAuZXNjb3BvfHwiIjsKICB2YXIgY3JlYT1hZXAuY3JlYXx8IiI7CgogIHZhciBsb2dvVGFtUHg9eydwZXF1ZW5vJzonNjBweCcsJ21lZGlvJzonMTAwcHgnLCdncmFuZGUnOicxNTBweCcsJ2V4dHJhJzonMjAwcHgnfTsKICB2YXIgbG9nb1N6PWxvZ29UYW1QeFthZXAubG9nb1RhbXx8J21lZGlvJ107CiAgdmFyIGxvZ29IdG1sPWFlcC5sb2dvU3JjPyc8aW1nIHNyYz0iJythZXAubG9nb1NyYysnIiBzdHlsZT0id2lkdGg6Jytsb2dvU3orJztoZWlnaHQ6Jytsb2dvU3orJztvYmplY3QtZml0OmNvbnRhaW4iIGFsdD0iTG9nbyIvPic6Jyc7CiAgdmFyIGxvZ29IdG1sU209YWVwLmxvZ29TcmM/JzxpbWcgc3JjPSInK2FlcC5sb2dvU3JjKyciIHN0eWxlPSJoZWlnaHQ6MjhweDtvYmplY3QtZml0OmNvbnRhaW4iIGFsdD0iTG9nbyIvPic6Jyc7CiAgdmFyIGNvbmNsPWFlcC5jb25jbHVzYW98fCIiOwogIHZhciByZWNvbT1hZXAucmVjb21lbmRhY29lc3x8IiI7CiAgaWYoIWFlcC5naGUpYWVwLmdoZT17fTsKCiAgZnVuY3Rpb24gZ3YocyxrLGZiKXt2YXIgbz1hZXAuZ2hlW3NdO3JldHVybihvJiZvW2tdIT1udWxsKT9vW2tdOmZiO30KICBmdW5jdGlvbiBnbXoocyxpKXtpZighYWVwLmdoZVtzXSlhZXAuZ2hlW3NdPXt9O2lmKCFhZXAuZ2hlW3NdLm16KWFlcC5naGVbc10ubXo9RE9NUy5tYXAoZnVuY3Rpb24oKXtyZXR1cm57fTt9KTtyZXR1cm4gYWVwLmdoZVtzXS5teltpXTt9CiAgZnVuY3Rpb24gZ2hyKHMsaSl7aWYoIWFlcC5naGVbc10pYWVwLmdoZVtzXT17fTtpZighYWVwLmdoZVtzXS5ocilhZXAuZ2hlW3NdLmhyPURPTVMubWFwKGZ1bmN0aW9uKCl7cmV0dXJue307fSk7cmV0dXJuIGFlcC5naGVbc10uaHJbaV07fQogIGZ1bmN0aW9uIGNsQmFkZ2UoY2wpe3JldHVybiBjbD09PSJmYXYiPyI8c3BhbiBjbGFzcz0nYWVwLWJhZGdlLWcnPkZhdm9yw6F2ZWw8L3NwYW4+IjpjbD09PSJpbnQiPyI8c3BhbiBjbGFzcz0nYWVwLWJhZGdlLWEnPkludGVybWVkacOhcmlhPC9zcGFuPiI6Y2w9PT0icmlzIj8iPHNwYW4gY2xhc3M9J2FlcC1iYWRnZS1yJz5SaXNjbzwvc3Bhbj4iOiI8c3Bhbj7igJQ8L3NwYW4+Ijt9CiAgZnVuY3Rpb24gbnJDbGFzcyhucil7cmV0dXJuIG5yPT09bnVsbD8iIjpucjw9MT8iYWVwLW5yLXQiOm5yPD0yPyJhZXAtbnItYiI6bnI8PTQ/ImFlcC1uci1tIjpucjw9OD8iYWVwLW5yLWEiOiJhZXAtbnItYyI7fQogIHZhciBIS0VZUz1bImVsaW0iLCJzdWJzdCIsImVuZyIsImFkbSIsImluZCJdOwogIHZhciBISUVSTkFNRVM9WyIx4oCTRWxpbWluYcOnw6NvIiwiMuKAk1N1YnN0aXR1acOnw6NvIiwiM+KAk0NvbGV0aXZhL0VuZy4iLCI04oCTQWRtaW5pc3RyYXRpdmEiLCI14oCTSW5kLi9Qcm90ZcOnw6NvIl07CiAgdmFyIEhJRVJDT1I9WyIjZGMyNjI2IiwiI2VhNTgwYyIsIiNjYThhMDQiLCIjNmI0MjI2IiwiIzE2YTM0YSJdOwoKICAvLyDilIDilIAgUMOBR0lOQSAxOiBDQVBBIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgAogIHZhciBjYXBhPShmdW5jdGlvbigpewogICAgdmFyIGg9Jyc7CiAgICAvLyDilIDilIAgQ2FiZcOnYWxobyB2aW5obwogICAgaCs9JzxkaXYgY2xhc3M9ImFlcC1wYWdlIiBzdHlsZT0icGFkZGluZzowO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWluLWhlaWdodDoyNjdtbSI+JzsKICAgIGgrPSc8ZGl2IHN0eWxlPSJiYWNrZ3JvdW5kOiM3ZDIwMjA7cGFkZGluZzoyMHB4IDI0cHggMTZweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6ZmxleC1zdGFydCI+JzsKICAgIGgrPSc8ZGl2Pic7CiAgICBoKz0nPGRpdiBzdHlsZT0iY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNik7Zm9udC1zaXplOjdwdDtmb250LXdlaWdodDo2MDA7bGV0dGVyLXNwYWNpbmc6MnB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTttYXJnaW4tYm90dG9tOjZweCI+TWVuZGVzICZhbXA7IFNpbHZhIMK3IEN1aWRhZG8gZW0gUHNpY29sb2dpYSBPcmdhbml6YWNpb25hbDwvZGl2Pic7CiAgICBoKz0nPGRpdiBzdHlsZT0iY29sb3I6d2hpdGU7Zm9udC1zaXplOjE4cHQ7Zm9udC13ZWlnaHQ6ODAwO2xpbmUtaGVpZ2h0OjEuMTU7bWFyZ2luLWJvdHRvbTo0cHgiPkFSUCDigJQgQXZhbGlhw6fDo28gZGUgUmlzY29zPGJyPlBzaWNvc3NvY2lhaXMgZG8gVHJhYmFsaG88L2Rpdj4nOwogICAgaCs9JzxkaXYgc3R5bGU9ImNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjc1KTtmb250LXNpemU6OC41cHQiPkF2YWxpYcOnw6NvIEVyZ29uw7RtaWNhIFByZWxpbWluYXIgJm5ic3A7wrcmbmJzcDsgQ09QU09RIElJICZuYnNwO8K3Jm5ic3A7IERpbWVuc8OjbyBQc2ljb3Nzb2NpYWw8L2Rpdj4nOwogICAgaCs9JzwvZGl2Pic7CiAgICBpZihhZXAubG9nb1NyYyl7aCs9JzxpbWcgc3JjPSInK2FlcC5sb2dvU3JjKyciIHN0eWxlPSJoZWlnaHQ6NTJweDtvYmplY3QtZml0OmNvbnRhaW4iIGFsdD0iTG9nbyIvPic7fQogICAgZWxzZXtoKz0nPGRpdiBzdHlsZT0iYm9yZGVyOjJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4zKTtib3JkZXItcmFkaXVzOjhweDtwYWRkaW5nOjhweCAxNHB4O2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjgpO2ZvbnQtc2l6ZTo4cHQ7Zm9udC13ZWlnaHQ6NzAwO3RleHQtYWxpZ246Y2VudGVyIj5BRVA8YnI+UHNpY29zc29jaWFsPC9kaXY+Jzt9CiAgICBoKz0nPC9kaXY+JzsKICAgIC8vIOKUgOKUgCBGYWl4YSBiYXNlIGxlZ2FsCiAgICBoKz0nPGRpdiBzdHlsZT0iYmFja2dyb3VuZDojNWMxNzE3O3BhZGRpbmc6NXB4IDI0cHg7Zm9udC1zaXplOjYuNXB0O2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjcpIj4nK2Jhc2UrJzwvZGl2Pic7CiAgICAvLyDilIDilIAgQ29ycG8KICAgIGgrPSc8ZGl2IHN0eWxlPSJmbGV4OjE7cGFkZGluZzoxOHB4IDI0cHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6MTRweCI+JzsKICAgIC8vIEVtcHJlc2EKICAgIGZ1bmN0aW9uIHNlY1RpdGxlKHQpe3JldHVybiAnPGRpdiBzdHlsZT0iZm9udC1zaXplOjYuNXB0O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojN2QyMDIwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzoxcHg7bWFyZ2luLWJvdHRvbTo3cHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NnB4Ij48c3BhbiBzdHlsZT0id2lkdGg6MTZweDtoZWlnaHQ6MnB4O2JhY2tncm91bmQ6IzdkMjAyMDtkaXNwbGF5OmlubGluZS1ibG9jayI+PC9zcGFuPicrdCsnPHNwYW4gc3R5bGU9ImZsZXg6MTtoZWlnaHQ6MXB4O2JhY2tncm91bmQ6I2UyZThmMDtkaXNwbGF5OmlubGluZS1ibG9jayI+PC9zcGFuPjwvZGl2Pic7fQogICAgZnVuY3Rpb24gY2VsbChsYWJlbCx2YWx1ZSxib2xkKXtyZXR1cm4gJzx0ZCBzdHlsZT0icGFkZGluZzo2cHggMTBweDtib3JkZXI6MXB4IHNvbGlkICNlMmU4ZjAnKyhib2xkPyc7YmFja2dyb3VuZDojZmFmYWZhJzonJykrJztmb250LXNpemU6JysoYm9sZD8nNi41cHQnOic4LjVwdCcpKyc7JysoYm9sZD8nZm9udC13ZWlnaHQ6NzAwO2NvbG9yOiM2NDc0OGI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlJzonY29sb3I6IzMzNDE1NScpKyciPicrdmFsdWUrJzwvdGQ+Jzt9CiAgICBoKz1zZWNUaXRsZSgnSWRlbnRpZmljYcOnw6NvIGRhIEVtcHJlc2EnKTsKICAgIGgrPSc8ZGl2IHN0eWxlPSJib3JkZXI6MXB4IHNvbGlkICNlMmU4ZjA7Ym9yZGVyLXJhZGl1czo2cHg7b3ZlcmZsb3c6aGlkZGVuIj4nOwogICAgaCs9Jzx0YWJsZSBzdHlsZT0id2lkdGg6MTAwJTtib3JkZXItY29sbGFwc2U6Y29sbGFwc2UiPic7CiAgICBoKz0nPHRyPic7CiAgICBoKz0nPHRkIHN0eWxlPSJwYWRkaW5nOjdweCAxMnB4O2JvcmRlcjoxcHggc29saWQgI2UyZThmMDtiYWNrZ3JvdW5kOiNmYWZhZmE7d2lkdGg6MTIwcHg7Zm9udC1zaXplOjYuNXB0O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojOTRhM2I4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSI+UmF6w6NvIFNvY2lhbDwvdGQ+JzsKICAgIGgrPSc8dGQgY29sc3Bhbj0iMyIgc3R5bGU9InBhZGRpbmc6N3B4IDEycHg7Ym9yZGVyOjFweCBzb2xpZCAjZTJlOGYwO2ZvbnQtc2l6ZToxMHB0O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojMWUyOTNiIj4nK2VtcCsnPC90ZD4nOwogICAgaCs9JzwvdHI+PHRyPic7CiAgICBoKz0nPHRkIHN0eWxlPSJwYWRkaW5nOjZweCAxMnB4O2JvcmRlcjoxcHggc29saWQgI2UyZThmMDtiYWNrZ3JvdW5kOiNmYWZhZmE7Zm9udC1zaXplOjYuNXB0O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojOTRhM2I4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSI+Q05QSjwvdGQ+JzsKICAgIGgrPSc8dGQgc3R5bGU9InBhZGRpbmc6NnB4IDEycHg7Ym9yZGVyOjFweCBzb2xpZCAjZTJlOGYwO2ZvbnQtc2l6ZTo4LjVwdDtjb2xvcjojMzM0MTU1O3dpZHRoOjE2MHB4Ij4nKyhjbnBqfHwn4oCUJykrJzwvdGQ+JzsKICAgIGgrPSc8dGQgc3R5bGU9InBhZGRpbmc6NnB4IDEycHg7Ym9yZGVyOjFweCBzb2xpZCAjZTJlOGYwO2JhY2tncm91bmQ6I2ZhZmFmYTtmb250LXNpemU6Ni41cHQ7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiM5NGEzYjg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3dpZHRoOjgwcHgiPkNOQUU8L3RkPic7CiAgICBoKz0nPHRkIHN0eWxlPSJwYWRkaW5nOjZweCAxMnB4O2JvcmRlcjoxcHggc29saWQgI2UyZThmMDtmb250LXNpemU6OC41cHQ7Y29sb3I6IzMzNDE1NSI+JysoY25hZXx8J+KAlCcpKyc8L3RkPic7CiAgICBoKz0nPC90cj48dHI+JzsKICAgIGgrPSc8dGQgc3R5bGU9InBhZGRpbmc6NnB4IDEycHg7Ym9yZGVyOjFweCBzb2xpZCAjZTJlOGYwO2JhY2tncm91bmQ6I2ZhZmFmYTtmb250LXNpemU6Ni41cHQ7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiM5NGEzYjg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlIj5FbmRlcmXDp288L3RkPic7CiAgICBoKz0nPHRkIGNvbHNwYW49IjMiIHN0eWxlPSJwYWRkaW5nOjZweCAxMnB4O2JvcmRlcjoxcHggc29saWQgI2UyZThmMDtmb250LXNpemU6OC41cHQ7Y29sb3I6IzMzNDE1NSI+JysoZW5kfHwn4oCUJykrJzwvdGQ+JzsKICAgIGgrPSc8L3RyPjx0cj4nOwogICAgaCs9Jzx0ZCBzdHlsZT0icGFkZGluZzo2cHggMTJweDtib3JkZXI6MXB4IHNvbGlkICNlMmU4ZjA7YmFja2dyb3VuZDojZmFmYWZhO2ZvbnQtc2l6ZTo2LjVwdDtmb250LXdlaWdodDo3MDA7Y29sb3I6Izk0YTNiODt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2UiPkdyYXUgZGUgUmlzY288L3RkPic7CiAgICBoKz0nPHRkIHN0eWxlPSJwYWRkaW5nOjZweCAxMnB4O2JvcmRlcjoxcHggc29saWQgI2UyZThmMDtmb250LXNpemU6OC41cHQ7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiM3ZDIwMjAiPicrKGdyYXVSaXNjbz8nR1IgJytncmF1UmlzY28rJyDigJQgTlItNCc6J+KAlCcpKyc8L3RkPic7CiAgICBoKz0nPHRkIHN0eWxlPSJwYWRkaW5nOjZweCAxMnB4O2JvcmRlcjoxcHggc29saWQgI2UyZThmMDtiYWNrZ3JvdW5kOiNmYWZhZmE7Zm9udC1zaXplOjYuNXB0O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojOTRhM2I4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSI+TsK6IFRyYWJhbGhhZG9yZXM8L3RkPic7CiAgICBoKz0nPHRkIHN0eWxlPSJwYWRkaW5nOjZweCAxMnB4O2JvcmRlcjoxcHggc29saWQgI2UyZThmMDtmb250LXNpemU6OC41cHQ7Y29sb3I6IzMzNDE1NSI+JysodG90YWxUcmFifHxkYWRvcy5sZW5ndGh8fCfigJQnKSsnPC90ZD4nOwogICAgaCs9JzwvdHI+PC90YWJsZT48L2Rpdj4nOwogICAgLy8gR1JPICsgUmVzcG9uc8OhdmVsCiAgICBoKz0nPGRpdiBzdHlsZT0iZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO2dhcDoxNHB4Ij4nOwogICAgLy8gR1JPCiAgICBoKz0nPGRpdj4nK3NlY1RpdGxlKCdEb2N1bWVudG8gR1JPIC8gUEdSJyk7CiAgICBoKz0nPHRhYmxlIHN0eWxlPSJ3aWR0aDoxMDAlO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtmb250LXNpemU6OC41cHQiPic7CiAgICB2YXIgZ3JvX3Jvd3M9W1snTsK6IERvY3VtZW50bycsZG9jTnVtfHwn4oCUJ10sWydWZXJzw6NvIC8gUmV2aXPDo28nLChkb2NWZXJ8fCcwMScpKycgwrcgJysoZG9jUmV2fHwn4oCUJyldLFsnUHLDs3hpbWEgUmV2aXPDo28nLGRvY1Byb3hSZXZ8fCfigJQnXSxbJ1BHUiBOwronLHBncnx8J+KAlCddLFsnUENNU08gTsK6JyxwY21zb3x8J+KAlCddXTsKICAgIGdyb19yb3dzLmZvckVhY2goZnVuY3Rpb24ocm93KXsKICAgICAgaCs9Jzx0cj48dGQgc3R5bGU9InBhZGRpbmc6NXB4IDEwcHg7YmFja2dyb3VuZDojZmFmYWZhO2JvcmRlcjoxcHggc29saWQgI2UyZThmMDt3aWR0aDo0MiU7Zm9udC1zaXplOjYuNXB0O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojNjQ3NDhiO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSI+Jytyb3dbMF0rJzwvdGQ+JzsKICAgICAgaCs9Jzx0ZCBzdHlsZT0icGFkZGluZzo1cHggMTBweDtib3JkZXI6MXB4IHNvbGlkICNlMmU4ZjA7Y29sb3I6IzMzNDE1NSI+Jytyb3dbMV0rJzwvdGQ+PC90cj4nOwogICAgfSk7CiAgICBoKz0nPC90YWJsZT48L2Rpdj4nOwogICAgLy8gUmVzcG9uc8OhdmVsCiAgICBoKz0nPGRpdj4nK3NlY1RpdGxlKCdSZXNwb25zw6F2ZWwgVMOpY25pY28nKTsKICAgIGgrPSc8dGFibGUgc3R5bGU9IndpZHRoOjEwMCU7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2ZvbnQtc2l6ZTo4LjVwdCI+JzsKICAgIHZhciByZXNwX3Jvd3M9W1snTm9tZScscmVzcF0sWydSZWdpc3RybyAoQ1JQKScsY3JlYXx8J+KAlCddLFsnRGF0YSBkZSBFbWlzc8OjbycsZHRdXTsKICAgIHJlc3Bfcm93cy5mb3JFYWNoKGZ1bmN0aW9uKHJvdyl7CiAgICAgIGgrPSc8dHI+PHRkIHN0eWxlPSJwYWRkaW5nOjVweCAxMHB4O2JhY2tncm91bmQ6I2ZhZmFmYTtib3JkZXI6MXB4IHNvbGlkICNlMmU4ZjA7d2lkdGg6NDIlO2ZvbnQtc2l6ZTo2LjVwdDtmb250LXdlaWdodDo3MDA7Y29sb3I6IzY0NzQ4Yjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2UiPicrcm93WzBdKyc8L3RkPic7CiAgICAgIGgrPSc8dGQgc3R5bGU9InBhZGRpbmc6NXB4IDEwcHg7Ym9yZGVyOjFweCBzb2xpZCAjZTJlOGYwO2NvbG9yOiMzMzQxNTU7Zm9udC13ZWlnaHQ6Jysocm93WzBdPT09J05vbWUnPyc3MDAnOic0MDAnKSsnIj4nK3Jvd1sxXSsnPC90ZD48L3RyPic7CiAgICB9KTsKICAgIGgrPSc8L3RhYmxlPjwvZGl2PjwvZGl2Pic7CiAgICAvLyBFc2NvcG8KICAgIGlmKGVzY29wbyl7CiAgICAgIGgrPXNlY1RpdGxlKCdFc2NvcG8gZGEgQXZhbGlhw6fDo28nKTsKICAgICAgaCs9JzxkaXYgc3R5bGU9ImJvcmRlcjoxcHggc29saWQgI2UyZThmMDtib3JkZXItcmFkaXVzOjZweDtwYWRkaW5nOjhweCAxMnB4O2ZvbnQtc2l6ZTo4LjVwdDtjb2xvcjojMzM0MTU1O2xpbmUtaGVpZ2h0OjEuNjtiYWNrZ3JvdW5kOiNmYWZhZmEiPicrZXNjb3BvKyc8L2Rpdj4nOwogICAgfQogICAgLy8gQ2FyZHMgZGUgcmVzdW1vCiAgICBoKz0nPGRpdiBzdHlsZT0iZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNCwxZnIpO2dhcDo4cHg7bWFyZ2luLXRvcDphdXRvIj4nOwogICAgdmFyIGNhcmRzPVtbc2V0b3Jlcy5sZW5ndGgsJ1NldG9yZXMgLyBHSEVzJ10sW2RhZG9zLmxlbmd0aCwnUmVzcG9uZGVudGVzIENPUFNPUSddLFsnNDEnLCdRdWVzdMO1ZXMgQ09QU09RIElJJ10sWyc4JywnRG9tw61uaW9zIEF2YWxpYWRvcyddXTsKICAgIGNhcmRzLmZvckVhY2goZnVuY3Rpb24oY2FyZCl7CiAgICAgIGgrPSc8ZGl2IHN0eWxlPSJiYWNrZ3JvdW5kOiNmZGYyZjI7Ym9yZGVyOjFweCBzb2xpZCAjZThiNGI0O2JvcmRlci1yYWRpdXM6OHB4O3BhZGRpbmc6MTBweDt0ZXh0LWFsaWduOmNlbnRlciI+JzsKICAgICAgaCs9JzxkaXYgc3R5bGU9ImZvbnQtc2l6ZToxN3B0O2ZvbnQtd2VpZ2h0OjgwMDtjb2xvcjojN2QyMDIwO2xpbmUtaGVpZ2h0OjEiPicrY2FyZFswXSsnPC9kaXY+JzsKICAgICAgaCs9JzxkaXYgc3R5bGU9ImZvbnQtc2l6ZTo2LjVwdDtjb2xvcjojNjQ3NDhiO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250LXdlaWdodDo2MDA7bWFyZ2luLXRvcDozcHgiPicrY2FyZFsxXSsnPC9kaXY+JzsKICAgICAgaCs9JzwvZGl2Pic7CiAgICB9KTsKICAgIGgrPSc8L2Rpdj4nOwogICAgaCs9JzwvZGl2Pic7CiAgICAvLyBSb2RhcMOpCiAgICBoKz0nPGRpdiBzdHlsZT0iYmFja2dyb3VuZDojZjhmYWZjO2JvcmRlci10b3A6MXB4IHNvbGlkICNlMmU4ZjA7cGFkZGluZzo2cHggMjRweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyIj4nOwogICAgaCs9JzxkaXYgc3R5bGU9ImZvbnQtc2l6ZTo2LjVwdDtjb2xvcjojOTRhM2I4Ij5Eb2N1bWVudG8gY29tcGxlbWVudGFyIGFvIFBHUiDCtyBOUi0wMSAoUG9ydC4gTVRFIG7CuiAxLjQxOS8yMDI0KSDCtyBOUi0xNyAoUG9ydC4gTVRQIG7CuiA0MjMvMjAyMSk8L2Rpdj4nOwogICAgaCs9JzxkaXYgc3R5bGU9ImZvbnQtc2l6ZTo2LjVwdDtjb2xvcjojOTRhM2I4O2ZvbnQtd2VpZ2h0OjYwMCI+RW1pdGlkbyBlbSAnK2R0Kyc8L2Rpdj4nOwogICAgaCs9JzwvZGl2Pic7CiAgICBoKz0nPC9kaXY+JzsKICAgIHJldHVybiBoOwogIH0oKSk7CiAgdmFyIHBhZ2luYUdSTz0nJzsKCi8vIOKUgOKUgCBQw4FHSU5BIDI6IElOVFJPRFXDh8ODTyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAKICB2YXIgaW50cm89JzxkaXYgY2xhc3M9ImFlcC1wYWdlIj4nKwogICAgJzxkaXYgc3R5bGU9ImRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLWJvdHRvbToxMHB4O3BhZGRpbmctYm90dG9tOjZweDtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjN2QyMDIwIj4nKwogICAgICAoYWVwLmxvZ29Qb3MhPT0nY2FwYV9vbmx5JyYmYWVwLmxvZ29TcmM/JzxpbWcgc3JjPSInK2FlcC5sb2dvU3JjKyciIHN0eWxlPSJoZWlnaHQ6MjhweDtvYmplY3QtZml0OmNvbnRhaW4iIGFsdD0iTG9nbyIvPic6JycpKwogICAgICAnPHNwYW4gc3R5bGU9ImZvbnQtc2l6ZTo3cHQ7Y29sb3I6Izk0YTNiOCI+QUVQIFBzaWNvc3NvY2lhbCDCtyBDT1BTT1EgSUkgwrcgJytkdCsnPC9zcGFuPicrCiAgICAnPC9kaXY+JysKICAgICc8ZGl2IGNsYXNzPSJhZXAtcGgiPjEuIEludHJvZHXDp8OjbzwvZGl2PicrCiAgICAnPHAgY2xhc3M9ImFlcC10eHQiPk9zIHJpc2NvcyBwc2ljb3Nzb2NpYWlzLCBjYWRhIHZleiBtYWlzIHJlY29uaGVjaWRvcyBjb21vIGRlc2FmaW9zIHBhcmEgYSBzYcO6ZGUgZSBzZWd1cmFuw6dhIG5vIHRyYWJhbGhvLCBlbnZvbHZlbSBmYXRvcmVzIGNvbW8gb3JnYW5pemHDp8OjbyBkbyB0cmFiYWxobywgcmVsYcOnw7VlcyBzb2NpYWlzLCBhbWJpZW50ZSBlIHRhcmVmYXMuIEVzc2VzIHJpc2NvcyBwb2RlbSBhZmV0YXIgYSBzYcO6ZGUgbWVudGFsIGUgZsOtc2ljYSBkb3MgdHJhYmFsaGFkb3JlcyBlIGltcGFjdGFyIGEgcGVyZm9ybWFuY2Ugb3JnYW5pemFjaW9uYWwsIGdlcmFuZG8gY3VzdG9zIGVjb27DtG1pY29zLiBBIGdlc3TDo28gZWZpY2F6IGRlc3NlcyByaXNjb3MsIGFsaW5oYWRhIGFvcyBkZW1haXMgcmlzY29zIGRlIFNTTywgcG9kZSBsZXZhciBhIG1lbGhvcmlhcyBubyBiZW0tZXN0YXIsIHNhdGlzZmHDp8OjbyBlIHByb2R1dGl2aWRhZGUgbm8gdHJhYmFsaG8sIHNlbmRvIHJlc3BvbnNhYmlsaWRhZGUgdGFudG8gZGEgb3JnYW5pemHDp8OjbyBxdWFudG8gZG9zIHRyYWJhbGhhZG9yZXMuPC9wPicrCiAgICAnPHAgY2xhc3M9ImFlcC10eHQiPkVzdGUgZG9jdW1lbnRvIGZvaSBiYXNlYWRvIG5hcyBvcmllbnRhw6fDtWVzIHNvYnJlIGEgZ2VzdMOjbyBkZSByaXNjb3MgcHNpY29zc29jaWFpcyBlIGEgcHJvbW/Dp8OjbyBkbyBiZW0tZXN0YXIgbm8gdHJhYmFsaG8gY29uc3RhbnRlIG5hIElTTyA0NTAwMzoyMDIxLiBBIG9yZ2FuaXphw6fDo28gw6kgcmVzcG9uc8OhdmVsIHBlbGEgc2HDumRlIGbDrXNpY2EgZSBwc2ljb2zDs2dpY2EgZG9zIHRyYWJhbGhhZG9yZXMsIGRldmVuZG8gcHJldmVuaXIgbGVzw7VlcyBlIGVuZmVybWlkYWRlcywgY3JpYW5kbyBhbWJpZW50ZXMgZGUgdHJhYmFsaG8gc2VndXJvcyBlIHNhdWTDoXZlaXMuPC9wPicrCiAgICAnPGRpdiBjbGFzcz0iYWVwLXBoMiI+MS4xIE5hdHVyZXphIGRvIERvY3VtZW50byBlIFZpbmN1bGHDp8OjbyBhbyBQR1I8L2Rpdj4nKwogICAgJzxwIGNsYXNzPSJhZXAtdHh0Ij5BIHByZXNlbnRlIEFuw6FsaXNlIGRlIFJpc2NvIFBzaWNvc3NvY2lhbCBkbyBUcmFiYWxobyBjb25zdGl0dWkgZG9jdW1lbnRvIDxzdHJvbmc+Q09NUExFTUVOVEFSPC9zdHJvbmc+IGFvIFByb2dyYW1hIGRlIEdlcmVuY2lhbWVudG8gZGUgUmlzY29zIChQR1IpIGRhIG9yZ2FuaXphw6fDo28sIGVsYWJvcmFkbyBlbSBhdGVuZGltZW50byBhbyBpdGVtIDEuNS4zLjIuMSBkYSBOUi0wMSAoUG9ydGFyaWEgTVRFIG7CuiAxLjQxOS8yMDI0KSwgcXVlIGRldGVybWluYTo8L3A+JysKICAgICc8ZGl2IGNsYXNzPSJhZXAtdHh0LWJveCI+IkEgb3JnYW5pemHDp8OjbyBkZXZlIGNvbnNpZGVyYXIgYXMgY29uZGnDp8O1ZXMgZGUgdHJhYmFsaG8sIG5vcyB0ZXJtb3MgZGEgTlItMTcsIDxzdHJvbmc+aW5jbHVpbmRvIG9zIGZhdG9yZXMgZGUgcmlzY28gcHNpY29zc29jaWFpcyByZWxhY2lvbmFkb3MgYW8gdHJhYmFsaG88L3N0cm9uZz4uIjwvZGl2PicrCiAgICAnPHAgY2xhc3M9ImFlcC10eHQiPkEgQUVQIHZpZ2VudGUgPHN0cm9uZz5Ow4NPPC9zdHJvbmc+IGNvbnRlbXBsYSBhIGRpbWVuc8OjbyBkb3MgZmF0b3JlcyBkZSByaXNjbyBwc2ljb3Nzb2NpYWlzIHJlbGFjaW9uYWRvcyBhbyB0cmFiYWxobywgY29uZm9ybWUgZXhpZ2lkbyBwZWxvIGl0ZW0gMTcuNC4xIGRhIE5SLTE3LiBQb3J0YW50bywgZXN0ZSBsYXVkbzo8L3A+JysKICAgICc8cCBjbGFzcz0iYWVwLXR4dCI+PHN0cm9uZz5hKTwvc3Ryb25nPiA8c3Ryb25nPkNPTVBMRU1FTlRBPC9zdHJvbmc+IGEgQUVQIGV4aXN0ZW50ZSwgYWRpY2lvbmFuZG8gYSBhdmFsaWHDp8OjbyBkb3MgZmF0b3JlcyBwc2ljb3Nzb2NpYWlzIGRhIG9yZ2FuaXphw6fDo28gZG8gdHJhYmFsaG87PGJyPicrCiAgICAnPHN0cm9uZz5iKTwvc3Ryb25nPiA8c3Ryb25nPkFMSU1FTlRBPC9zdHJvbmc+IG8gaW52ZW50w6FyaW8gZGUgcmlzY29zIGRvIFBHUiwgY29uZm9ybWUgaXRlbnMgMTcuMy41IGUgMTcuMy42IGRhIE5SLTE3LjwvcD4nKwoKICAgICc8ZGl2IGNsYXNzPSJhZXAtcGgiPjIuIE9iamV0aXZvIGRhIEFuw6FsaXNlPC9kaXY+JysKICAgICc8cCBjbGFzcz0iYWVwLXR4dCI+SWRlbnRpZmljYXIgYXMgc2l0dWHDp8O1ZXMgZGUgdHJhYmFsaG8gY29tIGV4aWfDqm5jaWEgZGUgc29icmVjYXJnYSBmw61zaWNhIGUgbWVudGFsIHF1ZSBwb2RlbSBnZXJhciBkYW5vcyDDoCBzYcO6ZGUgZG9zIHRyYWJhbGhhZG9yZXMsIHZpc2FuZG86PC9wPicrCiAgICAnPHAgY2xhc3M9ImFlcC10eHQiPuKAlCBBZGVxdWFyIG9zIHBvc3RvcyBkZSB0cmFiYWxobyBhb3MgbGltaXRlcyBlIGNhcGFjaWRhZGVzIGRvIGluZGl2w61kdW8gcGFyYSBwcm9wb3JjaW9uYXIgY29uZm9ydG8sIHNlZ3VyYW7Dp2EsIGJlbS1lc3RhciBlIHNhdGlzZmHDp8OjbyBubyB0cmFiYWxobywgcHJldmVuaW5kbyBhY2lkZW50ZXMgZSBkb2Vuw6dhcyBvY3VwYWNpb25haXM7PGJyPicrCiAgICAn4oCUIEFkZXF1YXIgYXMgY29uZGnDp8O1ZXMgZGUgdHJhYmFsaG8gYnVzY2FuZG8gYSBlZmljacOqbmNpYSwgcHJvZHV0aXZpZGFkZSBlIHF1YWxpZGFkZTs8YnI+JysKICAgICfigJQgQXV4aWxpYXIgYSBlbXByZXNhIGEgYWRlcXVhci1zZSDDoCBsZWdpc2xhw6fDo28gdmlnZW50ZSByZWZlcmVudGUgw6BzIHF1ZXN0w7VlcyBlcmdvbsO0bWljYXMgZSBwc2ljb3Nzb2NpYWlzLjwvcD4nKwoKICAgICc8ZGl2IGNsYXNzPSJhZXAtcGgiPjMuIEFzcGVjdG9zIExlZ2FpczwvZGl2PicrCiAgICAnPGRpdiBjbGFzcz0iYWVwLXR4dC1ib3giPjxzdHJvbmc+TlItMTcgKFBvcnRhcmlhIE1UUCBuwrogNDIzLzIwMjEpOjwvc3Ryb25nPjxicj4iMTcuMy41IERldmVtIGludGVncmFyIG8gaW52ZW50w6FyaW8gZGUgcmlzY29zIGRvIFBHUiI8YnI+IjE3LjMuNiBEZXZlbSBzZXIgcHJldmlzdG9zIHBsYW5vcyBkZSBhw6fDo28sIG5vcyB0ZXJtb3MgZG8gUEdSIjxicj4iMTcuNC4xIFsuLi5dIGRldmUgbGV2YXIgZW0gY29uc2lkZXJhw6fDo28gb3MgYXNwZWN0b3MgY29nbml0aXZvcyBxdWUgcG9zc2FtIGNvbXByb21ldGVyIGEgc2VndXJhbsOnYSBlIGEgc2HDumRlIGRvIHRyYWJhbGhhZG9yIjwvZGl2PicrCiAgICAnPGRpdiBjbGFzcz0iYWVwLXR4dC1ib3giPjxzdHJvbmc+TlItMDEgKFBvcnRhcmlhIE1URSBuwrogMS40MTkvMjAyNCk6PC9zdHJvbmc+PGJyPiIxLjUuMy4yLjEgQSBvcmdhbml6YcOnw6NvIGRldmUgY29uc2lkZXJhciBhcyBjb25kacOnw7VlcyBkZSB0cmFiYWxobywgbm9zIHRlcm1vcyBkYSBOUi0xNywgaW5jbHVpbmRvIG9zIGZhdG9yZXMgZGUgcmlzY28gcHNpY29zc29jaWFpcyByZWxhY2lvbmFkb3MgYW8gdHJhYmFsaG8iPC9kaXY+JysKICAgICc8cCBjbGFzcz0iYWVwLXR4dCI+PHN0cm9uZz5EZW1haXMgcmVmZXLDqm5jaWFzIG5vcm1hdGl2YXM6PC9zdHJvbmc+PC9wPicrCiAgICAnPHRhYmxlIGNsYXNzPSJhZXAtdGFibGUiPjx0aGVhZD48dHI+PHRoPlJlZmVyw6puY2lhPC90aD48dGg+RGVzY3Jpw6fDo288L3RoPjwvdHI+PC90aGVhZD48dGJvZHk+JysKICAgICAgJzx0cj48dGQ+SVNPIDQ1MDAxOjIwMTg8L3RkPjx0ZD5TaXN0ZW1hIGRlIEdlc3TDo28gZGUgU2HDumRlIGUgU2VndXJhbsOnYSBPY3VwYWNpb25hbDwvdGQ+PC90cj4nKwogICAgICAnPHRyPjx0ZD5JU08gNDUwMDM6MjAyMTwvdGQ+PHRkPkdlc3TDo28gZGUgUmlzY29zIFBzaWNvc3NvY2lhaXMgbm8gVHJhYmFsaG88L3RkPjwvdHI+JysKICAgICAgJzx0cj48dGQ+QlMgODgwMCAoQlNJLCAxOTk2KTwvdGQ+PHRkPk1hdHJpeiBkZSBDbGFzc2lmaWNhw6fDo28gZGUgTsOtdmVsIGRlIFJpc2NvPC90ZD48L3RyPicrCiAgICAgICc8dHI+PHRkPlBvcnRhcmlhIEdNL01TIG7CuiA1LjY3NC8yMDI0PC90ZD48dGQ+TGlzdGEgZGUgRG9lbsOnYXMgUmVsYWNpb25hZGFzIGFvIFRyYWJhbGhvIOKAlCBMRFJUPC90ZD48L3RyPicrCiAgICAgICc8dHI+PHRkPkNPUFNPUSBJSTwvdGQ+PHRkPkNvcGVuaGFnZW4gUHN5Y2hvc29jaWFsIFF1ZXN0aW9ubmFpcmUgKFNpbHZhIGV0IGFsLiwgMjAxMSk8L3RkPjwvdHI+JysKICAgICc8L3Rib2R5PjwvdGFibGU+JysKCiAgICAnPGRpdiBjbGFzcz0iYWVwLXBoIj40LiBNZXRvZG9sb2dpYSBBcGxpY2FkYTwvZGl2PicrCiAgICAnPHAgY2xhc3M9ImFlcC10eHQiPk8gcHJlc2VudGUgcmVsYXTDs3JpbyBiYXNlb3Utc2Ugbm9zIHByZWNlaXRvcyBkYSBsZWdpc2xhw6fDo28gdHJhYmFsaGlzdGEgdmlnZW50ZSwgY2l0YW5kbyBhIE5SLTAxIChQb3J0YXJpYSBNVEUgbsK6IDEuNDE5LzIwMjQpIGUgYSBOUi0xNyAoUG9ydGFyaWEvTVRQIG7CuiA0MjMsIGRlIDcgZGUgb3V0dWJybyBkZSAyMDIxKS4gRm9pIHV0aWxpemFkYSBjb21vIHJlZmVyw6puY2lhIHTDqWNuaWNhIHByaW5jaXBhbCBhIEFCTlQgSVNPL0lTTyA0NTAwMzoyMDIxLCBxdWUgZXN0YWJlbGVjZSB0csOqcyBkaXJldHJpemVzIHBhcmEgaWRlbnRpZmljYXIgcGVyaWdvcyBkZSBuYXR1cmV6YSBwc2ljb3Nzb2NpYWw6PC9wPicrCiAgICAnPHAgY2xhc3M9ImFlcC10eHQiIHN0eWxlPSJtYXJnaW4tbGVmdDoxMnB4Ij48c3Ryb25nPjEuPC9zdHJvbmc+IE9yZ2FuaXphw6fDo28gZG8gVHJhYmFsaG88YnI+PHN0cm9uZz4yLjwvc3Ryb25nPiBGYXRvcmVzIHNvY2lhaXMgbm8gdHJhYmFsaG88YnI+PHN0cm9uZz4zLjwvc3Ryb25nPiBBbWJpZW50ZSBkZSB0cmFiYWxobywgZXF1aXBhbWVudG9zIGUgdGFyZWZhcyBkZSByaXNjbzwvcD4nKwogICAgJzxkaXYgY2xhc3M9ImFlcC1waDIiPkluc3RydW1lbnRvIGRlIEF2YWxpYcOnw6NvIOKAlCBDT1BTT1EgSUk8L2Rpdj4nKwogICAgJzxwIGNsYXNzPSJhZXAtdHh0Ij5Db21vIGluc3RydW1lbnRvIGRlIGF2YWxpYcOnw6NvIHF1YWxpdGF0aXZhIGUgcXVhbnRpdGF0aXZhIGRvcyBmYXRvcmVzIHBzaWNvc3NvY2lhaXMsIGZvaSBhcGxpY2FkbyBvIENPUFNPUSBJSSAoQ29wZW5oYWdlbiBQc3ljaG9zb2NpYWwgUXVlc3Rpb25uYWlyZSksIGluc3RydW1lbnRvIHZhbGlkYWRvIGludGVybmFjaW9uYWxtZW50ZSBlIHJlY29uaGVjaWRvIHBlbGEgY29tdW5pZGFkZSBjaWVudMOtZmljYSAoU2lsdmEgZXQgYWwuLCAyMDExKSwgY29tIDQxIGl0ZW5zIGVtIDI2IHN1YmVzY2FsYXMuIEFzIHJlc3Bvc3RhcyBzZWd1ZW0gZXNjYWxhIExpa2VydCBkZSA1IHBvbnRvcy4gQSBjbGFzc2lmaWNhw6fDo28gc2VndWl1IG8gc2lzdGVtYSBkZSB0ZXJjaXM6PC9wPicrCiAgICAnPHRhYmxlIGNsYXNzPSJhZXAtdGFibGUiPjx0aGVhZD48dHI+PHRoPkNsYXNzaWZpY2HDp8OjbyBDT1BTT1EgSUk8L3RoPjx0aD5Db3I8L3RoPjx0aD5TaWduaWZpY2FkbzwvdGg+PHRoPkHDp8OjbzwvdGg+PC90cj48L3RoZWFkPjx0Ym9keT4nKwogICAgICAnPHRyPjx0ZD5TaXR1YcOnw6NvIEZhdm9yw6F2ZWw8L3RkPjx0ZD48c3BhbiBjbGFzcz0iYWVwLWJhZGdlLWciPlZlcmRlPC9zcGFuPjwvdGQ+PHRkPkJhaXhhIGV4cG9zacOnw6NvIGEgZmF0b3JlcyBwc2ljb3Nzb2NpYWlzPC90ZD48dGQ+UmVnaXN0cm8gbm8gUEdSLiBNYW51dGVuw6fDo28gZGFzIGNvbmRpw6fDtWVzIGF0dWFpcy48L3RkPjwvdHI+JysKICAgICAgJzx0cj48dGQ+U2l0dWHDp8OjbyBJbnRlcm1lZGnDoXJpYTwvdGQ+PHRkPjxzcGFuIGNsYXNzPSJhZXAtYmFkZ2UtYSI+QW1hcmVsbzwvc3Bhbj48L3RkPjx0ZD5FeHBvc2nDp8OjbyBtb2RlcmFkYS4gUmlzY28gZW0gZGVzZW52b2x2aW1lbnRvLjwvdGQ+PHRkPkHDp8O1ZXMgcHJldmVudGl2YXMuIE1vbml0b3JhbWVudG8gc2VtZXN0cmFsLjwvdGQ+PC90cj4nKwogICAgICAnPHRyPjx0ZD5SaXNjbyBwYXJhIGEgU2HDumRlPC90ZD48dGQ+PHNwYW4gY2xhc3M9ImFlcC1iYWRnZS1yIj5WZXJtZWxobzwvc3Bhbj48L3RkPjx0ZD5BbHRhIGV4cG9zacOnw6NvLiBSaXNjbyBwc2ljb3Nzb2NpYWwgY29uZmlndXJhZG8uPC90ZD48dGQ+SW50ZXJ2ZW7Dp8OjbyBpbWVkaWF0YS4gRWxpbWluYcOnw6NvIG91IGNvbnRyb2xlIGNvbmZvcm1lIEFCTlQgSVNPIDQ1MDAzOjIwMjEuPC90ZD48L3RyPicrCiAgICAnPC90Ym9keT48L3RhYmxlPicrCiAgICAnPGRpdiBjbGFzcz0iYWVwLXBoMiI+TWF0cml6IGRlIEF2YWxpYcOnw6NvIGRlIFJpc2NvcyDigJQgRk1FQSAvIEJTODgwMDwvZGl2PicrCiAgICAnPHAgY2xhc3M9ImFlcC10eHQiPkEgbWF0cml6IGRlIHJpc2NvIGFkb3RhZGEgdXRpbGl6YSBhIG1ldG9kb2xvZ2lhIEZNRUEsIGFkYXB0YWRhIHBhcmEgYXZhbGlhw6fDo28gZGUgcmlzY29zIHBzaWNvc3NvY2lhaXMgbmEgZXNjYWxhIGRlIDEgYSAzLCBjb21iaW5hbmRvOjwvcD4nKwogICAgJzxwIGNsYXNzPSJhZXAtdHh0IiBzdHlsZT0ibWFyZ2luLWxlZnQ6MTJweCI+PHN0cm9uZz5QIChQcm9iYWJpbGlkYWRlKTo8L3N0cm9uZz4gQXZhbGlhIG8gaGlzdMOzcmljbyBkZSBvY29ycsOqbmNpYXMgZSBvIHRlbXBvIGRlIGV4cG9zacOnw6NvIGFvIGFnZW50ZS48YnI+PHN0cm9uZz5TIChTZXZlcmlkYWRlKTo8L3N0cm9uZz4gQXZhbGlhIG8gaW1wYWN0byBodW1hbm8gZSBvcmdhbml6YWNpb25hbC48YnI+PHN0cm9uZz5DIChDb250cm9sZSk6PC9zdHJvbmc+IEF2YWxpYSBhIGV4aXN0w6puY2lhIGUgZWZpY8OhY2lhIGRlIG1lZGlkYXMgcHJldmVudGl2YXMuPC9wPicrCiAgICAnPGRpdiBjbGFzcz0iYWVwLXR4dC1ib3giPjxzdHJvbmc+UlBOID0gUCDDlyBTIMOXIEM8L3N0cm9uZz4g4oCUIE8gbsOtdmVsIGRlIHJpc2NvIMOpIGNsYXNzaWZpY2FkbyBjb25mb3JtZSBvIEFww6puZGljZSBEIGRhIEJTIDg4MDAgKEJTSSwgMTk5NiksIGFkYXB0YWRvIGNvbmZvcm1lIGEgTlItMDEuPC9kaXY+JysgICc8L2Rpdj4nOwoKICAvLyDilIDilIAgU0XDh8ODTyA1OiBNQVRSSVogREUgUklTQ08gUFNJQ09TU09DSUFMIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgAogIHZhciBtYXRyaXpSUE49CiAgICAnPGRpdiBjbGFzcz0iYWVwLXBhZ2UiPicrCiAgICAnPGRpdiBzdHlsZT0iZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4tYm90dG9tOjEwcHg7cGFkZGluZy1ib3R0b206NnB4O2JvcmRlci1ib3R0b206MnB4IHNvbGlkICM3ZDIwMjAiPicrCiAgICAgIChhZXAubG9nb1BvcyE9PSdjYXBhX29ubHknJiZhZXAubG9nb1NyYz8nPGltZyBzcmM9IicrYWVwLmxvZ29TcmMrJyIgc3R5bGU9ImhlaWdodDoyOHB4O29iamVjdC1maXQ6Y29udGFpbiIgYWx0PSJMb2dvIi8+JzonJykrCiAgICAgICc8c3BhbiBzdHlsZT0iZm9udC1zaXplOjdwdDtjb2xvcjojOTRhM2I4Ij5BRVAgUHNpY29zc29jaWFsIMK3IENPUFNPUSBJSSDCtyAnK2R0Kyc8L3NwYW4+JysKICAgICc8L2Rpdj4nKwogICAgJzxkaXYgY2xhc3M9ImFlcC1waCI+NS4gTWF0cml6IGRlIFJpc2NvIFBzaWNvc3NvY2lhbDwvZGl2PicrCiAgICAnPGRpdiBjbGFzcz0iYWVwLXBoMiI+NS4xIEZ1bmRhbWVudGHDp8OjbyBNZXRvZG9sw7NnaWNhPC9kaXY+JysKICAgICc8cCBjbGFzcz0iYWVwLXR4dCI+QSBNYXRyaXogZGUgUmlzY28gZm9pIGNvbnN0cnXDrWRhIGNvbSBiYXNlIG5vcyByZXN1bHRhZG9zIGRvIENPUFNPUSBJSSwgdXRpbGl6YW5kbyBhIG1ldG9kb2xvZ2lhIGRlIGF2YWxpYcOnw6NvIGRlIHJpc2NvIHBvciBtZWlvIGRvIMOtbmRpY2UgPHN0cm9uZz5SUE4gKFJpc2sgUHJpb3JpdHkgTnVtYmVyKTwvc3Ryb25nPiwgY2FsY3VsYWRvIHBlbGEgZsOzcm11bGEgPHN0cm9uZz5QIMOXIFMgw7cgQzwvc3Ryb25nPiwgb25kZTo8L3A+JysKICAgICc8dGFibGUgY2xhc3M9ImFlcC10YWJsZSIgc3R5bGU9Im1hcmdpbi1ib3R0b206MTJweCI+PHRoZWFkPjx0cj4nKwogICAgICAnPHRoIHN0eWxlPSJ3aWR0aDoxMjBweCI+UGFyw6JtZXRybzwvdGg+PHRoIHN0eWxlPSJ3aWR0aDoyMjBweCI+RXNjYWxhICgx4oCTMyk8L3RoPjx0aD5Dcml0w6lyaW8gZGUgQ2xhc3NpZmljYcOnw6NvPC90aD4nKwogICAgJzwvdHI+PC90aGVhZD48dGJvZHk+JysKICAgICAgJzx0cj48dGQ+PHN0cm9uZyBzdHlsZT0iY29sb3I6I2RjMjYyNiI+UCDigJQgUHJvYmFiaWxpZGFkZTwvc3Ryb25nPjwvdGQ+JysKICAgICAgJzx0ZD4xID0gSW1wcm92w6F2ZWw8YnI+MiA9IFBvc3PDrXZlbDxicj4zID0gUHJvdsOhdmVsPC90ZD4nKwogICAgICAnPHRkPkluZGljYSBhIGNoYW5jZSBkZSBvIHJpc2NvIHNlIG1hbmlmZXN0YXIuIENvbnNpZGVyYS1zZSBhIGZyZXF1w6puY2lhIGUgY29uc2lzdMOqbmNpYSBkb3MgcmVsYXRvczogbXVpdG9zIGNvbGFib3JhZG9yZXMgcmVsYXRhbmRvIG8gbWVzbW8gcHJvYmxlbWEgaW5kaWNhIHByb2JhYmlsaWRhZGUgYWx0YTsgYXVzw6puY2lhIGRlIHJlbGF0b3MgaW5kaWNhIGJhaXhhLjwvdGQ+PC90cj4nKwogICAgICAnPHRyPjx0ZD48c3Ryb25nIHN0eWxlPSJjb2xvcjojY2E4YTA0Ij5TIOKAlCBTZXZlcmlkYWRlPC9zdHJvbmc+PC90ZD4nKwogICAgICAnPHRkPjEgPSBMZXZlPGJyPjIgPSBNb2RlcmFkYTxicj4zID0gR3JhdmU8L3RkPicrCiAgICAgICc8dGQ+UmVwcmVzZW50YSBvIGltcGFjdG8gcG90ZW5jaWFsIG5hIHNhw7pkZSBmw61zaWNhIG91IG1lbnRhbC4gTGV2ZSA9IGRlc2NvbmZvcnRvIHBhc3NhZ2Vpcm8gc2VtIGFmYXN0YW1lbnRvOyBNb2RlcmFkYSA9IGltcGFjdG8gcmVhbCBubyBiZW0tZXN0YXIgb3UgcmlzY28gZGUgYWRvZWNpbWVudG8gc2UgbsOjbyB0cmF0YWRvOyBHcmF2ZSA9IHJpc2NvIGRlIGJ1cm5vdXQsIGFmYXN0YW1lbnRvIG91IGRhbm8gcHNpY29sw7NnaWNvIHNpZ25pZmljYXRpdm8uPC90ZD48L3RyPicrCiAgICAgICc8dHI+PHRkPjxzdHJvbmcgc3R5bGU9ImNvbG9yOiMxNmEzNGEiPkMg4oCUIENvbnRyb2xlPC9zdHJvbmc+PC90ZD4nKwogICAgICAnPHRkPjEgPSBTZW0gY29udHJvbGU8YnI+MiA9IFBhcmNpYWw8YnI+MyA9IEVmZXRpdm88L3RkPicrCiAgICAgICc8dGQ+UmVmbGV0ZSBvIG7DrXZlbCBkZSBnZXJlbmNpYW1lbnRvIGrDoSBleGlzdGVudGUuIFNlbSBjb250cm9sZSA9IG5lbmh1bWEgcG9sw610aWNhIG91IHByb3RvY29sbzsgUGFyY2lhbCA9IGHDp8O1ZXMgaW5mb3JtYWlzIG91IGluc3VmaWNpZW50ZXM7IEVmZXRpdm8gPSBwb2zDrXRpY2EgZXN0cnV0dXJhZGEgZSBmdW5jaW9uYW5kby4gTyBjb250cm9sZSBhdHVhIGNvbW8gPHN0cm9uZz5mYXRvciByZWR1dG9yPC9zdHJvbmc+IGRvIHJpc2NvIGZpbmFsLjwvdGQ+PC90cj4nKwogICAgJzwvdGJvZHk+PC90YWJsZT4nKwogICAgJzxkaXYgY2xhc3M9ImFlcC1waDIiPjUuMiBUYWJlbGEgZGUgQ2xhc3NpZmljYcOnw6NvIGRvIFJQTjwvZGl2PicrCiAgICAnPHAgY2xhc3M9ImFlcC10eHQiPk8gUlBOIHJlc3VsdGFudGUgY2xhc3NpZmljYSBjYWRhIGRvbcOtbmlvIGVtIGNpbmNvIG7DrXZlaXMsIG9yaWVudGFuZG8gYSBwcmlvcml6YcOnw6NvIGRhcyBhw6fDtWVzIGRlIG1lbGhvcmlhIGNvbmZvcm1lIGEgTlItMDEsIElTTyA0NTAwMSBlIElTTyA0NTAwMzo8L3A+JysKICAgICc8dGFibGUgY2xhc3M9ImFlcC10YWJsZSI+PHRoZWFkPjx0cj4nKwogICAgICAnPHRoPk7DrXZlbCBkZSBSaXNjbzwvdGg+PHRoIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlciI+UlBOPC90aD48dGg+UHJpb3JpZGFkZTwvdGg+PHRoPkHDp8OjbyBSZWNvbWVuZGFkYTwvdGg+PHRoIHN0eWxlPSJ3aWR0aDoxMTBweCI+UHJhem8gTcOheGltbzwvdGg+JysKICAgICc8L3RyPjwvdGhlYWQ+PHRib2R5PicrCiAgICAgICc8dHIgc3R5bGU9ImJhY2tncm91bmQ6I2RjZmNlNyI+PHRkPjxzdHJvbmc+VHJpdmlhbDwvc3Ryb25nPjwvdGQ+PHRkIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlciI+4omkIDE8L3RkPjx0ZD5CYWl4w61zc2ltYTwvdGQ+PHRkPlJlZ2lzdHJvIG5vIFBHUi4gTWFudXRlbsOnw6NvIGRhcyBjb25kacOnw7VlcyBhdHVhaXMuPC90ZD48dGQ+UmV2aXPDo28gcGVyacOzZGljYSAoMiBhbm9zKTwvdGQ+PC90cj4nKwogICAgICAnPHRyIHN0eWxlPSJiYWNrZ3JvdW5kOiNkMWZhZTUiPjx0ZD48c3Ryb25nPlRvbGVyw6F2ZWw8L3N0cm9uZz48L3RkPjx0ZCBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPjEg4oCTIDI8L3RkPjx0ZD5CYWl4YTwvdGQ+PHRkPkHDp8O1ZXMgcHJldmVudGl2YXMgbGV2ZXMuIE1vbml0b3JhbWVudG8gc2VtZXN0cmFsLjwvdGQ+PHRkPjE4MCBkaWFzPC90ZD48L3RyPicrCiAgICAgICc8dHIgc3R5bGU9ImJhY2tncm91bmQ6I2ZlZjljMyI+PHRkPjxzdHJvbmc+TW9kZXJhZG88L3N0cm9uZz48L3RkPjx0ZCBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPjIg4oCTIDQ8L3RkPjx0ZD5Nb2RlcmFkYTwvdGQ+PHRkPkltcGxlbWVudGFyIG1lZGlkYXMgZGUgcmVkdcOnw6NvLiBQbGFubyBkZSBhw6fDo28gZm9ybWFsLjwvdGQ+PHRkPjkwIGRpYXM8L3RkPjwvdHI+JysKICAgICAgJzx0ciBzdHlsZT0iYmFja2dyb3VuZDojZmVkN2FhIj48dGQ+PHN0cm9uZz5TdWJzdGFuY2lhbDwvc3Ryb25nPjwvdGQ+PHRkIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlciI+NCDigJMgNzwvdGQ+PHRkPkFsdGE8L3RkPjx0ZD5NZWRpZGFzIHVyZ2VudGVzLiBJbnRlcnZlbsOnw6NvIHByaW9yaXTDoXJpYS48L3RkPjx0ZD4zMCBkaWFzPC90ZD48L3RyPicrCiAgICAgICc8dHIgc3R5bGU9ImJhY2tncm91bmQ6I2ZlZTJlMiI+PHRkPjxzdHJvbmc+SW50b2xlcsOhdmVsPC9zdHJvbmc+PC90ZD48dGQgc3R5bGU9InRleHQtYWxpZ246Y2VudGVyIj43IOKAkyA5PC90ZD48dGQ+QWx0w61zc2ltYTwvdGQ+PHRkPlBhcmFsaXNhciBvdSBpbXBsZW1lbnRhciBtZWRpZGEgaW1lZGlhdGEuIE5vdGlmaWNhciBQR1IuPC90ZD48dGQ+SW1lZGlhdG88L3RkPjwvdHI+JysKICAgICc8L3Rib2R5PjwvdGFibGU+JysKICAgICc8ZGl2IGNsYXNzPSJhZXAtdHh0LWJveCIgc3R5bGU9Im1hcmdpbi10b3A6MTBweCI+PHN0cm9uZz5Ob3RhIHTDqWNuaWNhOjwvc3Ryb25nPiBBIGNsYXNzaWZpY2HDp8OjbyBDT1BTT1EgSUkgKEZhdm9yw6F2ZWwsIEludGVybWVkacOhcmlhLCBSaXNjbykgc2VydmUgY29tbyBldmlkw6puY2lhIHTDqWNuaWNhIHBhcmEgZnVuZGFtZW50YXIgYSBkZWZpbmnDp8OjbyBkb3MgdmFsb3JlcyBkZSBQIGUgUyBwZWxvIHJlc3BvbnPDoXZlbCB0w6ljbmljbywgY29uZm9ybWUgb3JpZW50YcOnw7VlcyBkYSBJU08gNDUwMDM6MjAyMS4gRG9tw61uaW9zIGNsYXNzaWZpY2Fkb3MgY29tbyBSaXNjbyB0ZW5kZW0gYSBqdXN0aWZpY2FyIFAgZSBTIG1haXMgZWxldmFkb3MsIGVucXVhbnRvIGRvbcOtbmlvcyBGYXZvcsOhdmVpcyB0ZW5kZW0gYSByZXN1bHRhciBlbSBSUE4gVHJpdmlhbCBvdSBUb2xlcsOhdmVsLiBBbMOpbSBkYSBjbGFzc2lmaWNhw6fDo28gcXVhbnRpdGF0aXZhLCBzw6NvIGNvbnNpZGVyYWRvcyBuYSBkZWZpbmnDp8OjbyBkbyByaXNjbyBvcyByZWxhdG9zIHF1YWxpdGF0aXZvcyBkb3MgY29sYWJvcmFkb3JlcyBlIG8gaGlzdMOzcmljbyBkZSBhZmFzdGFtZW50b3MuIE8gdmFsb3IgZGUgQyDDqSBkZWZpbmlkbyBwZWxvIHJlc3BvbnPDoXZlbCB0w6ljbmljbyBwYXJhIGNhZGEgc2V0b3IsIGNvbSBiYXNlIG5hcyBtZWRpZGFzIGRlIGNvbnRyb2xlIGrDoSBleGlzdGVudGVzIG5hIG9yZ2FuaXphw6fDo28sIGNvbW8gcG9sw610aWNhcywgcHJvdG9jb2xvcyBlIHRyZWluYW1lbnRvcyBpbXBsZW1lbnRhZG9zLjwvZGl2PicrCiAgJzwvZGl2Pic7CgoKCgogIC8vIOKUgOKUgCDDjU5ESUNFIERFIFNFVE9SRVMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSACiAgdmFyIGluZGljZUxpbmtzPXNldG9yZXMubWFwKGZ1bmN0aW9uKHMsaSl7CiAgICByZXR1cm4gJzxhIGhyZWY9IiNzZXRvci1wZGYtJytpKyciIHN0eWxlPSJkaXNwbGF5OmJsb2NrO3BhZGRpbmc6NXB4IDEycHg7bWFyZ2luLWJvdHRvbTo0cHg7JysKICAgICAgJ2JhY2tncm91bmQ6I2ZkZjJmMjtib3JkZXItbGVmdDo0cHggc29saWQgIzdkMjAyMDtib3JkZXItcmFkaXVzOjAgNnB4IDZweCAwOycrCiAgICAgICdmb250LXNpemU6OXB0O2NvbG9yOiM3ZDIwMjA7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udC13ZWlnaHQ6NjAwIj4nKwogICAgICAoaSsxKSsnLiAnK3MrJzwvYT4nOwogIH0pLmpvaW4oJycpOwogIHZhciBpbmRpY2VQYWc9JzxkaXYgY2xhc3M9ImFlcC1wYWdlIj4nKwogICAgJzxkaXYgc3R5bGU9ImRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLWJvdHRvbToxMHB4O3BhZGRpbmctYm90dG9tOjZweDtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjN2QyMDIwIj4nKwogICAgICAoYWVwLmxvZ29Qb3MhPT0nY2FwYV9vbmx5JyYmYWVwLmxvZ29TcmM/JzxpbWcgc3JjPSInK2FlcC5sb2dvU3JjKyciIHN0eWxlPSJoZWlnaHQ6MjhweDtvYmplY3QtZml0OmNvbnRhaW4iIGFsdD0iTG9nbyIvPic6JycpKwogICAgICAnPHNwYW4gc3R5bGU9ImZvbnQtc2l6ZTo3cHQ7Y29sb3I6Izk0YTNiOCI+QUVQIFBzaWNvc3NvY2lhbCDCtyBDT1BTT1EgSUkgwrcgJytkdCsnPC9zcGFuPicrCiAgICAnPC9kaXY+JysKICAgICc8ZGl2IGNsYXNzPSJhZXAtcGgiPsONbmRpY2UgZGUgU2V0b3JlcyAvIEdIRXMgQXZhbGlhZG9zPC9kaXY+JysKICAgICc8cCBjbGFzcz0iYWVwLXR4dCIgc3R5bGU9ImNvbG9yOiM2NDc0OGI7bWFyZ2luLWJvdHRvbToxMHB4Ij5DbGlxdWUgbm8gc2V0b3IgcGFyYSBuYXZlZ2FyIGRpcmV0YW1lbnRlIMOgIHNlw6fDo28gY29ycmVzcG9uZGVudGUuPC9wPicrCiAgICBpbmRpY2VMaW5rcysKICAnPC9kaXY+JzsKCiAgLy8g4pSA4pSAIFDDgUdJTkFTIERFIExBVURPIFBPUiBTRVRPUiDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAKICB2YXIgbGF1ZG9zPSIiOwogIGZvcih2YXIgc2k9MDtzaTxzZXRvcmVzLmxlbmd0aDtzaSsrKXsKICAgIHZhciBzZXRvcj1zZXRvcmVzW3NpXTsKICAgIHZhciBzdWI9ZGFkb3MuZmlsdGVyKGZ1bmN0aW9uKGQpe3JldHVybiBkLnNldG9yPT09c2V0b3I7fSk7CiAgICB2YXIgY2FsYz1jYWxjTWVkaWFzKHN1Yik7CiAgICB2YXIgbURvbVM9Y2FsYy5tRG9tOwogICAgdmFyIGNvbWVudHM9c3ViLm1hcChmdW5jdGlvbihyKXtyZXR1cm4gci5jb21lbnRhcmlvO30pLmZpbHRlcihmdW5jdGlvbihjYyl7cmV0dXJuIGNjJiZjYy5sZW5ndGg+Mzt9KTsKICAgIHZhciBkb21zQXRpdm9zPURPTVMuZmlsdGVyKGZ1bmN0aW9uKGQpe3ZhciBjbD1jbGFzc2lmKG1Eb21TW2RdKTtyZXR1cm4gY2w9PT0iaW50Inx8Y2w9PT0icmlzIjt9KTsKICAgIHZhciBnaGVOb21lPWd2KHNldG9yLCJnaGUiLHNldG9yKTsKICAgIHZhciBmdW5jYW89Z3Yoc2V0b3IsImZ1bmNhbyIsIiIpOwogICAgdmFyIGRlcHRvPWd2KHNldG9yLCJkZXB0byIsIiIpOwogICAgdmFyIG50cmFiPWd2KHNldG9yLCJudHJhYiIsc3ViLmxlbmd0aCk7CiAgICB2YXIgcXVhbFRleHQ9Z3Yoc2V0b3IsInF1YWwiLCIiKTsKICAgIHZhciBhdGl2aWRhZGVUZXh0PWd2KHNldG9yLCJhdGl2aWRhZGUiLCIiKTsKICAgIC8vIFJlbGF0b3M6IHByaW9yaXphIG8gcXVlIG8gdMOpY25pY28gZWRpdG91IG5hIGFiYSBBRVAKICAgIC8vIFNlIGVkaXRvdSAobWVzbW8gcXVlIHZhemlvKSDihpIgdXNhIG8gZWRpdGFkbzsgc2UgbnVuY2EgdG9jb3Ug4oaSIHVzYSBDU1YgY29tbyByZWZlcsOqbmNpYQogICAgdmFyIGNvbWVudHNTYWx2b3M9Z3Yoc2V0b3IsImNvbWVudHNfZWRpdCIsbnVsbCk7CiAgICB2YXIgY29tZW50c1BERjsKICAgIGlmKGNvbWVudHNTYWx2b3MhPT1udWxsKXsKICAgICAgLy8gVXN1w6FyaW8gZWRpdG91IG8gY2FtcG8g4oCUIHJlc3BlaXRhciBleGF0YW1lbnRlIG8gcXVlIGVzY3JldmV1CiAgICAgIGNvbWVudHNQREY9Y29tZW50c1NhbHZvczsKICAgIH0gZWxzZSB7CiAgICAgIC8vIENhbXBvIG51bmNhIGZvaSBlZGl0YWRvIOKAlCB1c2FyIENTViBjb21vIHRleHRvIGluaWNpYWwgZGUgcmVmZXLDqm5jaWEKICAgICAgY29tZW50c1BERj1jb21lbnRzLmxlbmd0aD4wP2NvbWVudHMubWFwKGZ1bmN0aW9uKGNjLGNpKXtyZXR1cm4gJyMnKyhjaSsxKSsnICcrY2M7fSkuam9pbignXG4nKTonJzsKICAgIH0KCiAgICAvLyBjYWJlw6dhbGhvIGRvIHNldG9yCiAgICB2YXIgcGc9JzxkaXYgY2xhc3M9ImFlcC1wYWdlIiBpZD0ic2V0b3ItcGRmLScrc2krJyI+JysKICAgICAgJzxkaXYgc3R5bGU9ImRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLWJvdHRvbTo4cHg7cGFkZGluZy1ib3R0b206NnB4O2JvcmRlci1ib3R0b206MnB4IHNvbGlkICM3ZDIwMjAiPicrCiAgICAgICAgKGFlcC5sb2dvUG9zIT09J2NhcGFfb25seScmJmFlcC5sb2dvU3JjPyc8aW1nIHNyYz0iJythZXAubG9nb1NyYysnIiBzdHlsZT0iaGVpZ2h0OjI4cHg7b2JqZWN0LWZpdDpjb250YWluIiBhbHQ9IkxvZ28iLz4nOicnKSsKICAgICAgICAnPHNwYW4gc3R5bGU9ImZvbnQtc2l6ZTo3cHQ7Y29sb3I6Izk0YTNiOCI+QUVQIFBzaWNvc3NvY2lhbCDCtyBDT1BTT1EgSUkgwrcgJytkdCsnPC9zcGFuPicrCiAgICAgICc8L2Rpdj4nKwogICAgICAnPGRpdiBjbGFzcz0iYWVwLXNldG9yLWhkciI+JysKICAgICAgICAnPHNwYW4+8J+PoiAnK3NldG9yKyc8L3NwYW4+JysKICAgICAgICAnPHNwYW4gc3R5bGU9ImZvbnQtc2l6ZTo4cHQ7b3BhY2l0eTouOCI+JytzdWIubGVuZ3RoKycgcmVzcG9uZGVudGVzIHwgRW1pc3PDo286ICcrZHQrJzwvc3Bhbj4nKwogICAgICAnPC9kaXY+JysKICAgICAgJzxkaXYgY2xhc3M9ImFlcC1zZXRvci1ib2R5Ij4nKwogICAgICAgICc8ZGl2IGNsYXNzPSJhZXAtZ2hlLWdyaWQiPicrCiAgICAgICAgICAnPGRpdiBjbGFzcz0iYWVwLWdoZS1jZWxsIj48ZGl2IGNsYXNzPSJhZXAtZ2hlLWxhYmVsIj5HSEUgLyBGdW7Dp8OjbzwvZGl2PjxkaXYgY2xhc3M9ImFlcC1naGUtdmFsIj4nK2doZU5vbWUrJzwvZGl2PjwvZGl2PicrCiAgICAgICAgICAoZnVuY3Rpb24oKXsKICAgICAgICB2YXIgc2Vscz1ndihzZXRvciwnZnVuY29lc19zZWwnLFtdKXx8W107CiAgICAgICAgdmFyIGZ1bmNhb0xhYmVsPXNlbHMubGVuZ3RoP3NlbHMuam9pbignLCAnKTooZnVuY2FvfHwn4oCUJyk7CiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPSJhZXAtZ2hlLWNlbGwiIHN0eWxlPSJncmlkLWNvbHVtbjpzcGFuIDEiPjxkaXYgY2xhc3M9ImFlcC1naGUtbGFiZWwiPkZ1bsOnw6NvIC8gQ2FyZ288L2Rpdj48ZGl2IGNsYXNzPSJhZXAtZ2hlLXZhbCIgc3R5bGU9ImZvbnQtc2l6ZTo3LjVwdCI+JytmdW5jYW9MYWJlbCsnPC9kaXY+PC9kaXY+JzsKICAgICAgfSgpKSsKICAgICAgICAgICc8ZGl2IGNsYXNzPSJhZXAtZ2hlLWNlbGwiPjxkaXYgY2xhc3M9ImFlcC1naGUtbGFiZWwiPk7CuiBUcmFiYWxoYWRvcmVzPC9kaXY+PGRpdiBjbGFzcz0iYWVwLWdoZS12YWwiPicrbnRyYWIrJzwvZGl2PjwvZGl2PicrCiAgICAgICAgICAnPGRpdiBjbGFzcz0iYWVwLWdoZS1jZWxsIj48ZGl2IGNsYXNzPSJhZXAtZ2hlLWxhYmVsIj5OwrogUmVzcG9uZGVudGVzIENPUFNPUTwvZGl2PjxkaXYgY2xhc3M9ImFlcC1naGUtdmFsIj4nK3N1Yi5sZW5ndGgrJzwvZGl2PjwvZGl2PicrCiAgICAgICAgJzwvZGl2PicrCiAgICAgIChndihzZXRvciwnYXRpdmlkYWRlJywnJyk/JzxkaXYgc3R5bGU9Im1hcmdpbi10b3A6NnB4O2ZvbnQtc2l6ZTo3LjVwdDtiYWNrZ3JvdW5kOiNmOGZhZmM7Ym9yZGVyLWxlZnQ6M3B4IHNvbGlkICM5ZTM1MzU7cGFkZGluZzo0cHggOHB4O2JvcmRlci1yYWRpdXM6MCA0cHggNHB4IDAiPicrCiAgICAgICAgJzxzcGFuIHN0eWxlPSJmb250LXNpemU6Ni41cHQ7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiM2NDc0OGI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlIj5EZXNjcmnDp8OjbyBkYSBBdGl2aWRhZGU6IDwvc3Bhbj4nK2d2KHNldG9yLCdhdGl2aWRhZGUnLCcnKSsnPC9kaXY+JzonJykrCiAgICAgIChmdW5jdGlvbigpewogICAgICAgIHZhciBzZWxzPWd2KHNldG9yLCdmdW5jb2VzX3NlbCcsW10pfHxbXTsKICAgICAgICBpZighc2Vscy5sZW5ndGgpIHJldHVybiAnJzsKICAgICAgICB2YXIgYWxsQ2FyZ29zPVtdOwogICAgICAgIE9iamVjdC52YWx1ZXMoREJfQ0FSR09TKS5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RhKXtsaXN0YS5mb3JFYWNoKGZ1bmN0aW9uKGRjKXthbGxDYXJnb3MucHVzaChkYyk7fSk7fSk7CiAgICAgICAgdmFyIGNhcmdvc0h0bWw9JzxkaXYgc3R5bGU9Im1hcmdpbi10b3A6NnB4O2JvcmRlcjoxcHggc29saWQgI2UyZThmMDtib3JkZXItcmFkaXVzOjRweDtvdmVyZmxvdzpoaWRkZW4iPicrCiAgICAgICAgICAnPGRpdiBzdHlsZT0iYmFja2dyb3VuZDojZjFmNWY5O3BhZGRpbmc6M3B4IDhweDtmb250LXNpemU6Ni41cHQ7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiM2NDc0OGI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlMmU4ZjAiPkZ1bsOnw7VlcyAvIENhcmdvcyBkbyBHSEU8L2Rpdj4nOwogICAgICAgIHNlbHMuZm9yRWFjaChmdW5jdGlvbihjYXJnbyl7CiAgICAgICAgICB2YXIgZGM9YWxsQ2FyZ29zLmZpbmQoZnVuY3Rpb24oeCl7cmV0dXJuIHguY2FyZ28udG9VcHBlckNhc2UoKT09PWNhcmdvLnRvVXBwZXJDYXNlKCk7fSk7CiAgICAgICAgICBpZihkYyYmZGMuZGVzYyl7CiAgICAgICAgICAgIGNhcmdvc0h0bWwrPSc8ZGl2IHN0eWxlPSJwYWRkaW5nOjVweCA4cHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2YxZjVmOSI+JzsKICAgICAgICAgICAgY2FyZ29zSHRtbCs9JzxkaXYgc3R5bGU9ImZvbnQtc2l6ZTo2LjVwdDtmb250LXdlaWdodDo3MDA7Y29sb3I6IzdkMjAyMDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bWFyZ2luLWJvdHRvbToycHgiPicrY2FyZ28rJzwvZGl2Pic7CiAgICAgICAgICAgIGNhcmdvc0h0bWwrPSc8ZGl2IHN0eWxlPSJmb250LXNpemU6Ny41cHQ7Y29sb3I6IzMzNDE1NTtsaW5lLWhlaWdodDoxLjUiPicrZGMuZGVzYysnPC9kaXY+JzsKICAgICAgICAgICAgY2FyZ29zSHRtbCs9JzwvZGl2Pic7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgICAgY2FyZ29zSHRtbCs9JzwvZGl2Pic7CiAgICAgICAgcmV0dXJuIGNhcmdvc0h0bWw7CiAgICAgIH0oKSkrJ1xuJysKICAgICAgJzwvZGl2PicrCgogICAgICAvLyBDT1BTT1EgdGFiZWxhCiAgICAgICc8ZGl2IGNsYXNzPSJhZXAtcGgiIHN0eWxlPSJtYXJnaW4tdG9wOjEwcHgiPlJlc3VsdGFkb3MgQ09QU09RIElJICsgTWF0cml6IGRlIFJpc2NvPC9kaXY+JysKICAgICAgJzx0YWJsZSBjbGFzcz0iYWVwLXRhYmxlIj48dGhlYWQ+PHRyPicrCiAgICAgICAgJzx0aD5Eb23DrW5pbzwvdGg+PHRoIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlciI+TcOpZGlhPC90aD48dGggc3R5bGU9InRleHQtYWxpZ246Y2VudGVyIj5DbGFzc2lmLjwvdGg+JysKICAgICAgICAnPHRoIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDozNnB4Ij5QPC90aD48dGggc3R5bGU9InRleHQtYWxpZ246Y2VudGVyO3dpZHRoOjM2cHgiPlM8L3RoPjx0aCBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MzZweCI+QzwvdGg+JysKICAgICAgICAnPHRoIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo1MHB4Ij5SUE48L3RoPjx0aCBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6NzBweCI+UmlzY288L3RoPicrCiAgICAgICc8L3RyPjwvdGhlYWQ+PHRib2R5Pic7CgogICAgZm9yKHZhciBkaT0wO2RpPERPTVMubGVuZ3RoO2RpKyspewogICAgICB2YXIgZG9tPURPTVNbZGldLG09bURvbVNbZG9tXSxjbD1jbGFzc2lmKG0pOwogICAgICB2YXIgbXo9Z216KHNldG9yLGRpKTsKICAgICAgdmFyIHA9K216LnB8fCIiLHN2Mj0rbXouc3x8IiIsY3Y9K216LmN8fCIiOwogICAgICB2YXIgbnI9KHAmJnN2MiYmY3YpP3Aqc3YyL2N2Om51bGw7CiAgICAgIHZhciBiZ009Y2w9PT0iZmF2Ij8iYWVwLW5yLWZhdiI6Y2w9PT0iaW50Ij8iYWVwLW5yLWludCI6Y2w9PT0icmlzIj8iYWVwLW5yLXJpcyI6IiI7CiAgICAgIHBnKz0nPHRyPicrCiAgICAgICAgJzx0ZCBzdHlsZT0iZm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZTo3LjVwdCI+Jytkb20rJzwvdGQ+JysKICAgICAgICAnPHRkIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlcjtmb250LXdlaWdodDo4MDA7Zm9udC1zaXplOjlwdCIgY2xhc3M9IicrYmdNKyciPicrZm10KG0pKyc8L3RkPicrCiAgICAgICAgJzx0ZCBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPicrY2xCYWRnZShjbCkrJzwvdGQ+JysKICAgICAgICAnPHRkIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlciI+JytwKyc8L3RkPicrCiAgICAgICAgJzx0ZCBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPicrc3YyKyc8L3RkPicrCiAgICAgICAgJzx0ZCBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPicrY3YrJzwvdGQ+JysKICAgICAgICAnPHRkIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlcjtmb250LXdlaWdodDo3MDAiIGNsYXNzPSInKyhuciE9PW51bGw/bnJDbGFzcyhucik6JycpKyciPicrCiAgICAgICAgICAobnIhPT1udWxsP25yLnRvRml4ZWQoMik6IuKAlCIpKyc8L3RkPicrCiAgICAgICAgJzx0ZCBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjdwdDtmb250LXdlaWdodDo3MDAiIGNsYXNzPSInKyhuciE9PW51bGw/bnJDbGFzcyhucik6JycpKyciPicrCiAgICAgICAgICAobnIhPT1udWxsP25SaXNjbyhwLHN2Mixjdik6IuKAlCIpKyc8L3RkPicrCiAgICAgICAgJzwvdHI+JzsKICAgIH0KICAgIHBnKz0nPC90Ym9keT48L3RhYmxlPic7CgogICAgLy8gQW7DoWxpc2UgcXVhbGl0YXRpdmEgLyBTdWdlc3TDtWVzIGRlIG1lbGhvcmlhCiAgICBwZys9JzxkaXYgY2xhc3M9ImFlcC1waCIgc3R5bGU9Im1hcmdpbi10b3A6OHB4Ij5BbsOhbGlzZSBRdWFsaXRhdGl2YSAvIFN1Z2VzdMO1ZXMgZGUgTWVsaG9yaWE8L2Rpdj4nOwogICAgaWYoY29tZW50c1BERil7CiAgICAgIGlmKGNvbWVudHNTYWx2b3MhPT1udWxsKXsKICAgICAgICAvLyBUZXh0byBlZGl0YWRvIHBlbG8gdMOpY25pY28g4oCUIGV4aWJpciBjb21vIGFuw6FsaXNlIHF1YWxpdGF0aXZhIGVtIGJsb2NvIMO6bmljbwogICAgICAgIHBnKz0nPGRpdiBjbGFzcz0iYWVwLXF1YWwtbGFiZWwiPkFuw6FsaXNlIFF1YWxpdGF0aXZhIGRvcyBSZWxhdG9zPC9kaXY+JzsKICAgICAgICBwZys9JzxkaXYgY2xhc3M9ImFlcC1xdWFsLWJveCIgc3R5bGU9IndoaXRlLXNwYWNlOnByZS1saW5lO2ZvbnQtc2l6ZTo4cHQ7Y29sb3I6IzMzNDE1NTtsaW5lLWhlaWdodDoxLjc7bWFyZ2luLWJvdHRvbTo4cHgiPicrY29tZW50c1BERisnPC9kaXY+JzsKICAgICAgfSBlbHNlIHsKICAgICAgICAvLyBWZXJiYWxpemHDp8O1ZXMgYnJ1dGFzIGRvIENTViDigJQgZXhpYmlyIGNvbW8gbGlzdGEKICAgICAgICB2YXIgbGluaGFzQ29tPWNvbWVudHNQREYuc3BsaXQoJ1xuJykuZmlsdGVyKGZ1bmN0aW9uKGwpe3JldHVybiBsLnRyaW0oKTt9KTsKICAgICAgICBwZys9JzxkaXYgY2xhc3M9ImFlcC1xdWFsLWxhYmVsIj5WZXJiYWxpemHDp8O1ZXMgZG9zIHRyYWJhbGhhZG9yZXMgKCcrbGluaGFzQ29tLmxlbmd0aCsnIGVudHJhZGFzKTwvZGl2PicrCiAgICAgICAgICAnPGRpdiBzdHlsZT0ibWFyZ2luLWJvdHRvbTo4cHgiPic7CiAgICAgICAgZm9yKHZhciBjaT0wO2NpPE1hdGgubWluKGxpbmhhc0NvbS5sZW5ndGgsMTApO2NpKyspewogICAgICAgICAgcGcrPSc8ZGl2IHN0eWxlPSJmb250LXNpemU6Ny41cHQ7Ym9yZGVyLWxlZnQ6M3B4IHNvbGlkICM5ZTM1MzU7cGFkZGluZzozcHggN3B4O21hcmdpbi1ib3R0b206M3B4O2JhY2tncm91bmQ6I2ZkZjJmMjtjb2xvcjojMzM0MTU1Ij4nK2xpbmhhc0NvbVtjaV0rJzwvZGl2Pic7CiAgICAgICAgfQogICAgICAgIGlmKGxpbmhhc0NvbS5sZW5ndGg+MTApIHBnKz0nPGRpdiBzdHlsZT0iZm9udC1zaXplOjdwdDtjb2xvcjojOTRhM2I4O2ZvbnQtc3R5bGU6aXRhbGljIj4uLi4gZSBtYWlzICcrKGxpbmhhc0NvbS5sZW5ndGgtMTApKycgZW50cmFkYXMuPC9kaXY+JzsKICAgICAgICBwZys9JzwvZGl2Pic7CiAgICAgIH0KICAgIH0KICAgIGlmKHF1YWxUZXh0KXsKICAgICAgcGcrPSc8ZGl2IGNsYXNzPSJhZXAtcXVhbC1ib3giPjxkaXYgY2xhc3M9ImFlcC1xdWFsLWxhYmVsIj5TdWdlc3TDtWVzIGRlIG1lbGhvcmlhIC8gQW7DoWxpc2UgdMOpY25pY2E8L2Rpdj4nK3F1YWxUZXh0Kyc8L2Rpdj4nOwogICAgfQoKICAgIC8vIEhpZXJhcnF1aWEgZGUgQ29udHJvbGUg4oCUIMOaTklDQSBwb3Igc2V0b3IgKGludGVncmFkYSkKICAgIGlmKGRvbXNBdGl2b3MubGVuZ3RoPT09MCl7CiAgICAgIHBnKz0nPGRpdiBjbGFzcz0iYWVwLWZhdi1ub3RpY2UiIHN0eWxlPSJtYXJnaW4tdG9wOjhweCI+4pyFIFRvZG9zIG9zIGRvbcOtbmlvcyBlbSBTaXR1YcOnw6NvIEZhdm9yw6F2ZWwg4oCUIGFwZW5hcyBtb25pdG9yYW1lbnRvIHBlcmnDs2RpY28gY29uZm9ybWUgUEdSLjwvZGl2Pic7CiAgICB9IGVsc2UgewogICAgICAvLyBEZXRlY3RhciBpbnRlci1yZWxhw6fDo28gZW50cmUgZG9tw61uaW9zCiAgICAgIHZhciB0ZW1FeGlnUD1kb21zQXRpdm9zLmluZGV4T2YoJ0V4aWfDqm5jaWFzIExhYm9yYWlzJyk+PTA7CiAgICAgIHZhciB0ZW1TYXVkZVA9ZG9tc0F0aXZvcy5pbmRleE9mKCdTYcO6ZGUgZSBCZW0tRXN0YXInKT49MDsKICAgICAgdmFyIHRlbUludGZQPWRvbXNBdGl2b3MuaW5kZXhPZignSW50ZXJmYWNlIFRyYWJhbGhvLUluZGl2w61kdW8nKT49MDsKICAgICAgdmFyIHRlbVJlbFA9ZG9tc0F0aXZvcy5pbmRleE9mKCdSZWxhw6fDtWVzIFNvY2lhaXMgZSBMaWRlcmFuw6dhJyk+PTA7CiAgICAgIHZhciB0ZW1WYWxQPWRvbXNBdGl2b3MuaW5kZXhPZignVmFsb3JlcyBubyBMb2NhbCBkZSBUcmFiYWxobycpPj0wOwogICAgICB2YXIgY2FkZWlhUD10ZW1FeGlnUCYmKHRlbVNhdWRlUHx8dGVtSW50ZlApOwogICAgICB2YXIgY2FkZWlhUlA9dGVtUmVsUCYmKHRlbVZhbFB8fHRlbUludGZQKTsKICAgICAgLy8gQmFkZ2VzIGRvcyBkb23DrW5pb3MgaW50ZWdyYWRvcwogICAgICB2YXIgZG9tQmFkZ2VzUD1kb21zQXRpdm9zLm1hcChmdW5jdGlvbihkKXsKICAgICAgICB2YXIgY2wyPWNsYXNzaWYobURvbVNbZF0pOwogICAgICAgIHZhciBiZzI9Y2wyPT09J3Jpcyc/JyNmZWUyZTInOmNsMj09PSdpbnQnPycjZmVmOWMzJzonI2RjZmNlNyc7CiAgICAgICAgdmFyIGNvcjI9Y2wyPT09J3Jpcyc/JyM5OTFiMWInOmNsMj09PSdpbnQnPycjODU0ZDBlJzonIzE1ODAzZCc7CiAgICAgICAgcmV0dXJuICc8c3BhbiBzdHlsZT0iYmFja2dyb3VuZDonK2JnMisnO2NvbG9yOicrY29yMisnO3BhZGRpbmc6MXB4IDdweDtib3JkZXItcmFkaXVzOjEwcHg7Zm9udC1zaXplOjdwdDtmb250LXdlaWdodDo3MDA7bWFyZ2luOjJweCI+JytkKycgKCcrZm10KG1Eb21TW2RdKSsnKTwvc3Bhbj4nOwogICAgICB9KS5qb2luKCcnKTsKICAgICAgLy8gTGVyIGhpZXJVbmljYSBzYWx2YSBwZWxvIHTDqWNuaWNvCiAgICAgIHZhciBodURhdGE9Z3Yoc2V0b3IsJ2hpZXJVbmljYScse30pOwogICAgICB2YXIgSE5BTUVTPVsnMeKAk0VsaW1pbmHDp8OjbycsJzLigJNTdWJzdGl0dWnDp8OjbycsJzPigJNDb2xldGl2YS9FbmcuJywnNOKAk0FkbWluaXN0cmF0aXZhJywnNeKAk0luZC4vUHJvdGXDp8OjbyddOwogICAgICB2YXIgSENPUlM9WycjZGMyNjI2JywnI2VhNTgwYycsJyNjYThhMDQnLCcjNmI0MjI2JywnIzE2YTM0YSddOwogICAgICB2YXIgSEtFWVMyPVsnZWxpbScsJ3N1YnN0JywnZW5nJywnYWRtJywnaW5kJ107CiAgICAgIHBnKz0nPGRpdiBjbGFzcz0iYWVwLXBoIiBzdHlsZT0ibWFyZ2luLXRvcDo4cHgiPkhpZXJhcnF1aWEgZGUgQ29udHJvbGUg4oCUIEludGVncmFkYSAoSVNPIDQ1MDAzOjIwMjEgwrcgTlItMDEgwqcxLjUuNC40LjIuMik8L2Rpdj4nOwogICAgICBwZys9JzxkaXYgc3R5bGU9ImJhY2tncm91bmQ6I2ZkZjJmMjtib3JkZXI6MXB4IHNvbGlkICNlOGI0YjQ7Ym9yZGVyLXJhZGl1czo2cHg7cGFkZGluZzo2cHggMTBweDttYXJnaW4tYm90dG9tOjhweDtmb250LXNpemU6Ny41cHQ7Y29sb3I6IzdkMjAyMCI+JzsKICAgICAgcGcrPSc8c3Ryb25nPkRvbcOtbmlvcyBpbnRlZ3JhZG9zOjwvc3Ryb25nPiAnK2RvbUJhZGdlc1A7CiAgICAgIGlmKGNhZGVpYVApIHBnKz0nPGJyPjxzcGFuIHN0eWxlPSJmb250LXNpemU6N3B0O2NvbG9yOiM2NDc0OGI7Zm9udC1zdHlsZTppdGFsaWMiPuKaoSBJbnRlci1yZWxhw6fDo286IEV4aWfDqm5jaWFzIExhYm9yYWlzIOKGkiBJbnRlcmZhY2Ug4oaSIFNhw7pkZSBlIEJlbS1Fc3RhciAoS2FyYXNlayAmIFRoZW9yZWxsLCAxOTkwKTwvc3Bhbj4nOwogICAgICBpZihjYWRlaWFSUCkgcGcrPSc8YnI+PHNwYW4gc3R5bGU9ImZvbnQtc2l6ZTo3cHQ7Y29sb3I6IzY0NzQ4Yjtmb250LXN0eWxlOml0YWxpYyI+4pqhIEludGVyLXJlbGHDp8OjbzogUmVsYcOnw7VlcyBTb2NpYWlzIOKGkiBWYWxvcmVzIG5vIExvY2FsIGRlIFRyYWJhbGhvIChTaWVncmlzdCwgMTk5Nik8L3NwYW4+JzsKICAgICAgcGcrPSc8L2Rpdj4nOwogICAgICBwZys9JzxkaXYgc3R5bGU9Im92ZXJmbG93LXg6YXV0byI+PHRhYmxlIHN0eWxlPSJtaW4td2lkdGg6NjAwcHg7d2lkdGg6MTAwJSI+PHRoZWFkPjx0cj4nKwogICAgICAgICc8dGggc3R5bGU9IndpZHRoOjExMHB4Ij5Ow612ZWw8L3RoPicrCiAgICAgICAgJzx0aCBzdHlsZT0id2lkdGg6NzBweDt0ZXh0LWFsaWduOmNlbnRlciI+QW5hbGlzYWRvPzwvdGg+JysKICAgICAgICAnPHRoPkp1c3RpZmljYXRpdmEgVMOpY25pY2E8L3RoPicrCiAgICAgICAgJzx0aD5NZWRpZGFzIGRlIE1lbGhvcmlhIC8gUHJldmVuw6fDo288L3RoPicrCiAgICAgICAgJzx0aCBzdHlsZT0id2lkdGg6MTIwcHgiPlJlc3BvbnPDoXZlbCAvIFByYXpvPC90aD4nKwogICAgICAnPC90cj48L3RoZWFkPjx0Ym9keT4nOwogICAgICBmb3IodmFyIGhqPTA7aGo8SEtFWVMyLmxlbmd0aDtoaisrKXsKICAgICAgICB2YXIgaGtleTI9SEtFWVMyW2hqXTsKICAgICAgICB2YXIgaHVOaXZlbD0oaHVEYXRhJiZodURhdGFbaGtleTJdKXx8e307CiAgICAgICAgdmFyIGFuVmFsMj1odU5pdmVsLmFufHwn4oCUJzsKICAgICAgICB2YXIganVzdDI9aHVOaXZlbC5qdXN0fHwnJzsKICAgICAgICB2YXIgbWVkMj1odU5pdmVsLm1lZHx8Jyc7CiAgICAgICAgdmFyIHJlc3AzPWh1Tml2ZWwucmVzcHx8Jyc7CiAgICAgICAgcGcrPSc8dHIgc3R5bGU9ImJhY2tncm91bmQ6bm9uZSI+JysKICAgICAgICAgICc8dGQgc3R5bGU9ImZvbnQtc2l6ZTo3cHQ7Ym9yZGVyLWxlZnQ6NHB4IHNvbGlkICcrSENPUlNbaGpdKyc7cGFkZGluZzo2cHggOHB4O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjonK0hDT1JTW2hqXSsnIj4nK0hOQU1FU1toal0rJzwvdGQ+JysKICAgICAgICAgICc8dGQgc3R5bGU9InRleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTo3cHQ7cGFkZGluZzo2cHgiPicrYW5WYWwyKyc8L3RkPicrCiAgICAgICAgICAnPHRkIHN0eWxlPSJmb250LXNpemU6Ny41cHQ7cGFkZGluZzo2cHgiPicranVzdDIrJzwvdGQ+JysKICAgICAgICAgICc8dGQgc3R5bGU9ImZvbnQtc2l6ZTo3LjVwdDtwYWRkaW5nOjZweCI+JyttZWQyKyc8L3RkPicrCiAgICAgICAgICAnPHRkIHN0eWxlPSJmb250LXNpemU6Ny41cHQ7cGFkZGluZzo2cHgiPicrcmVzcDMrJzwvdGQ+JysKICAgICAgICAnPC90cj4nOwogICAgICB9CiAgICAgIHBnKz0nPC90Ym9keT48L3RhYmxlPjwvZGl2Pic7CgogICAgICAvLyBQbGFubyBkZSBhw6fDo28gcmVzdW1pZG8KICAgICAgcGcrPSc8ZGl2IGNsYXNzPSJhZXAtcGgiIHN0eWxlPSJtYXJnaW4tdG9wOjhweCI+UGxhbm8gZGUgQcOnw6NvPC9kaXY+JysKICAgICAgICAnPHRhYmxlIGNsYXNzPSJhZXAtdGFibGUiPjx0aGVhZD48dHI+JysKICAgICAgICAgICc8dGg+RG9tw61uaW88L3RoPjx0aD5Bw6fDo28gcHJvcG9zdGE8L3RoPjx0aD5NZWRpZGEgcHJldmVudGl2YTwvdGg+JysKICAgICAgICAgICc8dGggc3R5bGU9IndpZHRoOjgwcHgiPlJlc3BvbnPDoXZlbDwvdGg+PHRoIHN0eWxlPSJ3aWR0aDo2MHB4Ij5QcmF6bzwvdGg+PHRoIHN0eWxlPSJ3aWR0aDo3MHB4Ij5TdGF0dXM8L3RoPicrCiAgICAgICAgJzwvdHI+PC90aGVhZD48dGJvZHk+JzsKICAgICAgZm9yKHZhciBwaz0wO3BrPGRvbXNBdGl2b3MubGVuZ3RoO3BrKyspewogICAgICAgIHZhciBkb21QPWRvbXNBdGl2b3NbcGtdLGlwPURPTVMuaW5kZXhPZihkb21QKTsKICAgICAgICB2YXIgbXpQPWdteihzZXRvcixpcCk7CiAgICAgICAgcGcrPSc8dHI+JysKICAgICAgICAgICc8dGQgc3R5bGU9ImZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6Ny41cHQiPicrZG9tUCsnPC90ZD4nKwogICAgICAgICAgJzx0ZCBzdHlsZT0iZm9udC1zaXplOjcuNXB0Ij4nKyhtelAuYWNvZXN8fCc8c3BhbiBzdHlsZT0iY29sb3I6I2FhYSI+4oCUPC9zcGFuPicpKyc8L3RkPicrCiAgICAgICAgICAnPHRkIHN0eWxlPSJmb250LXNpemU6Ny41cHQiPicrKG16UC5tZWRpZGF8fCc8c3BhbiBzdHlsZT0iY29sb3I6I2FhYSI+4oCUPC9zcGFuPicpKyc8L3RkPicrCiAgICAgICAgICAnPHRkIHN0eWxlPSJmb250LXNpemU6Ny41cHQiPicrKG16UC5yZXNwfHwn4oCUJykrJzwvdGQ+JysKICAgICAgICAgICc8dGQgc3R5bGU9ImZvbnQtc2l6ZTo3LjVwdCI+JysobXpQLnByYXpvfHwn4oCUJykrJzwvdGQ+JysKICAgICAgICAgICc8dGQgc3R5bGU9ImZvbnQtc2l6ZTo3LjVwdCI+JysobXpQLnN0YXR1c3x8J1BlbmRlbnRlJykrJzwvdGQ+JysKICAgICAgICAnPC90cj4nOwogICAgICB9CiAgICAgIHBnKz0nPC90Ym9keT48L3RhYmxlPic7CiAgICAgIHBnKz0nPC9kaXY+JzsKICAgIH0KICAgIHBnKz0nPC9kaXY+JzsgLy8gZmVjaGEgYWVwLXBhZ2UKICAgIGxhdWRvcys9cGc7CiAgfQoKICAvLyDilIDilIAgUMOBR0lOQSBGSU5BTDogQ09OQ0xVU8ODTyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAKICB2YXIgY29uY2x1UGFnPSc8ZGl2IGNsYXNzPSJhZXAtcGFnZSI+JysKICAgICc8ZGl2IHN0eWxlPSJkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbi1ib3R0b206MTBweDtwYWRkaW5nLWJvdHRvbTo2cHg7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzdkMjAyMCI+JysKICAgICAgKGFlcC5sb2dvUG9zIT09J2NhcGFfb25seScmJmFlcC5sb2dvU3JjPyc8aW1nIHNyYz0iJythZXAubG9nb1NyYysnIiBzdHlsZT0iaGVpZ2h0OjI4cHg7b2JqZWN0LWZpdDpjb250YWluIiBhbHQ9IkxvZ28iLz4nOicnKSsKICAgICAgJzxzcGFuIHN0eWxlPSJmb250LXNpemU6N3B0O2NvbG9yOiM5NGEzYjgiPkFFUCBQc2ljb3Nzb2NpYWwgwrcgQ09QU09RIElJIMK3ICcrZHQrJzwvc3Bhbj4nKwogICAgJzwvZGl2PicrCiAgICAnPGRpdiBjbGFzcz0iYWVwLXBoIj5Db25jbHVzw6NvIEdlcmFsIGUgUmVjb21lbmRhw6fDtWVzPC9kaXY+JysKICAgIChjb25jbD8nPHAgY2xhc3M9ImFlcC10eHQiPicrY29uY2wrJzwvcD4nOic8cCBjbGFzcz0iYWVwLXR4dCIgc3R5bGU9ImNvbG9yOiM5NGEzYjg7Zm9udC1zdHlsZTppdGFsaWMiPkNvbmNsdXPDo28gbsOjbyBwcmVlbmNoaWRhLjwvcD4nKSsKICAgIChyZWNvbT8nPGRpdiBjbGFzcz0iYWVwLXBoMiI+UmVjb21lbmRhw6fDtWVzIEdlcmFpczwvZGl2PjxwIGNsYXNzPSJhZXAtdHh0Ij4nK3JlY29tKyc8L3A+JzonJykrCiAgICAnPGRpdiBjbGFzcz0iYWVwLXBoIiBzdHlsZT0ibWFyZ2luLXRvcDoxNnB4Ij5Bc3NpbmF0dXJhIGRvIFJlc3BvbnPDoXZlbCBUw6ljbmljbzwvZGl2PicrCiAgICAnPGRpdiBzdHlsZT0ibWFyZ2luLXRvcDo0MHB4O2JvcmRlci10b3A6MXB4IHNvbGlkICM3ZDIwMjA7cGFkZGluZy10b3A6NnB4O3dpZHRoOjI4MHB4Ij4nKwogICAgICAnPHAgc3R5bGU9ImZvbnQtc2l6ZTo4cHQ7Y29sb3I6IzMzNDE1NTttYXJnaW46MCI+PHN0cm9uZz4nK3Jlc3ArJzwvc3Ryb25nPjwvcD4nKwogICAgICAnPHAgc3R5bGU9ImZvbnQtc2l6ZTo3LjVwdDtjb2xvcjojNjQ3NDhiO21hcmdpbjoycHggMCI+UmVzcG9uc8OhdmVsIFTDqWNuaWNvPC9wPicrCiAgICAgICc8cCBzdHlsZT0iZm9udC1zaXplOjcuNXB0O2NvbG9yOiM2NDc0OGI7bWFyZ2luOjAiPkRhdGE6ICcrZHQrJzwvcD4nKwogICAgJzwvZGl2PicrCiAgJzwvZGl2Pic7CgogIHJldHVybiBjYXBhK2ludHJvK21hdHJpelJQTitpbmRpY2VQYWcrbGF1ZG9zK2NvbmNsdVBhZzsKfQoKdmFyIFBPUlRBTF9TVEFURT17Y2xpZW50ZUlkOiIiLGNsaWVudGVOb21lOiIiLGFlcDpudWxsLGRhZG9zOltdLGNhcmdvczpudWxsLGRlYnVnOltdfTsKCmZ1bmN0aW9uIHJlbmRlclBvcnRhbCgpewogIHZhciBhZXA9UE9SVEFMX1NUQVRFLmFlcDsKICB2YXIgZGFkb3M9UE9SVEFMX1NUQVRFLmRhZG9zOwogIHZhciBub21lPVBPUlRBTF9TVEFURS5jbGllbnRlTm9tZXx8IiI7CiAgdmFyIGNhcmdvcz1QT1JUQUxfU1RBVEUuY2FyZ29zfHxudWxsOwoKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgibG9hZGluZyIpLnN0eWxlLmRpc3BsYXk9Im5vbmUiOwogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJhcHAiKS5zdHlsZS5kaXNwbGF5PSJibG9jayI7CgogIGlmKCFhZXB8fCFkYWRvc3x8IWRhZG9zLmxlbmd0aCl7CiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiYXBwIikuaW5uZXJIVE1MPQogICAgICAnPGRpdiBjbGFzcz0icG9ydGFsLWVtcHR5Ij48ZGl2IHN0eWxlPSJmb250LXNpemU6NDhweDttYXJnaW4tYm90dG9tOjE2cHgiPvCfk4s8L2Rpdj4nKwogICAgICAnPGgyIHN0eWxlPSJjb2xvcjojMzM0MTU1O21hcmdpbi1ib3R0b206MTBweCI+TmVuaHVtIGRhZG8gZGlzcG9uw612ZWw8L2gyPicrCiAgICAgICc8cCBzdHlsZT0iY29sb3I6IzY0NzQ4YiI+RXN0ZSBwb3J0YWwgbsOjbyBjb250w6ltIGRhZG9zLiBDb250YXRlIG8gcmVzcG9uc8OhdmVsIHTDqWNuaWNvLjwvcD48L2Rpdj4nOwogICAgcmV0dXJuOwogIH0KCiAgZG9jdW1lbnQudGl0bGU9IlBvcnRhbCDigJQgIitub21lKyIg4oCUIEFFUCBQc2ljb3Nzb2NpYWwiOwogIHZhciBzdWI9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInN1Yi10aXR1bG8iKTsKICBpZihzdWIpIHN1Yi50ZXh0Q29udGVudD0iTWVuZGVzICYgU2lsdmEgwrcgIitub21lOwoKICAvLyBVc2FyIGdlcmFyUG9ydGFsSFRNTCBwYXJhIG1vbnRhciBvIGxhdWRvIGNvbXBsZXRvCiAgdmFyIGh0bWw9Z2VyYXJQb3J0YWxIVE1MKGFlcCxkYWRvcyxjYXJnb3MpOwogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJhcHAiKS5pbm5lckhUTUw9aHRtbDsKfQoKZnVuY3Rpb24gaW5pdCgpewogIHZhciBwYXJhbXM9bmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpOwogIHZhciBkPXBhcmFtcy5nZXQoImQiKTsKICB2YXIgaGFzaD1sb2NhdGlvbi5oYXNoLnJlcGxhY2UoIiMiLCIiKS50cmltKCk7CiAgdmFyIGRlYnVnPVtdOwoKICBpZihkKXsKICAgIGRlYnVnLnB1c2goIk1vZG86IFVSTCBiYXNlNjQiKTsKICAgIHRyeXsKICAgICAgdmFyIHBheWxvYWQ9SlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGF0b2IoZCkpKSk7CiAgICAgIFBPUlRBTF9TVEFURS5jbGllbnRlSWQ9cGF5bG9hZC5pZHx8InVybCI7CiAgICAgIFBPUlRBTF9TVEFURS5jbGllbnRlTm9tZT1wYXlsb2FkLm5vbWV8fCIiOwogICAgICBQT1JUQUxfU1RBVEUuYWVwPXBheWxvYWQuYWVwfHxudWxsOwogICAgICBQT1JUQUxfU1RBVEUuZGFkb3M9cGF5bG9hZC5kYWRvc3x8W107CiAgICAgIFBPUlRBTF9TVEFURS5jYXJnb3M9cGF5bG9hZC5jYXJnb3N8fG51bGw7CiAgICAgIGRlYnVnLnB1c2goIk9LOiAiK3BheWxvYWQubm9tZSk7CiAgICB9Y2F0Y2goZSl7ZGVidWcucHVzaCgiRVJSTzogIitlLm1lc3NhZ2UpO30KICB9IGVsc2UgaWYoaGFzaCl7CiAgICBQT1JUQUxfU1RBVEUuY2xpZW50ZUlkPWhhc2g7CiAgICBkZWJ1Zy5wdXNoKCJNb2RvOiBsb2NhbFN0b3JhZ2UgaWQ9IitoYXNoKTsKICAgIHRyeXsKICAgICAgdmFyIGRpcmV0bz1sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgicG9ydGFsX2RhZG9zXyIraGFzaCk7CiAgICAgIGlmKGRpcmV0byl7CiAgICAgICAgdmFyIHA9SlNPTi5wYXJzZShkaXJldG8pOwogICAgICAgIFBPUlRBTF9TVEFURS5jbGllbnRlTm9tZT1wLm5vbWV8fCIiOwogICAgICAgIFBPUlRBTF9TVEFURS5hZXA9cC5hZXB8fG51bGw7CiAgICAgICAgUE9SVEFMX1NUQVRFLmRhZG9zPXAuZGFkb3N8fFtdOwogICAgICAgIFBPUlRBTF9TVEFURS5jYXJnb3M9cC5jYXJnb3N8fG51bGw7CiAgICAgICAgZGVidWcucHVzaCgiT0s6ICIrcC5ub21lKTsKICAgICAgfSBlbHNlIHsKICAgICAgICB2YXIgcmF3PWxvY2FsU3RvcmFnZS5nZXRJdGVtKCJjb3Bzb3FfY2xpZW50ZXMiKTsKICAgICAgICBpZihyYXcpewogICAgICAgICAgdmFyIGNsaXM9SlNPTi5wYXJzZShyYXcpOwogICAgICAgICAgdmFyIGNsaT1jbGlzLmZpbmQoZnVuY3Rpb24oeCl7cmV0dXJuIHguaWQ9PT1oYXNoO30pOwogICAgICAgICAgaWYoY2xpKXsKICAgICAgICAgICAgUE9SVEFMX1NUQVRFLmNsaWVudGVOb21lPWNsaS5ub21lOwogICAgICAgICAgICBQT1JUQUxfU1RBVEUuYWVwPWNsaS5hZXB8fG51bGw7CiAgICAgICAgICAgIFBPUlRBTF9TVEFURS5kYWRvcz1jbGkuZGFkb3N8fFtdOwogICAgICAgICAgICBQT1JUQUxfU1RBVEUuY2FyZ29zPWNsaS5jYXJnb3N8fG51bGw7CiAgICAgICAgICAgIGRlYnVnLnB1c2goIk9LIHZpYSBjbGllbnRlczogIitjbGkubm9tZSk7CiAgICAgICAgICB9IGVsc2UgZGVidWcucHVzaCgiQ2xpZW50ZSBuw6NvIGVuY29udHJhZG8iKTsKICAgICAgICB9IGVsc2UgZGVidWcucHVzaCgibG9jYWxTdG9yYWdlIHZhemlvIik7CiAgICAgIH0KICAgIH1jYXRjaChlKXtkZWJ1Zy5wdXNoKCJFUlJPOiAiK2UubWVzc2FnZSk7fQogIH0gZWxzZSB7CiAgICBkZWJ1Zy5wdXNoKCJTZW0gcGFyw6JtZXRyb3MiKTsKICB9CgogIFBPUlRBTF9TVEFURS5kZWJ1Zz1kZWJ1ZzsKICByZW5kZXJQb3J0YWwoKTsKfQoKd2luZG93Lm9ubG9hZD1mdW5jdGlvbigpewogIGlmKHdpbmRvdy5EQURPU19DTElFTlRFKXsKICAgIFBPUlRBTF9TVEFURS5jbGllbnRlSWQ9d2luZG93LkRBRE9TX0NMSUVOVEUuaWR8fCIiOwogICAgUE9SVEFMX1NUQVRFLmNsaWVudGVOb21lPXdpbmRvdy5EQURPU19DTElFTlRFLm5vbWV8fCIiOwogICAgUE9SVEFMX1NUQVRFLmFlcD13aW5kb3cuREFET1NfQ0xJRU5URS5hZXB8fG51bGw7CiAgICBQT1JUQUxfU1RBVEUuZGFkb3M9d2luZG93LkRBRE9TX0NMSUVOVEUuZGFkb3N8fFtdOwogICAgUE9SVEFMX1NUQVRFLmNhcmdvcz13aW5kb3cuREFET1NfQ0xJRU5URS5jYXJnb3N8fG51bGw7CiAgICBQT1JUQUxfU1RBVEUuZGVidWc9WyJEYWRvcyBlbWJ1dGlkb3MiLCJDbGllbnRlOiAiKyh3aW5kb3cuREFET1NfQ0xJRU5URS5ub21lfHwiPyIpXTsKICAgIHJlbmRlclBvcnRhbCgpOwogIH1lbHNle2luaXQoKTt9Cn07Cgo=");
    var nomeArq=(cli.nome||"cliente").replace(/[^a-z0-9]/gi,"_").toLowerCase();
    var html="<!DOCTYPE html><html lang='pt-BR'><head>"
      +"<meta charset='UTF-8'/>"
      +"<meta name='viewport' content='width=device-width,initial-scale=1.0'/>"
      +"<title>Portal &#8212; "+cli.nome+"</title>"
      +"<style>"+portalCSS+"</style>"
      +"</head><body>"
      +"<div class='hdr'><div><h1>&#128203; Portal do Cliente &#8212; AEP Psicossocial</h1>"
      +"<p id='sub-titulo'>Mendes &amp; Silva &#183; "+cli.nome+"</p></div>"
      +"<div class='badges'>"
      +"<span class='badge-ro'>&#128274; Informa&#231;&#245;es bloqueadas</span>"
      +"<span class='badge-ed'>&#9999;&#65039; Plano de a&#231;&#227;o edit&#225;vel</span>"
      +"</div></div>"
      +"<div class='wrap'>"
      +"<div id='loading' style='text-align:center;padding:60px;color:#94a3b8'>&#9203; Carregando...</div>"
      +"<div id='app' style='display:none'></div>"
      +"</div>"
      +"<script>var DADOS_CLIENTE="+dadosJson+";"+portalJS+"<\/script>"
      +"</body></html>";
    var blob=new Blob([html],{type:"text/html;charset=utf-8"});
    var url=URL.createObjectURL(blob);
    var a=document.createElement("a");
    a.href=url;
    a.download="portal_"+nomeArq+".html";
    document.body.appendChild(a);
    a.click();
    setTimeout(function(){document.body.removeChild(a);URL.revokeObjectURL(url);},1000);
    try{localStorage.setItem("portal_dados_"+id,JSON.stringify(dadosCliente));}catch(e){}
    showMsg("&#128229; Portal gerado! Arquivo portal_"+nomeArq+".html baixado.");
  };

  window._excluir=id=>{excluirCliente(id);};
  window._exportar=id=>{exportarClienteJSON(id);};
  var clis=carregarClientes();
  // Estatísticas globais
  var _nResp=0,_nAEP=0,_nPortal=0;
  clis.forEach(function(c){
    _nResp+=(c.nResp!==undefined?c.nResp:(c.dados||[]).length);
    if(c.aep&&c.aep.empresa) _nAEP++;
    if(c.portalLink) _nPortal++;
  });

  var html='<div class="card">';
  // Painel de estatísticas
  if(clis.length>0){
    html+='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:8px;margin-bottom:16px;padding:12px;background:#fdf8f8;border-radius:10px;border:1px solid #f0dada">';
    [['👥',clis.length,'Clientes'],['📊',_nResp,'Respondentes'],['📋',_nAEP,'ARPs'],['🌐',_nPortal,'Portais']].forEach(function(s){
      html+='<div style="text-align:center;padding:8px;background:white;border-radius:8px;border:1px solid #f0dada">';
      html+='<div style="font-size:16px">'+s[0]+'</div>';
      html+='<div style="font-size:18px;font-weight:700;color:#6B1F2A">'+s[1]+'</div>';
      html+='<div style="font-size:10px;color:#64748b;font-weight:600">'+s[2]+'</div>';
      html+='</div>';
    });
    html+='</div>';
  }
  // Topbar
  html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px">';
  html+='<div><h3 style="margin:0;color:#6B1F2A;font-size:15px;font-weight:600">Gerenciador de Clientes</h3>';
  html+='<p style="margin:2px 0 0;font-size:11px;color:#94a3b8">Gerencie os clientes e suas avaliações ARP</p></div>';
  html+='<div style="display:flex;gap:6px;flex-wrap:wrap">';
  html+='<button onclick="backupCompleto()" style="padding:6px 12px;border-radius:8px;border:1px solid #e2e8f0;background:white;color:#475569;font-size:12px;cursor:pointer">💾 Backup</button>';
  html+='<button onclick="restaurarBackup()" style="padding:6px 12px;border-radius:8px;border:1px solid #e2e8f0;background:white;color:#475569;font-size:12px;cursor:pointer">📂 Restaurar</button>';
  html+='<button onclick="importarClienteJSON()" style="padding:6px 12px;border-radius:8px;border:1px solid #e2e8f0;background:white;color:#475569;font-size:12px;cursor:pointer">📥 Importar JSON</button>';
  html+='<button onclick="novoCliente()" style="padding:6px 14px;border-radius:8px;border:none;background:#6B1F2A;color:white;font-size:12px;font-weight:600;cursor:pointer">+ Novo Cliente</button>';
  html+='</div></div>';
  // Busca
  if(clis.length>=4){
    html+='<div style="margin-bottom:12px">';
    html+='<input id="busca-cli" type="text" placeholder="🔍 Buscar por nome..." oninput="window._filtroCliente=this.value;renderizarInterface()" style="width:100%;padding:8px 12px;border:1px solid #e2e8f0;border-radius:8px;font-size:13px;box-sizing:border-box">';
    html+='</div>';
    // Aplicar filtro
    var _filtro=(window._filtroCliente||'').toLowerCase().trim();
    if(_filtro) clis=clis.filter(function(c){return (c.nome||'').toLowerCase().includes(_filtro);});
  }
  if(!clis.length){html+='<div style="text-align:center;padding:60px 20px;color:#94a3b8"><div style="font-size:40px;margin-bottom:12px">📋</div><p style="font-size:14px">Nenhum cliente cadastrado.<br>Clique em <strong>+ Novo Cliente</strong> para começar.</p></div>';}
  else{
    html+='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:12px">';
    clis.forEach(cli=>{
      var ativo=cli.id===clienteAtual;
      var temAEP=cli.aep&&cli.aep.empresa;
      var nResp=cli.nResp!==undefined?cli.nResp:(cli.dados?cli.dados.length:0);
      // Card
      html+='<div style="border:1px solid '+(ativo?'#7d2020':'#e2e8f0')+';border-radius:12px;overflow:hidden;background:white;box-shadow:'+(ativo?'0 0 0 2px #7d2020':'none')+'">';
      // Cabeçalho vinho
      html+='<div style="background:#6B1F2A;padding:10px 12px;display:flex;justify-content:space-between;align-items:flex-start">';
      html+='<div style="font-size:12px;font-weight:600;color:white;line-height:1.35;flex:1;margin-right:6px">'+cli.nome+'</div>';
      html+='<button data-cid="'+cli.id+'" onclick="window._excluir(this.dataset.cid)" style="background:rgba(255,255,255,.15);border:none;color:white;width:22px;height:22px;border-radius:50%;cursor:pointer;font-size:11px;flex-shrink:0;display:flex;align-items:center;justify-content:center" title="Excluir cliente">✕</button>';
      html+='</div>';
      // Corpo
      html+='<div style="padding:10px 12px">';
      // Status pill
      if(ativo){
        html+='<div style="display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:20px;font-size:10px;font-weight:600;background:#fdf2f2;color:#7d2020;margin-bottom:8px"><span style="width:6px;height:6px;border-radius:50%;background:#7d2020;display:inline-block"></span>Ativo</div>';
      } else if(temAEP){
        html+='<div style="display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:20px;font-size:10px;font-weight:600;background:#EAF3DE;color:#3B6D11;margin-bottom:8px"><span style="width:6px;height:6px;border-radius:50%;background:#3B6D11;display:inline-block"></span>AEP preenchida</div>';
      } else {
        html+='<div style="display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:20px;font-size:10px;font-weight:600;background:#F1EFE8;color:#5F5E5A;margin-bottom:8px"><span style="width:6px;height:6px;border-radius:50%;background:#888780;display:inline-block"></span>Em branco</div>';
      }
      // Meta
      html+='<div style="font-size:11px;color:#64748b;margin-bottom:10px;line-height:1.7">';
      html+='Respondentes: <span style="color:#1e293b;font-weight:600">'+nResp+'</span><br>';
      html+='AEP: <span style="color:#1e293b;font-weight:600">'+(temAEP?'Preenchida':'Em branco')+'</span>';
      html+='</div>';
      // Botão principal
      html+='<button data-cid="'+cli.id+'" onclick="window._ativar(this.dataset.cid)" style="width:100%;padding:7px 0;background:#6B1F2A;color:white;border:none;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;margin-bottom:6px">'+(ativo?'Recarregar':'Abrir')+'</button>';
      // Ações secundárias
      html+='<div style="display:flex;gap:5px;margin-bottom:6px">';
      html+='<button data-cid="'+cli.id+'" onclick="window._exportar(this.dataset.cid)" style="flex:1;padding:5px 0;background:#f8fafc;color:#475569;border:1px solid #e2e8f0;border-radius:7px;font-size:11px;cursor:pointer" title="Exportar JSON">JSON</button>';
      html+='<button data-cid="'+cli.id+'" onclick="window._publicarPortal(this.dataset.cid)" style="flex:1;padding:5px 0;background:#f8fafc;color:#475569;border:1px solid #e2e8f0;border-radius:7px;font-size:11px;cursor:pointer" title="Publicar portal">Publicar</button>';
      html+='<button data-cid="'+cli.id+'" onclick="window._importCargos(this.dataset.cid)" style="flex:1;padding:5px 0;background:#f8fafc;color:#475569;border:1px solid #e2e8f0;border-radius:7px;font-size:11px;cursor:pointer" title="Importar cargos">Cargos</button>';
      html+='</div>';
      html+='<div style="display:flex;gap:5px">';
      html+='<button data-cid="'+cli.id+'" onclick="window._gerirSenhaPortal(this.dataset.cid)" style="flex:1;padding:5px 0;background:#f8fafc;color:#475569;border:1px solid #e2e8f0;border-radius:7px;font-size:11px;cursor:pointer" title="Definir senha">Senha</button>';
      if(cli.portalLink){
        html+='<button data-cid="'+cli.id+'" onclick="window._verPortalAdm(this.dataset.cid)" style="flex:1;padding:5px 0;background:#f8fafc;color:#475569;border:1px solid #e2e8f0;border-radius:7px;font-size:11px;cursor:pointer" title="Ver portal">Portal</button>';
      }
      html+='</div>';
      // Link do portal (discreto)
      if(cli.portalLink){
        html+='<div style="margin-top:7px;padding:5px 8px;background:#fdf8f8;border-left:3px solid #6B1F2A;border-radius:0 4px 4px 0;font-size:9px;color:#94a3b8">';
        html+='<span style="color:#7d2020;font-weight:600">Portal:</span> <span style="word-break:break-all">'+cli.portalLink.replace('https://','').substring(0,40)+(cli.portalLink.length>50?'...':'')+'</span>';
        html+='</div>';
      }
      html+='</div>'; // fecha body
      html+='</div>'; // fecha card
    });
    html+='</div>';
  }
  return html+'</div>';
}
function carregarLogo(inp){
  var file=inp.files[0];if(!file)return;
  var reader=new FileReader();
  reader.onload=e=>{aep.logoSrc=e.target.result;salvarAEP();showMsg("Logo carregada!");render();};
  reader.readAsDataURL(file);inp.value="";
}
function removerLogo(){aep.logoSrc="";salvarAEP();render();}
function triggerLogoUpload(){document.getElementById("logo-file-input").click();}

carregarAEP();

function showMsg(txt,ok=true){msgData={txt,ok};render();if(msgTimer)clearTimeout(msgTimer);msgTimer=setTimeout(()=>{msgData=null;render();},5000);}

function importar(inp){
  const file=inp.files[0];if(!file)return;
  const encs=["UTF-8","windows-1252","ISO-8859-1"];let idx=0;
  function go(){const r=new FileReader();r.onload=ev=>{const n=parseCSV(ev.target.result||"");if(!n.length&&idx<encs.length-1){idx++;go();return;}if(!n.length){showMsg("⚠️ Nenhum dado encontrado.",false);return;}dados=n;filtroSetor="Todos";salvarAEP();showMsg(`✅ ${n.length} respondentes importados! Aba ARP atualizada automaticamente.`);tabAtual="aep";render();};r.onerror=()=>{if(idx<encs.length-1){idx++;go();}else showMsg("❌ Erro ao ler.",false);};r.readAsText(file,encs[idx]);}
  go();inp.value="";
}

function fecharModal(){modalSetor=null;copiado=false;render();}
function copiarPrompt(){const el=document.getElementById("pt");if(!el)return;navigator.clipboard.writeText(el.value).then(()=>{copiado=true;render();}).catch(()=>{el.select();document.execCommand("copy");copiado=true;render();});}
function gerarPrompt(setor){
  const sub=dados.filter(d=>d.setor===setor),c=sub.map(r=>r.comentario).filter(c=>c&&c.length>3);
  const{mDom}=calcMedias(sub);
  return`Você é especialista em saúde ocupacional. Analise o setor "${setor}" do questionário COPSOQ II.\n\n📊 MÉDIAS (1,00–5,00 | menor = mais favorável):\n${DOMS.map(d=>{const m=mDom[d];return m?`  • ${d}: ${fmt(m)} (${CL_TXT[classif(m)]})`:null;}).filter(Boolean).join("\n")}\n\n💬 COMENTÁRIOS (${c.length}):\n${c.map((x,i)=>`${i+1}. "${x}"`).join("\n")}\n\nFaça análise com:\n1. **Resumo geral**\n2. **Pontos de atenção**\n3. **Pontos positivos**\n4. **Principais queixas**\n5. **Sugestões de melhoria**\n\nResponda em português brasileiro.`;
}

// ════════════════════════════════════════════════════════════════
// ABA AEP — Funções de atualização de campos
// ════════════════════════════════════════════════════════════════
function aepSet(campo,valor){
  aep[campo]=valor;salvarAEP();
  // mostrar saved sem re-render completo
  const el=document.getElementById("aep-saved");
  if(el){el.style.display="inline";clearTimeout(el._t);el._t=setTimeout(()=>{el.style.display="none";},1500);}
}
function matrizSet(i,campo,valor){
  aep.matriz[i][campo]=valor;salvarAEP();
  // Recalcula nível de risco ao mudar P, S ou C — usa perfil PGR se ativo
  if(campo==="p"||campo==="s"||campo==="c"){
    const p=parseInt(aep.matriz[i].p)||0;
    const s=parseInt(aep.matriz[i].s)||0;
    const c=parseInt(aep.matriz[i].c)||0;
    const el_nr=document.getElementById("nr_val_"+i);
    const el_cl=document.getElementById("nr_cl_"+i);
    var perfil=getPGR();
    if(perfil){
      var r=calcRiscoPGR(p,s,c);
      if(r){
        if(el_nr){el_nr.textContent=(typeof r.rpn==='number')?r.rpn.toFixed(2):'—';el_nr.style.background=r.bg;}
        if(el_cl){el_cl.textContent=r.nivel;el_cl.style.background=r.bg;}
      } else {
        if(el_nr){el_nr.textContent="—";el_nr.style.background="#f8fafc";}
        if(el_cl){el_cl.textContent="—";el_cl.style.background="#f8fafc";}
      }
    } else if(p&&s&&c){
      const nr=p*s/c;
      const bgR=nr<=1?"#dcfce7":nr<=2?"#d1fae5":nr<=4?"#fef9c3":nr<=8?"#fee2e2":"#ffb3b3";
      if(el_nr){el_nr.textContent=nr.toFixed(2);el_nr.style.background=bgR;}
      if(el_cl){el_cl.textContent=nRisco(p,s,c);el_cl.style.background=bgR;}
    } else {
      if(el_nr){el_nr.textContent="—";el_nr.style.background="#f8fafc";}
      if(el_cl){el_cl.textContent="—";el_cl.style.background="#f8fafc";}
    }
  }
  const el=document.getElementById("aep-saved");
  if(el){el.style.display="inline";clearTimeout(el._t);el._t=setTimeout(()=>{el.style.display="none";},1500);}
}
function hierSet(i,campo,valor){aep.hier[i][campo]=valor;salvarAEP();}

// ════════════════════════════════════════════════════════════════
// GERADOR DE RELATÓRIO PDF
// ════════════════════════════════════════════════════════════════
function gerarRelatorio(){
  if(!dados.length){showMsg("⚠️ Importe o CSV antes de exportar.",false);return;}
  const target=filtroSetor==="Todos"?dados:dados.filter(d=>d.setor===filtroSetor);
  const{mDim,mDom}=calcMedias(target);
  const agora=new Date().toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"});
  const tituloFiltro=filtroSetor==="Todos"?"Todos os setores":filtroSetor;
  const contDom={};DOMS.forEach(d=>contDom[d]={F:0,I:0,R:0});
  target.forEach(l=>{DOMS.forEach(dom=>{const vals=Q.filter(q=>q.dom===dom).map(q=>toScore(q.n-1,l.respostas[q.n-1])).filter(v=>v!==null);if(!vals.length)return;const cl=classif(avg(vals));if(cl==="fav")contDom[dom].F++;else if(cl==="int")contDom[dom].I++;else if(cl==="ris")contDom[dom].R++;});});
  const porSetor=[...new Set(dados.map(d=>d.setor))].sort().map(s=>{const sub=dados.filter(d=>d.setor===s);const{mDom:md}=calcMedias(sub);return{setor:s,n:sub.length,md,coments:sub.map(r=>r.comentario).filter(c=>c&&c.length>3)};});
  const pb=cl=>cl?`<span class="p-badge p-${cl}">${CL_TXT[cl]}</span>`:`<span style="color:#aaa">—</span>`;
  const pt=cl=>cl?`t-${cl}`:"";
  const headCor={fav:"#22c55e",int:"#f59e0b",ris:"#ef4444"};
  const pag1=`<div class="p-page">
    <div class="p-header"><div><h1>Relatório COPSOQ II</h1><p>Avaliação dos Fatores de Risco Psicossocial no Trabalho</p><p style="margin-top:2px;">Filtro: <strong>${tituloFiltro}</strong> | <strong>${target.length} respondentes</strong></p></div><div class="p-meta"><div>Emissão: ${agora}</div><div>Escala 1,00–5,00 | menor = favorável</div></div></div>
    <div class="p-section"><div class="p-section-title">Sumário Executivo</div>
    <div class="p-dom-grid">${DOMS.map(dom=>{const m=mDom[dom],cl=classif(m),cor=headCor[cl]||"#94a3b8";return`<div class="p-dom-card"><div class="p-dom-card-head" style="background:${cor}"><div class="p-dom-label">${dom}</div><div class="p-dom-avg">${fmt(m)}</div></div><div class="p-dom-card-body"><span>${cl?CL_TXT[cl]:"Sem dados"}</span></div></div>`;}).join("")}</div></div>
    <div class="p-section"><div class="p-section-title">Resultado por Domínio</div>
    <table class="p-table"><thead><tr><th>Domínio</th><th class="c">✅</th><th class="c">🟡</th><th class="c">🔴</th><th class="c">Média</th><th class="c">Classificação</th></tr></thead><tbody>${DOMS.map((dom,i)=>{const m=mDom[dom],cl=classif(m);return`<tr><td><strong>${dom}</strong></td><td class="c" style="color:#16a34a;font-weight:700;">${contDom[dom].F}</td><td class="c" style="color:#d97706;font-weight:700;">${contDom[dom].I}</td><td class="c" style="color:#dc2626;font-weight:700;">${contDom[dom].R}</td><td class="c"><strong class="${pt(cl)}">${fmt(m)}</strong></td><td class="c">${pb(cl)}</td></tr>`;}).join("")}</tbody></table></div>
    <div class="p-footer"><span>COPSOQ II — Fatores de Risco Psicossocial</span><span>Escala 1,00–5,00 | Favorável ≤2,33 | Intermediária 2,34–3,66 | Risco >3,66</span></div></div>`;
  const pag2=`<div class="p-page">
    <div class="p-header"><div><h1>Resultado por Setor</h1><p>${dados.length} respondentes totais | ${porSetor.length} setores</p></div><div class="p-meta">${agora}</div></div>
    ${porSetor.map(({setor,n,md})=>`<div class="p-setor-block"><div class="p-setor-head"><h3>🏢 ${setor}</h3><span>${n} respondentes</span></div><table class="p-table" style="margin:0"><thead><tr><th>Domínio</th><th class="c">Média</th><th class="c">Classificação</th></tr></thead><tbody>${DOMS.map((dom,i)=>{const m=md[dom],cl=classif(m);return`<tr><td>${dom}</td><td class="c"><strong class="${pt(cl)}">${fmt(m)}</strong></td><td class="c">${pb(cl)}</td></tr>`;}).join("")}</tbody></table></div>`).join("")}
    <div class="p-footer"><span>COPSOQ II</span><span>${agora}</span></div></div>`;
  const totalC=porSetor.reduce((a,p)=>a+p.coments.length,0);
  const pag3=`<div class="p-page">
    <div class="p-header"><div><h1>Questões Abertas</h1><p>${totalC} comentários em ${porSetor.length} setores</p></div><div class="p-meta">${agora}</div></div>
    ${porSetor.map(({setor,coments})=>{const v=coments.filter(c=>c&&c.length>3);return`<div style="margin-bottom:11px"><p style="font-size:8.5pt;font-weight:700;color:#7d2020;margin-bottom:4px;">💬 ${setor} (${v.length} comentários)</p>${v.length===0?`<p style="color:#aaa;font-style:italic;font-size:7.5pt">Nenhum comentário.</p>`:v.map((c,i)=>`<div class="p-comentario">#${i+1} ${c}</div>`).join("")}</div>`;}).join("")}
    <div class="p-footer"><span>COPSOQ II</span><span>${agora}</span></div></div>`;
  document.getElementById("relatorio-pdf").innerHTML=pag1+pag2+pag3;
  setTimeout(()=>window.print(),200);
}

// ════════════════════════════════════════════════════════════════
// RENDER ABA AEP
// ════════════════════════════════════════════════════════════════
function renderAEP(){  const total=dados.length;
  const setores=[...new Set(dados.map(d=>d.setor))].sort();
  if(!aep.ghe)aep.ghe={};

  // helpers
  function gv(s,k,fb){const o=aep.ghe[s];return(o&&o[k]!=null)?o[k]:fb;}
  function sv(s,k,v){if(!aep.ghe[s])aep.ghe[s]={};aep.ghe[s][k]=v;salvarAEP();flashSaved();}
  function gmz(s,i){if(!aep.ghe[s])aep.ghe[s]={};if(!aep.ghe[s].mz)aep.ghe[s].mz=DOMS.map(()=>({}));return aep.ghe[s].mz[i];}
  function smz(s,i,k,v){
    gmz(s,i)[k]=v;salvarAEP();flashSaved();
    if(k==='p'||k==='s'||k==='c'){
      const mz=gmz(s,i),p=+mz.p||0,sv2=+mz.s||0,c=+mz.c||0;
      const sid=encId(s);
      const enr=document.getElementById('nr_'+sid+'_'+i);
      const ecl=document.getElementById('cl_'+sid+'_'+i);
      var perfil=getPGR();
      if(perfil){
        var r=calcRiscoPGR(p,sv2,c);
        if(r){if(enr){enr.textContent=(typeof r.rpn==='number')?r.rpn.toFixed(2):'—';enr.style.background=r.bg;}if(ecl){ecl.textContent=r.nivel;ecl.style.background=r.bg;}}
        else{if(enr){enr.textContent='—';enr.style.background='#f8fafc';}if(ecl){ecl.textContent='—';ecl.style.background='#f8fafc';}}
      } else if(p&&sv2&&c){const nr=p*sv2/c,bg=nrBg(nr);if(enr){enr.textContent=nr.toFixed(2);enr.style.background=bg;}if(ecl){ecl.textContent=nRisco(p,sv2,c);ecl.style.background=bg;}}
      else{if(enr){enr.textContent='—';enr.style.background='#f8fafc';}if(ecl){ecl.textContent='—';ecl.style.background='#f8fafc';}}
    }
  }
  function ghr(s,i){if(!aep.ghe[s])aep.ghe[s]={};if(!aep.ghe[s].hr)aep.ghe[s].hr=DOMS.map(()=>({}));return aep.ghe[s].hr[i];}
  function shr(s,i,k,v){ghr(s,i)[k]=v;salvarAEP();flashSaved();}
  function encId(s){return s.replace(/[^a-z0-9]/gi,'_');}
  function nrBg(nr){return nr<=1?'#dcfce7':nr<=2?'#d1fae5':nr<=4?'#fef9c3':nr<=7?'#fed7aa':'#fee2e2';}
  function flashSaved(){const el=document.getElementById('aep-saved');if(el){el.style.display='inline';clearTimeout(el._t);el._t=setTimeout(()=>{el.style.display='none';},1500);}}
  window._smz=smz;window._shr=shr;window._sv=sv;
  window._svHier=function(setor,nivel,campo,valor){
    if(!aep.ghe[setor])aep.ghe[setor]={};
    if(!aep.ghe[setor].hierUnica)aep.ghe[setor].hierUnica={};
    if(!aep.ghe[setor].hierUnica[nivel])aep.ghe[setor].hierUnica[nivel]={};
    aep.ghe[setor].hierUnica[nivel][campo]=valor;
    salvarAEP();flashSaved();
  };

  // ── PLANO DE AÇÃO CONSOLIDADO ────────────────────────────────
  if(!aep.planoConsolidado) aep.planoConsolidado=[];
  
  // Re-consolidar plano existente: agrupar ações do mesmo domínio
  function reconsolidarPlano(){
    if(aep._planoMigrado && aep.planoConsolidado && aep.planoConsolidado.length>0){
      var doms={};var temDup=false;
      aep.planoConsolidado.forEach(function(a){
        if(doms[a.dominio||'']) temDup=true;
        doms[a.dominio||'']=true;
      });
      if(!temDup) return;
      
      // Helper: juntar textos diferentes sem repetir
      function juntarTextos(arr){
        var unicos=[];
        arr.forEach(function(t){
          var limpo=(t||'').trim();
          if(!limpo) return;
          // Verificar se já existe um texto igual ou contido
          var jaExiste=unicos.some(function(u){return u===limpo || u.indexOf(limpo)>=0 || limpo.indexOf(u)>=0;});
          if(!jaExiste) unicos.push(limpo);
          else {
            // Se o novo é mais longo e contém um existente, substituir
            for(var ui=0;ui<unicos.length;ui++){
              if(limpo.indexOf(unicos[ui])>=0 && limpo.length>unicos[ui].length){unicos[ui]=limpo;break;}
            }
          }
        });
        return unicos.join(' | ');
      }
      
      var pc=aep.planoConsolidado;
      var porDom={};
      pc.forEach(function(a){
        var dom=a.dominio||'_sem_dominio_';
        if(!porDom[dom]) porDom[dom]={setores:[],acoes:[],medidas:[],responsaveis:[],prazos:[],evidencias:[],status:'Pendente',prioridade:'',id:a.id};
        var g=porDom[dom];
        // Juntar setores
        (a.setores||[]).forEach(function(s){if(g.setores.indexOf(s)<0) g.setores.push(s);});
        // Coletar todos os textos diferentes
        if(a.acao) g.acoes.push(a.acao);
        if(a.medida) g.medidas.push(a.medida);
        if(a.responsavel) g.responsaveis.push(a.responsavel);
        if(a.prazo) g.prazos.push(a.prazo);
        if(a.evidencia) g.evidencias.push(a.evidencia);
        // Prioridade: pior caso
        if(a.prioridade==='ris') g.prioridade='ris';
        else if(a.prioridade==='int'&&g.prioridade!=='ris') g.prioridade='int';
        // Status: manter o mais avançado
        if(a.status==='Concluído') g.status='Concluído';
        else if(a.status==='Em andamento'&&g.status!=='Concluído') g.status='Em andamento';
      });
      
      var resultado=[];
      Object.keys(porDom).forEach(function(dom){
        var g=porDom[dom];
        resultado.push({
          id:g.id||('pc_'+Date.now()+'_'+Math.random().toString(36).substr(2,5)),
          setores:g.setores.sort(),
          dominio:dom==='_sem_dominio_'?'':dom,
          acao:juntarTextos(g.acoes),
          medida:juntarTextos(g.medidas),
          responsavel:juntarTextos(g.responsaveis),
          prazo:juntarTextos(g.prazos),
          status:g.status,
          evidencia:juntarTextos(g.evidencias),
          prioridade:g.prioridade,
          origem:'consolidado'
        });
      });
      
      if(resultado.length<pc.length){
        aep.planoConsolidado=resultado;
        salvarAEP();
      }
    }
  }
  reconsolidarPlano();
  
  // Migrar dados existentes dos planos individuais para o consolidado (apenas uma vez)
  function migrarPlanoIndividual(){
    if(aep._planoMigrado) return;
    var setoresExist=Object.keys(aep.ghe||{});
    // Agrupar por DOMÍNIO — juntar setores, concatenar textos diferentes
    var porDom={};
    setoresExist.forEach(function(setor){
      var mzS=(aep.ghe[setor]&&aep.ghe[setor].mz)||[];
      DOMS.forEach(function(dom,di){
        var mz=mzS[di]||{};
        if(!mz.acoes&&!mz.medida&&!mz.resp&&!mz.prazo) return;
        if(!porDom[dom]) porDom[dom]={setores:[],acoes:[],medidas:[],responsaveis:[],prazos:[],evidencias:[],status:'Pendente'};
        if(porDom[dom].setores.indexOf(setor)<0) porDom[dom].setores.push(setor);
        // Coletar textos com identificação do setor quando diferente
        if(mz.acoes) porDom[dom].acoes.push({setor:setor,texto:mz.acoes});
        if(mz.medida) porDom[dom].medidas.push({setor:setor,texto:mz.medida});
        if(mz.resp) porDom[dom].responsaveis.push({setor:setor,texto:mz.resp});
        if(mz.prazo) porDom[dom].prazos.push({setor:setor,texto:mz.prazo});
        if(mz.evidencia) porDom[dom].evidencias.push({setor:setor,texto:mz.evidencia});
        if(mz.status==='Em andamento'||mz.status==='Concluído') porDom[dom].status=mz.status;
      });
    });
    // Helper: juntar textos sem repetir, prefixando setor quando há diferenças
    function consolidarTextos(arr){
      if(!arr||!arr.length) return '';
      var textos={};
      arr.forEach(function(item){
        var t=(item.texto||'').trim();
        if(!t) return;
        if(!textos[t]) textos[t]=[];
        if(textos[t].indexOf(item.setor)<0) textos[t].push(item.setor);
      });
      var chaves=Object.keys(textos);
      if(chaves.length===0) return '';
      if(chaves.length===1) return chaves[0];
      // Múltiplos textos diferentes: prefixar com setores
      return chaves.map(function(t){return '['+textos[t].join(', ')+']: '+t;}).join(' | ');
    }
    // Verificar quais domínios já existem no consolidado
    var domExist={};
    (aep.planoConsolidado||[]).forEach(function(a){domExist[a.dominio||'']=true;});
    Object.keys(porDom).forEach(function(dom){
      if(domExist[dom]) return;
      var g=porDom[dom];
      aep.planoConsolidado.push({
        id:'pc_'+Date.now()+'_'+Math.random().toString(36).substr(2,5),
        setores:g.setores.sort(),
        dominio:dom,
        acao:consolidarTextos(g.acoes),
        medida:consolidarTextos(g.medidas),
        responsavel:consolidarTextos(g.responsaveis),
        prazo:consolidarTextos(g.prazos),
        status:g.status,
        evidencia:consolidarTextos(g.evidencias),
        origem:'migrado'
      });
    });
    // Atualizar setores em ações já existentes
    (aep.planoConsolidado||[]).forEach(function(a){
      if(porDom[a.dominio]){
        (porDom[a.dominio].setores||[]).forEach(function(s){
          if((a.setores||[]).indexOf(s)<0){
            if(!a.setores) a.setores=[];
            a.setores.push(s);
          }
        });
        a.setores=(a.setores||[]).sort();
      }
    });
    aep._planoMigrado=true;
    salvarAEP();
  }
  
  function deduplicarPlano(){
    var pc=aep.planoConsolidado||[];
    var grupos={};
    pc.forEach(function(a){
      var chave=(a.acao||'').trim().toLowerCase()+'||'+(a.dominio||'');
      if(!chave||chave==='||') return;
      if(!grupos[chave]) grupos[chave]={item:Object.assign({},a),setores:[]};
      (a.setores||[]).forEach(function(s){
        if(grupos[chave].setores.indexOf(s)<0) grupos[chave].setores.push(s);
      });
      // Manter o texto mais completo
      if((a.medida||'').length>(grupos[chave].item.medida||'').length) grupos[chave].item.medida=a.medida;
      if((a.responsavel||'').length>(grupos[chave].item.responsavel||'').length) grupos[chave].item.responsavel=a.responsavel;
      if((a.prazo||'').length>(grupos[chave].item.prazo||'').length) grupos[chave].item.prazo=a.prazo;
    });
    var resultado=[];
    Object.keys(grupos).forEach(function(k){
      var g=grupos[k];
      g.item.setores=g.setores.sort();
      g.item.id=g.item.id||('pc_'+Date.now()+'_'+Math.random().toString(36).substr(2,5));
      resultado.push(g.item);
    });
    aep.planoConsolidado=resultado;
  }
  
  function sugerirPlanoAcao(){
    var setoresAll=Object.keys(aep.ghe||{});
    // Agrupar POR DOMÍNIO — juntar todos os setores que têm o mesmo domínio em risco/intermediário
    var porDominio={};  // dom -> {setores:[], medidasHier:[], maiorRPN:0, piorCl:'int'}
    
    setoresAll.forEach(function(setor){
      var mzS=(aep.ghe[setor]&&aep.ghe[setor].mz)||[];
      var hrS=(aep.ghe[setor]&&aep.ghe[setor].hr)||[];
      var hierU=aep.ghe[setor]&&aep.ghe[setor].hierUnica||{};
      
      DOMS.forEach(function(dom,di){
        var mz=mzS[di]||{};
        var media=0;
        if(dados&&dados.length){
          var vals=dados.filter(function(d){return d.setor===setor;}).map(function(d){return mediaDom(d,dom);}).filter(function(v){return v>0;});
          media=vals.length?vals.reduce(function(a,b){return a+b;},0)/vals.length:0;
        }
        var cl=classif(media);
        if(cl!=='int'&&cl!=='ris') return;
        
        if(!porDominio[dom]) porDominio[dom]={setores:[],medidasHier:[],maiorRPN:0,piorCl:'int',acaoExistente:'',medidaExistente:''};
        if(porDominio[dom].setores.indexOf(setor)<0) porDominio[dom].setores.push(setor);
        if(cl==='ris') porDominio[dom].piorCl='ris';
        
        // Calcular RPN deste setor/domínio
        var p=+mz.p||0,s=+mz.s||0,cv=+mz.c||0;
        if(p&&s&&cv){
          var rpn;
          var _pf=getPGR();
          if(_pf){var _r=calcRiscoPGR(p,s,cv);rpn=_r?_r.rpn:0;}
          else{rpn=(cv?p*s/cv:0);}
          if(rpn>porDominio[dom].maiorRPN) porDominio[dom].maiorRPN=rpn;
        }
        
        // Coletar medidas da hierarquia deste setor
        var hr=hrS[di]||{};
        var HKEYS=['elim','subst','eng','adm','ind'];
        var HNAMES=['Eliminação','Substituição','Eng./Coletiva','Administrativa','Individual'];
        HKEYS.forEach(function(hk,hi){
          var med=hr[hk+'_med']||'';
          if(med){
            var txt=HNAMES[hi]+': '+med;
            if(porDominio[dom].medidasHier.indexOf(txt)<0) porDominio[dom].medidasHier.push(txt);
          }
        });
        // Hierarquia única do setor
        ['eliminacao','substituicao','engenharia','administrativa','individual'].forEach(function(nv){
          if(hierU[nv]&&hierU[nv].medidas){
            var txt=nv.charAt(0).toUpperCase()+nv.slice(1)+': '+hierU[nv].medidas;
            if(porDominio[dom].medidasHier.indexOf(txt)<0) porDominio[dom].medidasHier.push(txt);
          }
        });
        
        // Coletar dados já preenchidos no plano individual (ação/medida)
        if(mz.acoes&&mz.acoes.length>(porDominio[dom].acaoExistente||'').length) porDominio[dom].acaoExistente=mz.acoes;
        if(mz.medida&&mz.medida.length>(porDominio[dom].medidaExistente||'').length) porDominio[dom].medidaExistente=mz.medida;
      });
    });
    
    // Gerar UMA ação por domínio com todos os setores abrangidos
    var sugestoes=[];
    Object.keys(porDominio).forEach(function(dom){
      var g=porDominio[dom];
      var acaoTexto=g.acaoExistente||
        (g.medidasHier.length>0?g.medidasHier.join('; '):
        (function(){
          var _pa=getPGR();
          var limA=_pa?_pa.graus[_pa.graus.length>=5?3:_pa.graus.length-2].rpnMax:4;
          var limM=_pa?_pa.graus[_pa.graus.length>=5?2:Math.floor(_pa.graus.length/2)].rpnMax:2;
          if(g.maiorRPN>limA) return 'Ação corretiva urgente — Risco elevado. Intervenção prioritária para redução imediata do risco.';
          if(g.maiorRPN>limM) return 'Ação preventiva necessária — Risco moderado. Implementação de medidas de redução do risco com monitoramento periódico.';
          if(g.maiorRPN>0) return 'Ação de manutenção e monitoramento — Risco baixo/aceitável. Manter controles existentes e reavaliar na próxima aplicação do COPSOQ II (NR-01 §1.5.4.4.6).';
          return null;
        }())||
        (g.maiorRPN>0?'Ação de monitoramento.':
         g.piorCl==='ris'?'Ação corretiva necessária — domínio em situação de RISCO (COPSOQ II). Aguardando definição de P e S pelo responsável técnico para classificação do risco.':
         'Ação preventiva recomendada — domínio em situação INTERMEDIÁRIA (COPSOQ II). Monitoramento periódico e manutenção de controles preventivos.'));
      var medidaTexto=g.medidaExistente||'';
      var prazoSug=(function(){
        var _pp=getPGR();
        if(_pp){
          var gl=_pp.graus.length;
          var limAlto=_pp.graus[gl>=5?3:gl-2].rpnMax;
          var limMedio=_pp.graus[gl>=5?2:Math.floor(gl/2)].rpnMax;
          if(g.maiorRPN>limAlto) return 'Imediato';
          if(g.maiorRPN>limMedio) return '90 dias';
          if(g.maiorRPN>0) return '180 dias';
        } else {
          if(g.maiorRPN>7) return 'Imediato';
          if(g.maiorRPN>4) return '90 dias';
          if(g.maiorRPN>2) return '180 dias';
        }
        return g.piorCl==='ris'?'90 dias':'180 dias';
      }());
      // Prioridade baseada no RPN; fallback no COPSOQ se P/S/C não preenchidos
      var prior=(function(){
        var _pp2=getPGR();
        if(_pp2){
          var gl=_pp2.graus.length;
          var limAlto=_pp2.graus[gl>=5?3:gl-2].rpnMax;
          var limMedio=_pp2.graus[gl>=5?2:Math.floor(gl/2)].rpnMax;
          if(g.maiorRPN>limAlto) return 'ris';
          if(g.maiorRPN>limMedio) return 'int';
          if(g.maiorRPN>0) return 'baixa';
        } else {
          if(g.maiorRPN>4) return 'ris';
          if(g.maiorRPN>2) return 'int';
          if(g.maiorRPN>0) return 'baixa';
        }
        return g.piorCl;
      }());
      
      sugestoes.push({
        id:'pc_'+Date.now()+'_'+Math.random().toString(36).substr(2,5),
        setores:g.setores.sort(),
        dominio:dom,
        acao:acaoTexto,
        medida:medidaTexto,
        responsavel:'',
        prazo:prazoSug,
        status:'Pendente',
        evidencia:'',
        origem:'sugestao',
        prioridade:prior
      });
    });
    
    // Mesclar com existentes sem perder dados já preenchidos
    var existentes=aep.planoConsolidado||[];
    var domExist={};
    existentes.forEach(function(e){ domExist[e.dominio||'']=true; });
    
    // Para domínios que já existem no consolidado, apenas atualizar setores
    existentes.forEach(function(e){
      var sug=sugestoes.find(function(s){return s.dominio===e.dominio;});
      if(sug){
        // Adicionar setores novos que não estavam no existente
        (sug.setores||[]).forEach(function(s){
          if((e.setores||[]).indexOf(s)<0){
            if(!e.setores) e.setores=[];
            e.setores.push(s);
          }
        });
        e.setores=(e.setores||[]).sort();
      }
    });
    
    // Adicionar apenas domínios que não existem ainda
    var novas=sugestoes.filter(function(s){ return !domExist[s.dominio]; });
    
    aep.planoConsolidado=existentes.concat(novas);
    salvarAEP();
    renderizarInterface();
    var totalSetores=0;
    aep.planoConsolidado.forEach(function(a){totalSetores+=(a.setores||[]).length;});
    showMsg('✅ Plano consolidado: '+aep.planoConsolidado.length+' ação(ões) abrangendo '+totalSetores+' setor(es). Revise e ajuste.',true);
  }
  window._sugerirPlano=sugerirPlanoAcao;
  
  function removerAcaoPlano(idx){
    if(!confirm('Remover esta ação do plano consolidado?')) return;
    aep.planoConsolidado.splice(idx,1);
    salvarAEP();
    renderizarInterface();
  }
  window._removerAcaoPlano=removerAcaoPlano;
  
  function addAcaoPlano(){
    if(!aep.planoConsolidado) aep.planoConsolidado=[];
    aep.planoConsolidado.push({
      id:'pc_'+Date.now()+'_'+Math.random().toString(36).substr(2,5),
      setores:[],
      dominio:'',
      acao:'',
      medida:'',
      responsavel:'',
      prazo:'',
      status:'Pendente',
      evidencia:'',
      origem:'manual'
    });
    salvarAEP();
    renderizarInterface();
  }
  window._addAcaoPlano=addAcaoPlano;
  
  function editPlano(idx,campo,valor){
    if(!aep.planoConsolidado[idx]) return;
    aep.planoConsolidado[idx][campo]=valor;
    salvarAEP();flashSaved();
  }
  window._editPlano=editPlano;
  
  function editPlanoSetores(idx,valor){
    if(!aep.planoConsolidado[idx]) return;
    aep.planoConsolidado[idx].setores=valor.split(',').map(function(s){return s.trim();}).filter(function(s){return s;});
    salvarAEP();flashSaved();
  }
  window._editPlanoSetores=editPlanoSetores;

  // Funções para gerenciar cargos/funções no GHE — atualização direta de DOM
  window._addCargo=function(el){
    var setor=el.dataset.setor, cargo=el.dataset.cargo;
    if(!setor||!cargo) return;
    var sels=gv(setor,"funcoes_sel",[])||[];
    if(sels.indexOf(cargo)>=0) return; // já selecionado
    sels.push(cargo);
    sv(setor,"funcoes_sel",sels);
    var sid=setor.replace(/[^a-z0-9]/gi,"_");
    // Remover do dropdown
    el.style.display="none";
    // Adicionar tag
    var tagsDiv=document.getElementById("tags_"+sid);
    if(tagsDiv){
      // Remover placeholder se existir
      var ph=tagsDiv.querySelector("span[style*='font-style:italic']");
      if(ph) ph.remove();
      var tag=document.createElement("span");
      tag.style.cssText="display:inline-flex;align-items:center;gap:4px;background:#7d2020;color:white;padding:3px 8px;border-radius:20px;font-size:10px;font-weight:600;white-space:nowrap";
      tag.innerHTML=cargo+
        '<button data-setor="'+setor.replace(/"/g,'&quot;')+'" data-cargo="'+cargo.replace(/"/g,'&quot;')+
        '" onclick="window._removeCargo(this)"'+
        ' style="background:none;border:none;color:white;cursor:pointer;font-size:12px;line-height:1;padding:0 0 0 3px;opacity:.8">×</button>';
      tagsDiv.appendChild(tag);
    }
    // Limpar busca e fechar dropdown
    var busca=document.getElementById("busca_"+sid);
    if(busca) busca.value="";
    var lista=document.getElementById("dd_list_"+sid);
    if(lista) lista.style.display="none";
    // Sincronizar descrição
    window._syncDesc(setor,true);
  };
  window._removeCargo=function(el){
    var setor=el.dataset.setor, cargo=el.dataset.cargo;
    if(!setor||!cargo) return;
    var sels=gv(setor,"funcoes_sel",[])||[];
    var i=sels.indexOf(cargo);
    if(i>=0) sels.splice(i,1);
    sv(setor,"funcoes_sel",sels);
    var sid=setor.replace(/[^a-z0-9]/gi,"_");
    // Remover tag do DOM
    el.closest("span").remove();
    // Mostrar novamente no dropdown
    var lista=document.getElementById("dd_list_"+sid);
    if(lista){
      Array.from(lista.querySelectorAll("._cargo-opt")).forEach(function(opt){
        if(opt.dataset.cargo===cargo) opt.style.display="";
      });
    }
    // Repor placeholder se não há mais selecionados
    var tagsDiv=document.getElementById("tags_"+sid);
    if(tagsDiv&&tagsDiv.children.length===0){
      tagsDiv.innerHTML='<span style="font-size:10px;color:#aaa;font-style:italic">Nenhuma função selecionada</span>';
    }
    // Sincronizar descrição
    window._syncDesc(setor,true);
  };
  window._filtrarCargos=function(sid){
    var busca=document.getElementById("busca_"+sid);
    var lista=document.getElementById("dd_list_"+sid);
    if(!busca||!lista) return;
    var termo=busca.value.toLowerCase();
    lista.style.display="block";
    Array.from(lista.querySelectorAll("._cargo-opt")).forEach(function(el){
      el.style.display=(el.dataset.cargo.toLowerCase().includes(termo))?"":"none";
    });
  };
  window._syncDesc=function(setor,force){
    // Montar índice global de todos os cargos do DB (todos os setores)
    var allCargos=[];
    _getAllCargos().forEach(function(dc){allCargos.push(dc);});
    var sels=gv(setor,"funcoes_sel",[])||[];
    var desc="";
    sels.forEach(function(f){
      var dc=allCargos.find(function(x){return x.cargo.toUpperCase()===f.toUpperCase();});
      if(dc&&dc.desc) desc+=(desc?"\n\n":"")+f+":\n"+dc.desc;
    });
    var sid=setor.replace(/[^a-z0-9]/gi,"_");
    var ta=document.getElementById("desc_"+sid);
    // force=true quando vem de _addCargo/_removeCargo: sempre atualiza
    // sem force: respeita edição manual do usuário
    if(ta&&(force||!ta._edited)){
      ta.value=desc;
      ta._edited=false; // reset: nova seleção de função limpa o flag de edição manual
      sv(setor,"desc_cargo",desc);
    }
  };
  window._ghe_getsel=function(s){return gv(s,"funcoes_sel",[])||[];};

  const HIER=[
    {n:'1 – Eliminação',d:'Remover a fonte do risco.',cor:'#dc2626',bg:'#fff0f0'},
    {n:'2 – Substituição',d:'Substituir processos ou condições geradoras.',cor:'#ea580c',bg:'#fff7ed'},
    {n:'3 – Coletiva/Eng.',d:'Controles organizacionais que atuam na fonte.',cor:'#ca8a04',bg:'#fffde7'},
    {n:'4 – Administrativa',d:'Políticas, treinamentos, protocolos de gestão.',cor:'#6b4226',bg:'#fdf2f2'},
    {n:'5 – Ind./Proteção',d:'Suporte individual — complementar, não substitui.',cor:'#16a34a',bg:'#f0fdf4'},
  ];
  const HKEYS=['elim','subst','eng','adm','ind'];
  const ninp='width:50px;padding:5px 3px;border:2px solid #e8b4b4;border-radius:6px;font-size:13px;font-weight:700;text-align:center;background:#fdf2f2;';

  function ta(ph,val,ev){
    return '<textarea style="width:100%;padding:7px;border:1px solid #e2e8f0;border-radius:6px;font-size:11px;min-height:52px;resize:vertical;font-family:inherit;line-height:1.5" placeholder="'+ph+'" oninput="'+ev+'">'+(val||'')+'</textarea>';
  }

  // CABEÇALHO GLOBAL
  var cab='<div class="aep-section"><div class="aep-section-header" style="display:flex;align-items:center;justify-content:space-between">'+
    '<span>📄 IDENTIFICAÇÃO DA EMPRESA — ARP PSICOSSOCIAL POR GHE / SETOR</span>'+
    '<span style="display:flex;gap:8px;align-items:center">'+
      '<span id="aep-saved" style="display:none" class="saved-ok">✔ Salvo</span>'+
      '<button onclick="gerarAEPpdf()" style="background:#fff;color:#7d2020;border:2px solid #fff;border-radius:6px;padding:4px 12px;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap">📋 Imprimir AEP</button>'+
    '</span>'+
    '</div><div class="aep-section-body">'+
    '<div style="display:grid;grid-template-columns:160px 1fr;gap:16px;margin-bottom:16px;align-items:start">'+
    '<div>'+
      '<label class="aep-label" style="margin-bottom:6px;display:block">Logo da Empresa</label>'+
      (!aep.logoSrc?'<div onclick="triggerLogoUpload()" style="width:150px;height:110px;border:2px dashed #e8b4b4;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;background:#fdf2f2;color:#9e3535;font-size:11px;text-align:center;gap:6px"><span style=\'font-size:28px\'>🖼️</span><span style=\'font-weight:600\'>Clique para<br>carregar logo</span><span style=\'font-size:9px;opacity:.7\'>PNG, JPG · qualquer tamanho</span></div>':'<img src="'+aep.logoSrc+'" onclick="triggerLogoUpload()" title="Clique para trocar" style="width:150px;height:110px;object-fit:contain;border-radius:8px;cursor:pointer"/>')+
      (aep.logoSrc?'<button onclick="removerLogo()" style="margin-top:5px;width:150px;padding:4px;background:none;border:1px solid #e8b4b4;border-radius:6px;color:#9e3535;font-size:11px;cursor:pointer">🗑️ Remover logo</button>':'')+
      '<div style="margin-top:8px">'+
        '<label class="aep-label" style="margin-bottom:3px;display:block">Posição no PDF</label>'+
        '<select class="aep-input" style="padding:5px;font-size:11px" onchange="aepSet(\"logoPos\",this.value)">'+
          '<option value="capa"'+(aep.logoPos==="capa"?' selected':'')+'>Capa + cabeçalho</option>'+
          '<option value="cabecalho"'+(aep.logoPos==="cabecalho"?' selected':'')+'>Só cabeçalho</option>'+
          '<option value="capa_only"'+(aep.logoPos==="capa_only"?' selected':'')+'>Só capa</option>'+
        '</select>'+
      '</div>'+
      '<div style="margin-top:6px">'+
        '<label class="aep-label" style="margin-bottom:3px;display:block">Tamanho na capa</label>'+
        '<select class="aep-input" style="padding:5px;font-size:11px" onchange="aepSet(\'logoTam\',this.value)">'+
          '<option value="pequeno"'+(aep.logoTam==="pequeno"?' selected':'')+'>Pequeno (80px)</option>'+
          '<option value="medio"'+(aep.logoTam==="medio"?' selected':'')+'>Médio (140px)</option>'+
          '<option value="grande"'+(aep.logoTam==="grande"?' selected':'')+'>Grande (200px)</option>'+
          '<option value="extra"'+(aep.logoTam==="extra"?' selected':'')+'>Extra (280px)</option>'+
        '</select>'+
      '</div>'+
      '<div style="margin-top:6px">'+
        '<label class="aep-label" style="margin-bottom:3px;display:block">Tamanho no cabeçalho</label>'+
        '<select class="aep-input" style="padding:5px;font-size:11px" onchange="aepSet(\'logoTamHdr\',this.value)">'+
          '<option value="pequeno"'+(aep.logoTamHdr==="pequeno"?' selected':'')+'>Pequeno (22px)</option>'+
          '<option value="medio"'+(aep.logoTamHdr==="medio"?' selected':'')+'>Médio (32px)</option>'+
          '<option value="grande"'+(aep.logoTamHdr==="grande"?' selected':'')+'>Grande (44px)</option>'+
          '<option value="extra"'+(aep.logoTamHdr==="extra"?' selected':'')+'>Extra (56px)</option>'+
        '</select>'+
      '</div>'+
    '</div>'+
    '<div>'+
    '<div class="aep-grid aep-grid-2" style="margin-bottom:12px">'+
    '<div class="aep-field"><label class="aep-label">Empresa / Razão Social</label>'+
    '<input class="aep-input" value="'+(aep.empresa||'')+'" oninput="aepSet(\'empresa\',this.value)" placeholder="Nome da empresa"/></div>'+
    '<div class="aep-field"><label class="aep-label">CNPJ</label>'+
    '<input class="aep-input" value="'+(aep.cnpj||'')+'" oninput="aepSet(\'cnpj\',this.value)" placeholder="00.000.000/0000-00"/></div></div>'+
    '<div class="aep-field" style="margin-bottom:12px"><label class="aep-label">Endereço Completo</label>'+
    '<input class="aep-input" value="'+(aep.endereco||'')+'" oninput="aepSet(\'endereco\',this.value)" placeholder="Rua, nº, bairro, cidade – UF"/></div>'+
    '<div class="aep-grid aep-grid-2" style="margin-bottom:12px">'+
    '<div class="aep-field"><label class="aep-label">Responsável Técnico</label>'+
    '<input class="aep-input" value="'+(aep.responsavel||'')+'" oninput="aepSet(\'responsavel\',this.value)" placeholder="Nome completo"/></div>'+
    '<div class="aep-field"><label class="aep-label">CRP (Registro Profissional)</label>'+
    '<input class="aep-input" value="'+(aep.crea||'')+
    '" oninput="aepSet(\'crea\',this.value)" placeholder="Ex: CRP 03/00000"/></div>'+
    '<div class="aep-field"><label class="aep-label">Data de Emissão</label>'+
    '<input class="aep-input" value="'+(aep.data||'')+'" oninput="aepSet(\'data\',this.value)" placeholder="dd/mm/aaaa"/></div></div>'+
    '<div class="aep-grid aep-grid-3">'+
    '<div class="aep-field"><label class="aep-label">PGR nº / Vigência</label>'+
    '<input class="aep-input" value="'+(aep.pgr||'')+'" oninput="aepSet(\'pgr\',this.value)" placeholder="Ex: PGR-001 / 2024"/></div>'+
    '<div class="aep-field"><label class="aep-label">PCMSO nº / Vigência</label>'+
    '<input class="aep-input" value="'+(aep.pcmso||'')+'" oninput="aepSet(\'pcmso\',this.value)" placeholder="Ex: PCMSO-001 / 2024"/></div>'+
    '<div class="aep-field"><label class="aep-label">Base Legal</label>'+
    '<input class="aep-input" value="'+(aep.base_legal||'')+'" oninput="aepSet(\'base_legal\',this.value)"/></div></div>'+
    '</div>'+ /* fecha coluna direita */
    '</div>'; /* fecha grid logo+campos */

  if(total===0){
    cab+='<div style="margin-top:14px;padding:14px;background:#fef9c3;border-radius:8px;color:#854d0e;font-size:13px;text-align:center">⚠️ Importe o CSV para gerar as AEPs por setor/GHE automaticamente.</div>';
  } else {
    cab+='<div style="margin-top:14px;background:#fdf2f2;border:1px solid #e8b4b4;border-radius:8px;padding:10px 16px;font-size:12px;color:#7d2020">'+
      '📂 <strong>'+total+'</strong> respondentes · <strong>'+setores.length+'</strong> setor'+(setores.length!==1?'es':'')+'/GHE identificado'+(setores.length!==1?'s':'')+' no CSV. Cada setor abaixo tem sua própria AEP completa.</div>';
  }
  // ══ SEÇÃO GRO/PGR ══════════════════════════════════════════════
  cab+='<div class="aep-section" style="margin-top:0;border-top:3px solid #7d2020">';
  cab+='<div class="aep-section-header">📋 DOCUMENTO GRO/PGR — Critérios e Identificação (NR-1, subitem 1.5.4.4.2.2)</div>';
  cab+='<div class="aep-section-body">';

  // Linha 1: Nº doc | Versão | Data Revisão | Próxima Revisão
  cab+='<div class="aep-grid aep-grid-4" style="margin-bottom:12px">';
  cab+='<div class="aep-field"><label class="aep-label">Nº do Documento</label>';
  cab+='<input class="aep-input" value="'+(aep.doc_numero||'')+'" oninput="aepSet(\'doc_numero\',this.value)" placeholder="Ex: AEP-PSI-001"/></div>';
  cab+='<div class="aep-field"><label class="aep-label">Versão</label>';
  cab+='<input class="aep-input" value="'+(aep.doc_versao||'01')+'" oninput="aepSet(\'doc_versao\',this.value)" placeholder="01"/></div>';
  cab+='<div class="aep-field"><label class="aep-label">Data da Revisão</label>';
  cab+='<input class="aep-input" value="'+(aep.doc_revisao||'')+'" oninput="aepSet(\'doc_revisao\',this.value)" placeholder="dd/mm/aaaa"/></div>';
  cab+='<div class="aep-field"><label class="aep-label">Próxima Revisão (máx. 2 anos)</label>';
  cab+='<input class="aep-input" value="'+(aep.doc_prox_revisao||'')+'" oninput="aepSet(\'doc_prox_revisao\',this.value)" placeholder="dd/mm/aaaa"/></div>';
  cab+='</div>';

  // Linha 2: CNAE | Grau de Risco | Nº Trabalhadores
  cab+='<div class="aep-grid aep-grid-3" style="margin-bottom:12px">';
  cab+='<div class="aep-field"><label class="aep-label">CNAE Principal</label>';
  cab+='<input class="aep-input" value="'+(aep.cnae||'')+'" oninput="aepSet(\'cnae\',this.value)" placeholder="Ex: 8640-2/02"/></div>';
  cab+='<div class="aep-field"><label class="aep-label">Grau de Risco (NR-4)</label>';
  cab+='<select class="aep-input" onchange="aepSet(\'grau_risco\',this.value)">';
  cab+='<option value=""'+((!aep.grau_risco)?' selected':'')+'>Selecionar...</option>';
  ['1','2','3','4'].forEach(function(g){
    cab+='<option value="'+g+'"'+(aep.grau_risco===g?' selected':'')+'>Grau '+g+'</option>';
  });
  cab+='</select></div>';
  cab+='<div class="aep-field"><label class="aep-label">Nº de Trabalhadores (total)</label>';
  cab+='<input class="aep-input" type="number" value="'+(aep.total_trab||dados.length)+'" oninput="aepSet(\'total_trab\',this.value)" placeholder="'+dados.length+'"/></div>';
  cab+='</div>';

  // ── SELETOR DE PERFIL PGR ──
  cab+='<div style="background:#eff6ff;border:2px solid #93c5fd;border-radius:10px;padding:14px 16px;margin-bottom:12px">';
  cab+='<div style="font-size:11px;font-weight:700;color:#1e40af;margin-bottom:10px">📋 PERFIL DO PGR DO CLIENTE (define a Matriz de Risco)</div>';
  cab+='<div class="aep-grid aep-grid-2">';
  cab+='<div class="aep-field"><label class="aep-label">Modelo de Matriz do PGR</label>';
  cab+='<select class="aep-input" onchange="aepSet(\'perfilPGR\',this.value);renderAEP();" style="font-weight:600">';
  cab+='<option value=""'+(!aep.perfilPGR?' selected':'')+'>⚠️ Selecione o perfil do PGR...</option>';
  var _allPerfis=Object.assign({},PGR_PERFIS_BUILTIN,PGR_PERFIS_CUSTOM);
  Object.keys(_allPerfis).forEach(function(k){
    cab+='<option value="'+k+'"'+(aep.perfilPGR===k?' selected':'')+'>'+_allPerfis[k].nome+'</option>';
  });
  cab+='</select>';
  cab+='<div style="display:flex;gap:6px;margin-top:6px">';
  cab+='<button onclick="abrirEditorPerfil()" style="flex:1;padding:6px;border:1px solid #93c5fd;border-radius:4px;background:#eff6ff;color:#1e40af;font-size:10px;font-weight:600;cursor:pointer">➕ Novo Perfil</button>';
  if(aep.perfilPGR && PGR_PERFIS_CUSTOM[aep.perfilPGR]){
    cab+='<button onclick="abrirEditorPerfil(\''+aep.perfilPGR+'\')" style="padding:6px 10px;border:1px solid #fde68a;border-radius:4px;background:#fffbeb;color:#92400e;font-size:10px;font-weight:600;cursor:pointer">✏️ Editar</button>';
    cab+='<button onclick="excluirPerfilPGR(\''+aep.perfilPGR+'\')" style="padding:6px 10px;border:1px solid #fecaca;border-radius:4px;background:#fef2f2;color:#991b1b;font-size:10px;font-weight:600;cursor:pointer">🗑️</button>';
  }
  cab+='</div>';
  cab+='</div>';
  cab+='<div class="aep-field"><label class="aep-label">Status</label>';
  if(aep.perfilPGR && getPGR()){
    var _pf=getPGR();
    cab+='<div style="background:#dcfce7;color:#166534;padding:8px 12px;border-radius:6px;font-size:11px;font-weight:600">';
    cab+='✅ Matriz '+_pf.tamanho+'×'+_pf.tamanho+' — '+_pf.formulaLabel;
    if(!_pf.usaC) cab+=' (sem Controle)';
    cab+='</div>';
  } else {
    cab+='<div style="background:#fef9c3;color:#92400e;padding:8px 12px;border-radius:6px;font-size:11px;font-weight:600">';
    cab+='⚠️ Matriz de risco desabilitada — selecione o perfil do PGR para habilitar</div>';
  }
  cab+='</div></div></div>';

  // Escopo
  cab+='<div class="aep-field" style="margin-bottom:12px"><label class="aep-label">Escopo do Documento</label>';
  cab+='<textarea class="aep-input" rows="2" oninput="aepSet(\'escopo\',this.value)" style="resize:vertical">'+(aep.escopo||'')+'</textarea></div>';

  // Metodologia
  cab+='<div class="aep-field" style="margin-bottom:12px"><label class="aep-label">Metodologia Aplicada (subitem 1.5.4.4.2.1 NR-1)</label>';
  cab+='<textarea class="aep-input" rows="2" oninput="aepSet(\'metodologia\',this.value)" style="resize:vertical">'+(aep.metodologia||'')+'</textarea></div>';

  // Critérios GRO/PGR
  cab+='<div style="background:#fdf2f2;border:2px solid #e8b4b4;border-radius:10px;padding:14px 16px;margin-bottom:12px">';
  cab+='<div style="font-size:11px;font-weight:700;color:#7d2020;margin-bottom:10px">⚖️ CRITÉRIOS DO GRO/PGR (obrigatório — subitem 1.5.4.4.2.2 NR-1)</div>';
  cab+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">';
  // Auto-populate criteria from PGR profile if active and fields are default
  var _cpf=getPGR();
  if(_cpf && aep.perfilPGR){
    if(!aep._criteriosEditados){
      aep.criterio_sev=_cpf.sNomes.map(function(n,i){return (i+1)+'='+n;}).join(' | ');
      aep.criterio_prob=_cpf.pNomes.map(function(n,i){return (i+1)+'='+n;}).join(' | ');
      aep.criterio_rpn=_cpf.formulaLabel+': '+_cpf.graus.map(function(g){return g.nome+' ('+g.rpnMin+'-'+g.rpnMax+')';}).join(' | ');
    }
  }
  cab+='<div class="aep-field"><label class="aep-label">Critérios de Severidade</label>';
  cab+='<textarea class="aep-input" rows="4" oninput="aepSet(\'criterio_sev\',this.value)" style="resize:vertical;font-size:10px">'+(aep.criterio_sev||'')+'</textarea></div>';
  cab+='<div class="aep-field"><label class="aep-label">Critérios de Probabilidade</label>';
  cab+='<textarea class="aep-input" rows="4" oninput="aepSet(\'criterio_prob\',this.value)" style="resize:vertical;font-size:10px">'+(aep.criterio_prob||'')+'</textarea></div>';
  cab+='<div class="aep-field"><label class="aep-label">Nível de Risco</label>';
  cab+='<textarea class="aep-input" rows="4" oninput="aepSet(\'criterio_rpn\',this.value)" style="resize:vertical;font-size:10px">'+(aep.criterio_rpn||'')+'</textarea></div>';
  cab+='<div class="aep-field"><label class="aep-label">Critérios de Tolerância</label>';
  cab+='<textarea class="aep-input" rows="4" oninput="aepSet(\'criterio_tolerancia\',this.value)" style="resize:vertical;font-size:10px">'+(aep.criterio_tolerancia||'')+'</textarea></div>';
  cab+='</div></div>';

  // Tabela visual RPN
  cab+='<div style="margin-bottom:12px"><div style="font-size:10px;font-weight:700;color:#64748b;margin-bottom:6px;text-transform:uppercase">Tabela de Classificação de Riscos e Prazos</div>';
  cab+='<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#7d2020;color:white">';
  (function(){var _pt=getPGR();var headers=_pt&&!_pt.usaC?['Nível de Risco','Prioridade','Ação Recomendada','Prazo Máximo']:['Nível de Risco','RPN','Prioridade','Ação','Prazo Máximo'];return headers;}()).forEach(function(h){
    cab+='<th style="padding:6px 8px;text-align:left;font-weight:600">'+h+'</th>';
  });
  cab+='</tr></thead><tbody>';
  (function(){
    var _ptr=getPGR();
    if(_ptr){
      var acoes=['Manter controles','Monitoramento periódico','Implementar medidas de redução','Medidas urgentes','Paralisar ou medida imediata'];
      var prazos=['Revisão periódica','180 dias','90 dias','30 dias','Imediato'];
      var pris=['Baixíssima','Baixa','Moderada','Alta','Altíssima'];
      return _ptr.graus.map(function(g,i){
        if(_ptr.usaC){
          return [g.nome,g.rpnMin+' – '+g.rpnMax,pris[Math.min(i,4)]||'',acoes[Math.min(i,4)]||'',prazos[Math.min(i,4)]||'',g.cor];
        } else {
          return [g.nome,pris[Math.min(i,4)]||'',acoes[Math.min(i,4)]||'',prazos[Math.min(i,4)]||'',g.cor];
        }
      });
    }
    return [
      ['Muito Alto','> 7','Altíssima','Paralisar ou medida imediata','Imediato','#fee2e2'],
      ['Alto','4 – 7','Alta','Medidas urgentes','< 3 meses','#fef9c3'],
      ['Médio','2 – 4','Moderada','Reduzir risco','< 9 meses','#fef3c7'],
      ['Baixo','≤ 2','Baixa','Manter controles','Revisão periódica','#dcfce7'],
    ];
  }()).forEach(function(row){
    var bgColor=row[row.length-1];
    cab+='<tr style="background:'+bgColor+'">';
    row.slice(0,row.length-1).forEach(function(cell){
      cab+='<td style="padding:5px 8px;border-bottom:1px solid rgba(0,0,0,.06)">'+cell+'</td>';
    });
    cab+='</tr>';
  });
  cab+='</tbody></table></div>';
  cab+='</div></div>';


  // ── Índice de setores ───────────────────────────────────────
  var jumpLinks=setores.map(function(s){
    var sid2=encId(s);
    return '<a href="#setor_'+sid2+'" style="display:inline-block;padding:5px 12px;margin:3px;background:#fdf2f2;border:1px solid #e8b4b4;border-radius:20px;font-size:11px;color:#7d2020;text-decoration:none;font-weight:600">'+s+'</a>';
  }).join('');
  var jumpMenu='<div id="aep-indice" class="aep-section" style="margin-bottom:0">'
    +'<div class="aep-section-header">🗂️ ÍNDICE DE SETORES — clique para navegar</div>'
    +'<div class="aep-section-body" style="padding:10px">'+jumpLinks+'</div></div>';

var blocos='';
  for(var si=0;si<setores.length;si++){
    var setor=setores[si];
    var sub=dados.filter(function(d){return d.setor===setor;});
    var calc=calcMedias(sub);
    var mDomS=calc.mDom;
    var coments=sub.map(function(r){return r.comentario;}).filter(function(c){return c&&c.length>3;});
    var sid=encId(setor);
    var riscos=DOMS.filter(function(d){return mDomS[d]&&mDomS[d]>3.66;});
    var domsAtivos=DOMS.filter(function(d){
      if(d==='Personalidade') return false; // Fator individual, não é perigo
      var cl=classif(mDomS[d]);
      var di=DOMS.indexOf(d);
      var mz=gmz(setor,di);
      var p=+mz.p||0,sv=+mz.s||0,cv=+mz.c||0;
      var rpn=(p&&sv&&cv)?p*sv/cv:0;
      // Ativar se COPSOQ intermediário/risco OU RPN > 2 (Moderado+)
      (function(){var _pfi=getPGR();var lim=_pfi?_pfi.graus[Math.min(1,_pfi.graus.length-1)].rpnMax:2;return cl==='int'||cl==='ris'||rpn>lim;}());
    });

    // A. Cabeçalho do setor
    var hdr='<div style="background:linear-gradient(135deg,#7d2020,#9e3535);color:white;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">'+
      '<div><div style="font-size:16px;font-weight:800">🏢 '+setor+'</div>'+
      '<div style="font-size:11px;opacity:.8;margin-top:2px">'+sub.length+' respondente'+(sub.length!==1?'s':'')+' · '+coments.length+' comentário'+(coments.length!==1?'s':'')+' na questão aberta</div></div>'+
      '<div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">';
    for(var di=0;di<DOMS.length;di++){
      var dm=DOMS[di],mv=mDomS[dm],clv=classif(mv);
      var cor=clv==='fav'?'#22c55e30':clv==='int'?'#f59e0b30':clv==='ris'?'#ef444430':'#94a3b830';
      var tc=clv==='fav'?'#a7f3d0':clv==='int'?'#fde68a':clv==='ris'?'#fca5a5':'#e2e8f0';
      hdr+='<span style="background:'+cor+';border:1px solid '+tc+';padding:3px 8px;border-radius:10px;font-size:10px;font-weight:700;white-space:nowrap">'+dm.split(' ')[0]+': '+fmt(mv)+'</span>';
    }
    hdr+='</div></div>';

    // B. Identificação do GHE
    var csvFuncoes=[];
    dados.filter(function(d){return d.setor===setor;}).forEach(function(d){
      var f=(d.funcao||'').trim().toUpperCase();
      if(f && csvFuncoes.indexOf(f)<0) csvFuncoes.push(f);
    });
    csvFuncoes.sort();
    var dbCargos=_getCargosSetor(setor);
    // Funções do setor: CSV + DB do mesmo setor apenas
    var todosCargos=csvFuncoes.slice();
    dbCargos.forEach(function(dc){
      if(todosCargos.map(function(x){return x.toUpperCase();}).indexOf(dc.cargo.toUpperCase())<0){
        todosCargos.push(dc.cargo);
      }
    });
    todosCargos.sort();
    var funcoesSelec=gv(setor,'funcoes_sel',[])||[];
    // Índice global de cargos para busca em todos os setores
    var allCargosDB=[];
    _getAllCargos().forEach(function(dc){allCargosDB.push(dc);});
    var descAuto='';
    funcoesSelec.forEach(function(f){
      var dc=allCargosDB.find(function(x){return x.cargo.toUpperCase()===f.toUpperCase();});
      if(dc&&dc.desc) descAuto+=(descAuto?'\n\n':'')+f+':\n'+dc.desc;
    });
    var descVal=gv(setor,'desc_cargo',descAuto);
    var sid=encId(setor);

    // Tags das funções selecionadas
    var tagsHtml='';
    funcoesSelec.forEach(function(f){
      var fEsc=f.replace(/"/g,'&quot;');
      var setorEsc=setor.replace(/"/g,'&quot;');
      tagsHtml+='<span style="display:inline-flex;align-items:center;gap:4px;background:#7d2020;color:white;'+
        'padding:3px 8px;border-radius:20px;font-size:10px;font-weight:600;white-space:nowrap">'+
        f+
        '<button data-setor="'+setorEsc+'" data-cargo="'+fEsc+'" onclick="window._removeCargo(this)"'+
        ' style="background:none;border:none;color:white;cursor:pointer;font-size:12px;line-height:1;padding:0 0 0 3px;opacity:.8">×</button>'+
        '</span>';
    });

    // Opções do dropdown (ainda não selecionadas)
    var optsHtml='';
    todosCargos.forEach(function(f){
      if(funcoesSelec.indexOf(f)<0){
        var fEsc=f.replace(/"/g,'&quot;');
        var setorEsc=setor.replace(/"/g,'&quot;');
        optsHtml+='<div class="_cargo-opt" data-setor="'+setorEsc+'" data-cargo="'+fEsc+'"'+
          ' onclick="window._addCargo(this)"'+
          ' style="padding:7px 10px;cursor:pointer;font-size:11px;border-bottom:1px solid #f1f5f9;'+
          'transition:background .15s" onmouseover="this.style.background=\'#fdf2f2\'"'+
          ' onmouseout="this.style.background=\'\'">'+f+'</div>';
      }
    });

    var ident='<div style="padding:14px 20px;background:#f8fafc;border-bottom:2px solid #e2e8f0">'+
      '<div style="font-size:10px;font-weight:700;color:#64748b;text-transform:uppercase;margin-bottom:10px">'+
        'Identificação do GHE / Setor'+
      '</div>'+
      '<div style="display:grid;grid-template-columns:160px 1fr;gap:16px;align-items:start">'+

        // Coluna 1: Setor + Nº trabalhadores
        '<div>'+
          '<div class="aep-field" style="margin-bottom:10px">'+
            '<label class="aep-label">Setor</label>'+
            '<input class="aep-input" value="'+gv(setor,'setor_nome',setor)+'"'+
              ' oninput="window._sv(\''+setor+'\',\'setor_nome\',this.value)"'+
              ' placeholder="'+setor+'"/>'+
          '</div>'+
          '<div class="aep-field">'+
            '<label class="aep-label">Nº Trabalhadores</label>'+
            '<input class="aep-input" value="'+gv(setor,'ntrab',sub.length)+'"'+
              ' oninput="window._sv(\''+setor+'\',\'ntrab\',this.value)"'+
              ' type="number" placeholder="'+sub.length+'"/>'+
            '<span style="font-size:10px;color:#94a3b8;display:block;margin-top:3px">'+
              sub.length+' respondentes COPSOQ</span>'+
          '</div>'+
        '</div>'+

        // Coluna 2: Função/GHE (dropdown + tags) + Descrição (ao lado)
        '<div style="display:grid;grid-template-columns:1fr 1.8fr;gap:14px">'+

          // Função / GHE
          '<div>'+
            '<label class="aep-label" style="display:block;margin-bottom:6px">'+
              'Função / GHE <span style="font-weight:400;color:#9e3535;font-size:9px">(selecione uma ou mais)</span>'+
            '</label>'+
            // Tags selecionadas
            '<div id="tags_'+sid+'" style="min-height:28px;display:flex;flex-wrap:wrap;gap:5px;margin-bottom:6px">'+
              (tagsHtml||'<span style="font-size:10px;color:#aaa;font-style:italic">Nenhuma função selecionada</span>')+
            '</div>'+
            // Dropdown com busca
            '<div style="position:relative" id="dd_wrap_'+sid+'">'+
              '<input id="busca_'+sid+'" type="text" class="aep-input"'+
                ' style="padding:7px 10px;font-size:11px;cursor:pointer"'+
                ' placeholder="🔍 Buscar e adicionar função..."'+
                ' oninput="window._filtrarCargos(\''+sid+'\')"'+
                ' onfocus="document.getElementById(\'dd_list_'+sid+'\').style.display=\'block\'"'+
                ' onblur="setTimeout(function(){var el=document.getElementById(\'dd_list_'+sid+'\');if(el)el.style.display=\'none\';},200)"'+
              '/>'+
              '<div id="dd_list_'+sid+'"'+
                ' style="display:none;position:absolute;top:100%;left:0;right:0;z-index:100;'+
                'background:white;border:2px solid #e8b4b4;border-top:none;border-radius:0 0 8px 8px;'+
                'max-height:200px;overflow-y:auto;box-shadow:0 4px 12px rgba(0,0,0,.1)">'+
                (optsHtml||'<div style="padding:10px;font-size:11px;color:#aaa;font-style:italic">Todas as funções já selecionadas</div>')+
              '</div>'+
            '</div>'+
          '</div>'+

          // Descrição do Cargo
          '<div>'+
            '<label class="aep-label" style="display:block;margin-bottom:6px">'+
              'Descrição do Cargo / Atividade Prescrita'+
            '</label>'+
            '<textarea id="desc_'+sid+'"'+
              ' class="aep-input" style="resize:both;font-size:11px;line-height:1.6;min-height:200px;width:100%"'+
              ' placeholder="Selecione as funções ao lado para preencher automaticamente..."'+
              ' oninput="window._sv(\''+setor+'\',\'desc_cargo\',this.value);this._edited=true">'+
              descVal+
            '</textarea>'+
          '</div>'+

        '</div>'+  // fecha grid func+desc

      '</div>'+
    '</div>';

    // C. Tabela COPSOQ + Matriz (Personalidade e Saúde com tratamento especial)
    var tabRows='';
    var NOTA_PERSON='Fator individual moderador. Não constitui perigo psicossocial relacionado ao trabalho para fins de GRO/PGR, conforme orientação do Guia MTE (2025) e subitem 1.5.3.1.4 da NR-01. Utilizado como variável de contexto na interpretação dos demais domínios.';
    var NOTA_SAUDE='Indicador de desfecho. Não constitui perigo psicossocial em si, mas evidencia o impacto acumulado dos perigos identificados nos demais domínios. Score elevado neste domínio foi considerado na definição dos valores de P e S dos perigos correspondentes, conforme nota técnica da seção 5.2.';
    for(var ii=0;ii<DOMS.length;ii++){
      var dom=DOMS[ii],m=mDomS[dom],cl=classif(m);
      var mz=gmz(setor,ii);
      var bgM=cl==='fav'?'#dcfce7':cl==='int'?'#fef9c3':cl==='ris'?'#fee2e2':'#f8fafc';
      if(dom==='Personalidade'){
        tabRows+='<tr style="background:#f1f5f9">'+
          '<td style="font-weight:600;font-size:12px;color:#64748b">'+dom+'</td>'+
          '<td style="text-align:center;font-weight:800;font-size:16px;color:'+corNum(m)+';background:'+bgM+'">'+fmt(m)+'</td>'+
          '<td style="text-align:center;background:'+bgM+'"><span class="badge '+(cl||'')+'" style="font-size:10px">'+(cl?CL_TXT[cl]:'—')+'</span></td>'+
          (function(){var _pp=getPGR();
            var cols='<td style="text-align:center;background:#f1f5f9;color:#94a3b8">—</td>'+ 
              '<td style="text-align:center;background:#f1f5f9;color:#94a3b8">—</td>';
            if(!_pp||_pp.usaC) cols+='<td style="text-align:center;background:#f1f5f9;color:#94a3b8">—</td>';
            if(!_pp||_pp.usaC) cols+='<td style="text-align:center;background:#f1f5f9;color:#94a3b8">—</td><td style="text-align:center;background:#f1f5f9;color:#94a3b8">—</td>';
            else cols+='<td style="text-align:center;background:#f1f5f9;color:#94a3b8">—</td>';
            return cols;
          }())+
          '<td style="font-size:9px;color:#64748b;background:#f1f5f9;font-style:italic;padding:6px 8px;line-height:1.4">'+NOTA_PERSON+'</td>'+
          '</tr>';
      } else if(dom==='Saúde e Bem-Estar'){
        var p=+mz.p||'',sv2=+mz.s||'',c=+mz.c||'';
        var nr=null,bgR='#f1f5f9';
        var _pfR=getPGR();
        if(_pfR){var _rR=calcRiscoPGR(p,sv2,c);if(_rR){nr=_rR.rpn;bgR=_rR.bg;}}
        else if(p&&sv2&&c){nr=p*sv2/c;bgR=nrBg(nr);}
        tabRows+='<tr style="background:#f1f5f9">'+
          '<td style="font-weight:600;font-size:12px;color:#64748b">'+dom+'</td>'+
          '<td style="text-align:center;font-weight:800;font-size:16px;color:'+corNum(m)+';background:'+bgM+'">'+fmt(m)+'</td>'+
          '<td style="text-align:center;background:'+bgM+'"><span class="badge '+(cl||'')+'" style="font-size:10px">'+(cl?CL_TXT[cl]:'—')+'</span></td>'+
          (function(){
            var _pf=getPGR(),_mx=_pf?_pf.tamanho:3;
            var _r=_pf?calcRiscoPGR(p,sv2,c):null;
            var _rpnTxt=_pf?(_r?(typeof _r.rpn==='number'?_r.rpn.toFixed(2):'—'):'—'):(nr!==null?nr.toFixed(2):'—');
            var _bgR2=_pf?(_r?_r.bg:'#f8fafc'):bgR;
            return '<td style="text-align:center"><input type="number" min="1" max="'+_mx+'" style="'+ninp+'" value="'+p+'" oninput="window._smz(\''+setor+'\','+ii+',\'p\',this.value)"/></td>'+
              '<td style="text-align:center"><input type="number" min="1" max="'+_mx+'" style="'+ninp+'" value="'+sv2+'" oninput="window._smz(\''+setor+'\','+ii+',\'s\',this.value)"/></td>'+
              ((!_pf||_pf.usaC)?'<td style="text-align:center"><input type="number" min="1" max="3" style="'+ninp+'" value="'+c+'" oninput="window._smz(\''+setor+'\','+ii+',\'c\',this.value)"/></td>':'')+
              (function(){
                if(_pf && !_pf.usaC){
                  var _rS=_pf?calcRiscoPGR(p,sv2,0):null;
                  return '<td id="nr_'+sid+'_'+ii+'" style="text-align:center;font-weight:700;font-size:11px;background:'+(_rS?_rS.bg:'#f1f5f9')+'">'+(_rS?_rS.nivel:'—')+'</td>';
                }
                return '<td id="nr_'+sid+'_'+ii+'" style="text-align:center;font-weight:800;font-size:14px;background:'+_bgR2+'">'+_rpnTxt+'</td>'+
                  '<td style="text-align:center;font-size:11px;font-weight:700;background:'+_bgR2+'">—</td>';
              }())+
              '<td style="font-size:9px;color:#64748b;background:#f1f5f9;font-style:italic;padding:6px 8px;line-height:1.4">'+NOTA_SAUDE+'</td>'+
              '</tr>';
          }())+''
      } else {
        var p=+mz.p||'',sv2=+mz.s||'',c=+mz.c||'';
        var nr=null,bgR='#f8fafc';
        var _pfR2=getPGR();
        if(_pfR2){var _rR2=calcRiscoPGR(p,sv2,c);if(_rR2){nr=_rR2.rpn;bgR=_rR2.bg;}}
        else if(p&&sv2&&c){nr=p*sv2/c;bgR=nrBg(nr);}
        tabRows+='<tr style="background:'+(ii%2===0?'#f8fafc':'white')+'">'+
          '<td style="font-weight:600;font-size:12px">'+dom+'</td>'+
          '<td style="text-align:center;font-weight:800;font-size:16px;color:'+corNum(m)+';background:'+bgM+'">'+fmt(m)+'</td>'+
          '<td style="text-align:center;background:'+bgM+'"><span class="badge '+(cl||'')+'" style="font-size:10px">'+(cl?CL_TXT[cl]:'—')+'</span></td>'+
          (function(){
            var _pf=getPGR(),_mx=_pf?_pf.tamanho:3;
            var _r=_pf?calcRiscoPGR(p,sv2,c):null;
            var _rpnTxt=_pf?(_r?(typeof _r.rpn==='number'?_r.rpn.toFixed(2):'—'):'—'):(nr!==null?nr.toFixed(2):'—');
            var _clTxt2=_pf?(_r?_r.nivel:'—'):(nr!==null?nRisco(p,sv2,c):'—');
            var _bgR2=_pf?(_r?_r.bg:'#f8fafc'):bgR;
            return '<td style="text-align:center"><input type="number" min="1" max="'+_mx+'" style="'+ninp+'" value="'+p+'" oninput="window._smz(\''+setor+'\','+ii+',\'p\',this.value)"/></td>'+
              '<td style="text-align:center"><input type="number" min="1" max="'+_mx+'" style="'+ninp+'" value="'+sv2+'" oninput="window._smz(\''+setor+'\','+ii+',\'s\',this.value)"/></td>'+
              ((!_pf||_pf.usaC)?'<td style="text-align:center"><input type="number" min="1" max="3" style="'+ninp+'" value="'+c+'" oninput="window._smz(\''+setor+'\','+ii+',\'c\',this.value)"/></td>':'')+
              (function(){
                if(_pf && !_pf.usaC){
                  return '<td id="cl_'+sid+'_'+ii+'" style="text-align:center;font-size:11px;font-weight:700;background:'+_bgR2+'">'+_clTxt2+'</td></tr>';
                }
                return '<td id="nr_'+sid+'_'+ii+'" style="text-align:center;font-weight:800;font-size:14px;background:'+_bgR2+'">'+_rpnTxt+'</td>'+
                  '<td id="cl_'+sid+'_'+ii+'" style="text-align:center;font-size:11px;font-weight:700;background:'+_bgR2+'">'+_clTxt2+'</td></tr>';
              }())+'';
          }())+''
      }
    }
    var matriz='<div style="padding:14px 20px;border-bottom:2px solid #e2e8f0">'+
      '<div style="font-size:10px;font-weight:700;color:#64748b;text-transform:uppercase;margin-bottom:6px">📊 Resultados COPSOQ II + Matriz de Risco</div>'+
      '<div style="font-size:11px;color:#78350f;background:#fffbeb;border:1px solid #fde68a;border-radius:6px;padding:7px 12px;margin-bottom:10px">'+
      (function(){
        var pf=getPGR();
        if(!pf) return 'Média automática do CSV. Preencha P, S e C conforme avaliação técnica. '+
          '<strong>P</strong> 1=Improvável 2=Possível 3=Provável &nbsp;·&nbsp; '+
          '<strong>S</strong> 1=Leve 2=Moderada 3=Grave &nbsp;·&nbsp; '+
          'Selecione o perfil do PGR para definir a metodologia da matriz.';
        var txt='Perfil: <strong>'+pf.nome+'</strong> — Matriz '+pf.tamanho+'×'+pf.tamanho+'. ';
        txt+='<strong>P:</strong> ';
        pf.pNomes.forEach(function(n,i){txt+=(i+1)+'='+n+' ';});
        txt+='&nbsp;·&nbsp; <strong>S:</strong> ';
        pf.sNomes.forEach(function(n,i){txt+=(i+1)+'='+n+' ';});
        if(pf.usaC) txt+='&nbsp;·&nbsp; <strong>C</strong> 1=Sem controle 2=Parcial 3=Efetivo';
        txt+=' &nbsp;— &nbsp;<em>'+pf.formulaLabel+'</em>';
        return txt;
      }())+'</div>'+
      '<div style="overflow-x:auto"><table><thead><tr>'+
      '<th>Domínio COPSOQ II</th>'+
      '<th style="text-align:center;width:85px">Média COPSOQ<br><small style="font-weight:400;opacity:.8">automático</small></th>'+
      '<th style="text-align:center;width:90px">Classif. COPSOQ</th>'+
      '<th style="text-align:center;width:58px">P<br><small style="font-weight:400">(1–'+(getPGR()?getPGR().tamanho:3)+')</small></th>'+
      '<th style="text-align:center;width:58px">S<br><small style="font-weight:400">(1–'+(getPGR()?getPGR().tamanho:3)+')</small></th>'+
      ((!getPGR()||getPGR().usaC)?'<th style="text-align:center;width:58px">C<br><small style="font-weight:400">(1–3)</small></th>':'')+
      (function(){var _ph=getPGR();
        if(_ph && !_ph.usaC){
          return '<th style="text-align:center;width:120px">Classificação<br><small style="font-weight:400">'+_ph.formulaLabel+'</small></th>';
        }
        return '<th style="text-align:center;width:80px">'+(_ph?'Nível':'RPN')+'<br><small style="font-weight:400">'+(_ph?_ph.formulaLabel:'')+'</small></th>'+
          '<th style="text-align:center;width:100px">Risco</th>';
      }())+
      '</tr></thead><tbody>'+tabRows+'</tbody></table></div>'+
      '<div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap;font-size:10px">'+
      (function(){
        var pf=getPGR();
        if(!pf) return '<span style="background:#fef9c3;padding:4px 12px;border-radius:20px;font-weight:600;font-size:10px">⚠️ Selecione o perfil do PGR para ver a legenda</span>';
        return pf.graus.map(function(g){
          return '<span style="background:'+g.cor+';color:'+g.corTxt+';padding:2px 8px;border-radius:20px;font-weight:600">'+g.nome+' ('+g.rpnMin+'–'+g.rpnMax+')</span>';
        }).join('');
      }())+
      '</div></div>';

    // D. Análise qualitativa — LOGO APÓS A TABELA
    // Monta texto inicial: comentários do CSV já salvos como base editável
    var savedComents=gv(setor,'coments_edit',null);
    var defaultComents=coments.length>0 ? coments.map(function(cc,ci){return '#'+(ci+1)+' '+cc;}).join('\n') : '';
    var comentVal=savedComents!==null ? savedComents : defaultComents;
    var setorEsc=setor.replace(/'/g,"\\'");
    var btnCopiar=coments.length?'<button class="btn-ai" style="font-size:10px;padding:3px 8px" onclick="modalSetor=\''+setorEsc+'\';copiado=false;render()">📋 Copiar para Claude</button>':'';
    var riscoAviso=riscos.length?'<div style="margin-top:5px;font-size:10px;color:#dc2626;font-weight:600">⚠️ Risco: '+riscos.map(function(d){return d+' ('+fmt(mDomS[d])+')'}).join(' · ')+'</div>':'';


    var qual='<div style="padding:12px 20px;border-bottom:2px solid #e2e8f0">'+
      '<div style="font-size:10px;font-weight:700;color:#64748b;text-transform:uppercase;margin-bottom:8px">💬 Questões Abertas e Sugestões de Melhoria</div>'+
      '<div style="display:grid;grid-template-columns:1fr 1fr;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;min-height:160px">'+
      '<div style="padding:12px;border-right:2px solid #e2e8f0;background:#fafafa">'+
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;flex-wrap:wrap;gap:4px">'+
      '<span style="font-size:11px;font-weight:700;color:#7c3aed">Verbalizações dos trabalhadores ('+coments.length+' do CSV)</span>'+
      '<span style="font-size:9px;color:#94a3b8">editável</span>'+btnCopiar+'</div>'+
      '<textarea style="width:100%;padding:7px;border:2px solid #e2e8f0;border-radius:6px;font-size:11px;font-family:inherit;resize:vertical;min-height:190px;line-height:1.6;background:white" '+
        'placeholder="Verbalizações dos trabalhadores (preenchido automaticamente do CSV, editável)..." '+
        'oninput="window._sv(\''+setor+'\',\'coments_edit\',this.value)">'+comentVal+'</textarea>'+
      '</div>'+
      '<div style="padding:12px;background:white">'+
      '<div style="font-size:11px;font-weight:700;color:#7d2020;margin-bottom:6px">💡 Sugestões de Melhoria</div>'+
      '<textarea style="width:100%;padding:9px;border:2px solid #e2e8f0;border-radius:7px;font-size:12px;font-family:inherit;resize:vertical;min-height:190px;line-height:1.6" '+
      'placeholder="Cole aqui as sugestões de melhoria geradas pelo Claude ou escreva as recomendações técnicas para este setor..." '+
      'oninput="window._sv(\''+setor+'\',\'qual\',this.value)">'+gv(setor,'qual','')+'</textarea>'+
      riscoAviso+'</div></div></div>';

    // E. Aviso se tudo favorável
    var avisoFav='';
    if(domsAtivos.length===0){
      avisoFav='<div style="padding:12px 20px;border-bottom:2px solid #e2e8f0">'+
        '<div style="background:#dcfce7;border:1px solid #86efac;border-radius:8px;padding:10px 14px;font-size:12px;color:#166534;font-weight:600">'+
        '✅ Todos os domínios estão em Situação Favorável — Hierarquia de Controle e Plano de Ação não são requeridos. Apenas monitoramento periódico.</div></div>';
    }

    // F. Hierarquia de Controle — ÚNICA por setor (integrada)
    var hier='';
    if(domsAtivos.length>0){
      var domAfet=domsAtivos;
      var temExig=domAfet.indexOf('Exigências Laborais')>=0;
      var temSaude=domAfet.indexOf('Saúde e Bem-Estar')>=0;
      var temInterface=domAfet.indexOf('Interface Trabalho-Indivíduo')>=0;
      var temRelacoes=domAfet.indexOf('Relações Sociais e Liderança')>=0;
      var temOrg=domAfet.indexOf('Organização do Trabalho e Conteúdo')>=0;
      var temValores=domAfet.indexOf('Valores no Local de Trabalho')>=0;
      var cadeiaExig=temExig&&(temSaude||temInterface);
      var cadeiaRel=temRelacoes&&(temValores||temInterface);
      var listaDoms=domAfet.map(function(d){return d+' ('+fmt(mDomS[d])+')'}).join(', ');
      var mExig=mDomS['Exigências Laborais'],mSaude=mDomS['Saúde e Bem-Estar'];
      var mIntf=mDomS['Interface Trabalho-Indivíduo'],mRel=mDomS['Relações Sociais e Liderança'];

      // Justificativas automáticas por nível (sem return interno)
      var justElim='Domínio(s) afetado(s): '+listaDoms+'. ';
      if(cadeiaExig) justElim+='As Exigências Laborais ('+fmt(mExig)+') constituem fator gerador primário, com impacto em cadeia sobre '+(temInterface?'Interface ('+fmt(mIntf)+') e ':'')+( temSaude?'Saúde e Bem-Estar ('+fmt(mSaude)+')':'')+'(Karasek & Theorell, 1990). ';
      if(cadeiaRel) justElim+='Fragilidades em Relações Sociais ('+fmt(mRel)+') potencializam percepção de injustiça (Siegrist, 1996). ';
      justElim+='A eliminação total raramente é viável, porém fontes evitáveis devem ser removidas (ausência de cobertura planejada, comunicação tardia de escalas, dupla jornada sistemática).';

      var justSubst=temExig?'O modelo atual de organização do trabalho que gera as exigências pode ser substituído por processos com maior previsibilidade e distribuição equilibrada. ':'';
      if(temRelacoes||temValores) justSubst+='Práticas de gestão que geram percepção de injustiça devem ser substituídas por protocolos formais e transparentes de avaliação e feedback. ';
      if(!justSubst) justSubst='Substituir processos geradores dos riscos identificados em: '+listaDoms+'.';

      var justEng='Controles organizacionais coletivos: ';
      if(temExig) justEng+='(1) Dimensionamento de equipe por turno; (2) Protocolo de redistribuição de tarefas em situações de falta de pessoal; (3) Revisão de tempos de procedimentos com base na carga real. ';
      if(temRelacoes) justEng+='(4) Reestruturação dos fluxos de comunicação interna entre coordenação e equipe. ';
      if(temOrg) justEng+='(5) Ampliação da autonomia dos trabalhadores nas decisões que afetam seu trabalho (ISO 45003:2021, §5.3). ';

      var justAdm='Medidas administrativas: ';
      if(temExig||temRelacoes) justAdm+='(1) Capacitação da coordenação em gestão de pessoas e sigilo de saúde (LGPD/CLT); (2) Reuniões periódicas de alinhamento equipe-coordenação; ';
      if(temValores) justAdm+='(3) Política de reconhecimento e plano de desenvolvimento profissional; ';
      justAdm+='(4) Revisão de escalas com antecedência mínima de 15 dias; (5) Canal formal de comunicação de demandas com prazo de resposta. Base: NR-01 §1.5.4.4.2.2; ISO 45003:2021 §6.1.2.';

      var justInd='Medida complementar (não substitui controles coletivos). ';
      if(temSaude) justInd+='Saúde e Bem-Estar em '+fmt(mSaude)+' ('+clTxt(classif(mSaude))+') indica trabalhadores já impactados. ';
      if(temInterface) justInd+='Interface em '+fmt(mIntf)+' indica dificuldade de desconexão do trabalho. ';
      justInd+='Disponibilizar apoio psicológico preventivo. Conforme ISO 45003:2021 e NR-17, o suporte individual deve acompanhar as intervenções organizacionais.';

      // Medidas automáticas por nível
      var medElim=temExig?'Eliminar: comunicação de escala com menos de 72h; ausência de plano de cobertura para períodos previsíveis (férias, picos); horas extras sistemáticas não compensadas.':'Eliminar fontes diretas e evitáveis dos riscos em: '+listaDoms+'.';
      var medSubst=temExig?'Substituir escala mensal com aviso tardio por escala trimestral com mínimo 15 dias de antecedência. Substituir gestão informal de demandas por canal formal com prazo de resposta (ex: 48h).':'Substituir os processos geradores por alternativas com menor exposição psicossocial.';
      var medEng='Dimensionar equipe por turno e período crítico. Criar escala de sobreaviso para cobertura de ausências. Revisar tempos de procedimentos com base na carga real de trabalho. Criar protocolo de redistribuição de tarefas em situações de falta de pessoal.';
      var medAdm='Capacitar coordenação em gestão de pessoas e sigilo de saúde (LGPD/CLT). Estabelecer reuniões mensais de alinhamento. Implementar análise de causa raiz para falhas técnicas. Criar política formal de reconhecimento e plano de carreira.';
      var medInd='Disponibilizar apoio psicológico preventivo por meio de parceria com psicólogo local ou convênio de saúde. Foco em aconselhamento, suporte emocional e estratégias de regulação emocional para prevenção do adoecimento psicológico.';

      var justs={elim:'',subst:'',eng:'',adm:'',ind:''};
      var meds={elim:'',subst:'',eng:'',adm:'',ind:''};

      // Cabeçalho com domínios integrados
      var domsBadges=domAfet.map(function(d){
        var cl2=classif(mDomS[d]);
        var bg=cl2==='ris'?'#fee2e2':cl2==='int'?'#fef9c3':'#dcfce7';
        var cor=cl2==='ris'?'#991b1b':cl2==='int'?'#854d0e':'#15803d';
        return '<span style="background:'+bg+';color:'+cor+';padding:2px 8px;border-radius:12px;font-size:10px;font-weight:700;margin:2px">'+d+' ('+fmt(mDomS[d])+')</span>';
      }).join('');

      hier='<div style="padding:14px 20px;border-bottom:2px solid #e2e8f0">';
      hier+='<div style="font-size:10px;font-weight:700;color:#64748b;text-transform:uppercase;margin-bottom:8px">🏗️ Hierarquia de Controle — Integrada (ISO 45003:2021 · NR-01 §1.5.4.4.2.2)</div>';
      hier+='<div style="background:#fdf2f2;border:1px solid #e8b4b4;border-radius:8px;padding:8px 12px;margin-bottom:10px;font-size:11px;color:#7d2020">';
      hier+='<strong>Domínios integrados:</strong><br><div style="margin-top:4px">'+domsBadges+'</div>';
      if(cadeiaExig) hier+='<div style="margin-top:6px;font-size:10px;color:#64748b;font-style:italic">⚡ Inter-relação: Exigências Laborais → Interface Trabalho-Indivíduo → Saúde e Bem-Estar (Karasek & Theorell, 1990)</div>';
      if(cadeiaRel)  hier+='<div style="margin-top:4px;font-size:10px;color:#64748b;font-style:italic">⚡ Inter-relação: Relações Sociais → Valores no Local de Trabalho (Siegrist, 1996)</div>';
      hier+='</div>';

      hier+='<div style="overflow-x:auto"><table style="min-width:700px">';
      hier+='<thead><tr>';
      hier+='<th style="width:130px">Nível</th>';
      hier+='<th style="width:80px;text-align:center">Analisado?</th>';
      hier+='<th>Justificativa Técnica <span style="font-weight:400;font-size:9px;color:#fde68a">(gerada automaticamente — editável)</span></th>';
      hier+='<th>Medidas de Melhoria / Prevenção</th>';
      hier+='<th style="width:140px">Responsável / Prazo</th>';
      hier+='</tr></thead><tbody>';

      for(var hj=0;hj<HIER.length;hj++){
        var hv=HIER[hj],hkey=HKEYS[hj];
        var huData=gv(setor,'hierUnica',{});
        var huNivel=(huData&&huData[hkey])||{};
        var anVal=huNivel.an||'';
        var justVal=huNivel.just||justs[hkey]||'';
        var medVal=huNivel.med||meds[hkey]||'';
        var respVal=huNivel.resp||'';
        var opts=['','Sim','Não','Parcial'].map(function(o){return '<option'+(anVal===o?' selected':'')+'>'+o+'</option>';}).join('');
        hier+='<tr style="background:'+hv.bg+'20">';
        hier+='<td style="font-size:11px;border-left:4px solid '+hv.cor+';padding:8px 10px"><strong style="color:'+hv.cor+';display:block">'+hv.n+'</strong><span style="color:#64748b;font-size:9px">'+hv.d+'</span></td>';
        hier+='<td style="text-align:center;padding:6px"><select style="width:72px;padding:4px 2px;border:2px solid '+hv.cor+';border-radius:6px;font-size:11px;font-weight:700" onchange="window._svHier(\''+setor+'\',\''+hkey+'\',\'an\',this.value)">'+opts+'</select></td>';
        hier+='<td style="padding:6px">'+ta('Justificativa técnica...',justVal,"window._svHier('"+setor+"','"+hkey+"','just',this.value)")+'</td>';
        hier+='<td style="padding:6px">'+ta('Medidas concretas...',medVal,"window._svHier('"+setor+"','"+hkey+"','med',this.value)")+'</td>';
        hier+='<td style="padding:6px">'+ta('Responsável e prazo...',respVal,"window._svHier('"+setor+"','"+hkey+"','resp',this.value)")+'</td>';
        hier+='</tr>';
      }
      hier+='</tbody></table></div></div>';
    }

    // G. Plano de ação — removido do setor, agora é consolidado
    var plano='';

    blocos+='<div class="aep-section" style="border:2px solid #7d2020" id="setor_'+sid+'">'+hdr+ident+matriz+qual+avisoFav+hier+plano+'<div style="text-align:right;padding:4px 8px"><a href="#aep-indice" style="font-size:10px;color:#9e3535;text-decoration:none">⬆️ Voltar ao índice</a></div></div>';
  }

  // CONCLUSÃO GERAL
  var chkItems=["AEP Psicossocial assinada pelo Responsável Técnico",
    "PGR com inventário de riscos por GHE atualizado (psicossociais incluídos)",
    "PCMSO atualizado contemplando agravos psicossociais (LDRT)",
    "Resultados COPSOQ II arquivados (relatório + planilha)",
    "Plano de Ação formalizado por GHE e em execução (NR-01 item 17.3.6)",
    "Comunicação dos resultados aos trabalhadores (NR-01 item 1.5.3)",
    "Ata de CIPA com pauta sobre riscos psicossociais",
    "Registros de treinamentos realizados",
    "Política de prevenção ao assédio implementada (Lei 14.457/2022)",
    "Canal de denúncia de assédio ativo e divulgado"];
  var chkHtml='';
  for(var ci2=0;ci2<chkItems.length;ci2++){
    chkHtml+='<div style="display:flex;align-items:flex-start;gap:10px;padding:7px 0;border-bottom:1px solid #f1f5f9">'+
      '<input type="checkbox" style="width:15px;height:15px;cursor:pointer;margin-top:2px;flex-shrink:0" id="chk'+ci2+'"/>'+
      '<label for="chk'+ci2+'" style="cursor:pointer;color:#334155;font-size:12px;line-height:1.5">'+chkItems[ci2]+'</label></div>';
  }
  var concl='<div class="aep-section"><div class="aep-section-header">⚖️ CONCLUSÃO GERAL E CHECKLIST DE AUDITORIA</div>'+
    '<div class="aep-section-body">'+
    '<div class="aep-field" style="margin-bottom:14px"><label class="aep-label">Conclusão Técnica Geral</label>'+
    '<textarea class="aep-input" rows="4" placeholder="Síntese dos resultados de todos os setores..." oninput="aepSet(\'conclusao\',this.value)">'+(aep.conclusao||'')+'</textarea></div>'+
    '<div class="aep-field" style="margin-bottom:18px"><label class="aep-label">Recomendações Gerais</label>'+
    '<textarea class="aep-input" rows="4" placeholder="Recomendações gerais para a organização..." oninput="aepSet(\'recomendacoes\',this.value)">'+(aep.recomendacoes||'')+'</textarea></div>'+
    '<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px">'+
    '<div style="font-size:12px;font-weight:700;color:#7d2020;margin-bottom:10px">☑ CHECKLIST PARA AUDITORIA MTE/SRTE</div>'+
    chkHtml+'</div></div></div>';


  // ── PLANO DE AÇÃO CONSOLIDADO ──────────────────────────────
  migrarPlanoIndividual();
  var pc=aep.planoConsolidado||[];
  
  // Garantir ação obrigatória: Devolutiva dos resultados da ARP aos trabalhadores
  var temDevolutiva=pc.some(function(a){return (a.acao||'').toLowerCase().indexOf('devolutiva')>=0||a.tipo==='devolutiva';});
  if(!temDevolutiva){
    var setoresAll=Object.keys(aep.ghe||{}).sort();
    if(setoresAll.length===0&&dados.length){
      setoresAll=[...new Set(dados.map(function(d){return d.setor;}))].sort();
    }
    pc.unshift({
      id:'pc_devolutiva_'+Date.now(),
      tipo:'devolutiva',
      setores:setoresAll,
      dominio:'Processo ARP',
      acao:'A devolutiva dos resultados e coleta de contribuições dos trabalhadores foi realizada durante a etapa de escuta qualitativa, conforme registros no item 4.0. Esta ação refere-se à comunicação formal das medidas aprovadas e dos prazos de implementação aos setores avaliados.',
      medida:'Emitir comunicado oficial por setor informando as medidas aprovadas no Plano de Ação, os prazos de execução e os responsáveis designados, em conformidade com a NR-01 §1.5.3.3.',
      responsavel:'SESMT / RH / Responsável Técnico',
      prazo:'60 dias após emissão da ARP',
      status:'Pendente',
      evidencia:'Comunicado interno, e-mail corporativo, mural, ata de reunião setorial',
      prioridade:'int',
      origem:'obrigatoria'
    });
    aep.planoConsolidado=pc;
    salvarAEP();
  }
  
  // Recalcular prioridade de cada ação conforme nível de risco dos setores
  pc.forEach(function(ac){
    if(ac.tipo==='devolutiva') return; // mantém prioridade fixa MÉDIA
    if(!ac.dominio) return;
    var maiorRPN=0;
    var di=DOMS.indexOf(ac.dominio);
    if(di<0) return;
    (ac.setores||[]).forEach(function(setor){
      if(!aep.ghe||!aep.ghe[setor]) return;
      var mz=(aep.ghe[setor].mz||[])[di]||{};
      var p=+mz.p||0, s=+mz.s||0, cv=+mz.c||0;
      if(p&&s&&cv){
        var rpn;
        var _pf2=getPGR();
        if(_pf2){var _r2=calcRiscoPGR(p,s,cv);rpn=_r2?_r2.rpn:0;}
        else{rpn=(cv?p*s/cv:0);}
        if(rpn>maiorRPN) maiorRPN=rpn;
      }
    });
    // Classificar prioridade pelo maior RPN entre os setores abrangidos
    // >4 Substancial/Intolerável = ALTA | 2-4 Moderado = MÉDIA | ≤2 = BAIXA
    (function(){
      var _pp3=getPGR();
      if(_pp3){
        var gl=_pp3.graus.length;
        var limAlto=_pp3.graus[gl>=5?3:gl-2].rpnMax;
        var limMedio=_pp3.graus[gl>=5?2:Math.floor(gl/2)].rpnMax;
        if(maiorRPN>limAlto) ac.prioridade='ris';
        else if(maiorRPN>limMedio) ac.prioridade='int';
        else if(maiorRPN>0) ac.prioridade='baixa';
      } else {
        if(maiorRPN>4) ac.prioridade='ris';
        else if(maiorRPN>2) ac.prioridade='int';
        else if(maiorRPN>0) ac.prioridade='baixa';
      }
    }());
    // Se nenhum setor tem P/S/C preenchido, usar COPSOQ como fallback
    if(maiorRPN===0 && dados && dados.length){
      var piorCl='';
      (ac.setores||[]).forEach(function(setor){
        var vals=dados.filter(function(d){return d.setor===setor;}).map(function(d){return mediaDom(d,ac.dominio);}).filter(function(v){return v>0;});
        var media=vals.length?vals.reduce(function(a,b){return a+b;},0)/vals.length:0;
        var cl=classif(media);
        if(cl==='ris') piorCl='ris';
        else if(cl==='int'&&piorCl!=='ris') piorCl='int';
      });
      if(piorCl) ac.prioridade=piorCl;
    }
  });
  salvarAEP();
  var setoresDisp=[...new Set(dados.map(function(d){return d.setor;}))].sort();
  
  window._forcarRemigrar=function(){
    if(!confirm('Isso vai ler novamente TODOS os dados preenchidos por setor e reconstruir o plano consolidado. Dados editados no consolidado serão substituídos. Continuar?')) return;
    aep.planoConsolidado=[];
    aep._planoMigrado=false;
    // Re-migrar com lógica de concatenação
    var setoresExist=Object.keys(aep.ghe||{});
    var porDom={};
    function consolidarTextos2(arr){
      if(!arr||!arr.length) return '';
      var textos={};
      arr.forEach(function(item){
        var t=(item.texto||'').trim();
        if(!t) return;
        if(!textos[t]) textos[t]=[];
        if(textos[t].indexOf(item.setor)<0) textos[t].push(item.setor);
      });
      var chaves=Object.keys(textos);
      if(chaves.length===0) return '';
      if(chaves.length===1) return chaves[0];
      return chaves.map(function(t){return '['+textos[t].join(', ')+']: '+t;}).join(' | ');
    }
    setoresExist.forEach(function(setor){
      var mzS=(aep.ghe[setor]&&aep.ghe[setor].mz)||[];
      DOMS.forEach(function(dom,di){
        var mz=mzS[di]||{};
        if(!mz.acoes&&!mz.medida&&!mz.resp&&!mz.prazo) return;
        if(!porDom[dom]) porDom[dom]={setores:[],acoes:[],medidas:[],responsaveis:[],prazos:[],evidencias:[],status:'Pendente'};
        if(porDom[dom].setores.indexOf(setor)<0) porDom[dom].setores.push(setor);
        if(mz.acoes) porDom[dom].acoes.push({setor:setor,texto:mz.acoes});
        if(mz.medida) porDom[dom].medidas.push({setor:setor,texto:mz.medida});
        if(mz.resp) porDom[dom].responsaveis.push({setor:setor,texto:mz.resp});
        if(mz.prazo) porDom[dom].prazos.push({setor:setor,texto:mz.prazo});
        if(mz.evidencia) porDom[dom].evidencias.push({setor:setor,texto:mz.evidencia});
        if(mz.status==='Em andamento'||mz.status==='Concluído') porDom[dom].status=mz.status;
      });
    });
    Object.keys(porDom).forEach(function(dom){
      var g=porDom[dom];
      // Determinar prioridade pelo nível de risco, fallback COPSOQ
      var maiorRPN=0;
      var di=DOMS.indexOf(dom);
      g.setores.forEach(function(setor){
        if(di>=0&&aep.ghe&&aep.ghe[setor]){
          var mz=(aep.ghe[setor].mz||[])[di]||{};
          var p=+mz.p||0,s=+mz.s||0,cv=+mz.c||0;
          (function(){if(p&&s){var _pfx=getPGR();if(_pfx){var _rx=calcRiscoPGR(p,s,cv);if(_rx&&_rx.rpn>maiorRPN)maiorRPN=_rx.rpn;}else if(cv){var rpn=p*s/cv;if(rpn>maiorRPN)maiorRPN=rpn;}}}());
        }
      });
      var pior=(function(){
        var _pp4=getPGR();
        if(_pp4){
          var gl=_pp4.graus.length;
          var limAlto=_pp4.graus[gl>=5?3:gl-2].rpnMax;
          var limMedio=_pp4.graus[gl>=5?2:Math.floor(gl/2)].rpnMax;
          if(maiorRPN>limAlto) return 'ris';
          if(maiorRPN>limMedio) return 'int';
          if(maiorRPN>0) return 'baixa';
        } else {
          if(maiorRPN>4) return 'ris';
          if(maiorRPN>2) return 'int';
          if(maiorRPN>0) return 'baixa';
        }
        return '';
      }());
      // Fallback COPSOQ se sem RPN
      if(!pior&&dados&&dados.length){
        g.setores.forEach(function(setor){
          var vals=dados.filter(function(d){return d.setor===setor;}).map(function(d){return mediaDom(d,dom);}).filter(function(v){return v>0;});
          var media=vals.length?vals.reduce(function(a,b){return a+b;},0)/vals.length:0;
          var cl=classif(media);
          if(cl==='ris') pior='ris';
          else if(cl==='int'&&pior!=='ris') pior='int';
        });
      }
      aep.planoConsolidado.push({
        id:'pc_'+Date.now()+'_'+Math.random().toString(36).substr(2,5),
        setores:g.setores.sort(),
        dominio:dom,
        acao:consolidarTextos2(g.acoes),
        medida:consolidarTextos2(g.medidas),
        responsavel:consolidarTextos2(g.responsaveis),
        prazo:consolidarTextos2(g.prazos),
        status:g.status,
        evidencia:consolidarTextos2(g.evidencias),
        prioridade:pior,
        origem:'remigrado'
      });
    });
    aep._planoMigrado=true;
    salvarAEP();
    renderizarInterface();
    showMsg('✅ Plano reconstruído com '+aep.planoConsolidado.length+' ação(ões) a partir dos dados por setor. Todos os textos foram preservados.',true);
  };

  var planoUI='<div class="aep-section"><div class="aep-section-header">📋 PLANO DE AÇÃO CONSOLIDADO — NR-01 §1.5.4.4</div>'+
    '<div class="aep-section-body">'+
    '<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">'+
    '<button onclick="window._sugerirPlano()" style="background:#7d2020;color:#fff;border:none;padding:8px 16px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">🤖 Sugerir Plano de Ação</button>'+
    '<button onclick="window._addAcaoPlano()" style="background:#1e3a5f;color:#fff;border:none;padding:8px 16px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">➕ Adicionar Ação Manual</button>'+
    '<button onclick="window._forcarRemigrar()" style="background:#b45309;color:#fff;border:none;padding:8px 16px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">🔄 Reconstruir dos Setores</button>'+
    '</div>'+
    '<p style="font-size:11px;color:#64748b;margin-bottom:12px"><strong>Sugerir Plano</strong> lê hierarquias e domínios em risco/intermediário e gera ações agrupadas por domínio. <strong>Reconstruir dos Setores</strong> relê todos os dados já preenchidos nos planos individuais por setor e junta os textos sem perder nenhuma informação (use quando migrar pela primeira vez).</p>';
  
  if(pc.length===0){
    planoUI+='<div style="text-align:center;padding:30px;color:#94a3b8"><p style="font-size:28px;margin-bottom:8px">📋</p><p style="font-size:13px">Nenhuma ação cadastrada. Clique em <strong>Sugerir Plano de Ação</strong> para gerar automaticamente.</p></div>';
  } else {
    for(var pi=0;pi<pc.length;pi++){
      var ac=pc[pi];
      var prCor=ac.prioridade==='ris'?'#dc2626':ac.prioridade==='int'?'#d97706':'#16a34a';
      var prBg=ac.prioridade==='ris'?'#fee2e2':ac.prioridade==='int'?'#fef9c3':'#dcfce7';
      var prTxt=ac.prioridade==='ris'?'ALTA':ac.prioridade==='int'?'MÉDIA':'BAIXA';
      var stColor=(ac.status||'Pendente')==='Concluído'?'#16a34a':(ac.status||'Pendente')==='Em andamento'?'#d97706':'#64748b';
      
      planoUI+='<div style="border:1px solid #e2e8f0;border-radius:10px;margin-bottom:10px;overflow:hidden;border-left:4px solid '+prCor+'">'+
        '<div style="background:#f8fafc;padding:8px 12px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;border-bottom:1px solid #e2e8f0">'+
        '<span style="background:'+prBg+';color:'+prCor+';padding:2px 10px;border-radius:12px;font-size:10px;font-weight:700">'+prTxt+'</span>'+
        '<div style="flex:1;min-width:200px"><span style="font-weight:700;font-size:12px;color:#1e3a5f">'+(ac.dominio||'—')+'</span>'+
        '<div style="font-size:10px;color:#64748b;margin-top:1px;font-style:italic">'+(FATORES_RISCO[ac.dominio]||'')+'</div></div>'+
        '<span style="font-size:10px;color:#64748b">Setores: '+(ac.setores||[]).join(', ')+'</span>'+
        '<button onclick="window._removerAcaoPlano('+pi+')" style="margin-left:auto;background:#fee2e2;color:#dc2626;border:none;padding:3px 10px;border-radius:6px;font-size:10px;cursor:pointer" title="Remover ação">✕</button>'+
        '</div>'+
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:0">'+
        '<div style="padding:10px;border-right:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0">'+
          '<label style="font-size:9px;font-weight:700;color:#64748b;text-transform:uppercase;display:block;margin-bottom:4px">Ação proposta</label>'+
          ta('Descreva a ação...',ac.acao,"window._editPlano("+pi+",'acao',this.value)")+
        '</div>'+
        '<div style="padding:10px;border-bottom:1px solid #e2e8f0">'+
          '<label style="font-size:9px;font-weight:700;color:#64748b;text-transform:uppercase;display:block;margin-bottom:4px">Medida preventiva</label>'+
          ta('Como será implementado...',ac.medida,"window._editPlano("+pi+",'medida',this.value)")+
        '</div>'+
        '<div style="padding:10px;border-right:1px solid #e2e8f0">'+
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">'+
          '<div><label style="font-size:9px;font-weight:700;color:#64748b;display:block;margin-bottom:2px">Setores abrangidos</label>'+
          '<input style="width:100%;padding:6px;border:1px solid #e2e8f0;border-radius:6px;font-size:11px" value="'+(ac.setores||[]).join(', ')+'" placeholder="Setor 1, Setor 2..." oninput="window._editPlanoSetores('+pi+',this.value)"/></div>'+
          '<div><label style="font-size:9px;font-weight:700;color:#64748b;display:block;margin-bottom:2px">Domínio COPSOQ / Fator de Risco</label>'+
          '<select style="width:100%;padding:6px;border:1px solid #e2e8f0;border-radius:6px;font-size:11px" onchange="window._editPlano('+pi+',\'dominio\',this.value)">'+
          '<option value="">— Selecione —</option>'+
          DOMS.map(function(d){return '<option'+(d===ac.dominio?' selected':'')+'>'+d+'</option>';}).join('')+
          '</select></div>'+
          '</div>'+
        '</div>'+
        '<div style="padding:10px">'+
          '<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:6px">'+
          '<div><label style="font-size:9px;font-weight:700;color:#64748b;display:block;margin-bottom:2px">Responsável</label>'+
          '<input style="width:100%;padding:6px;border:1px solid #e2e8f0;border-radius:6px;font-size:11px" value="'+(ac.responsavel||'')+'" placeholder="Nome/cargo" oninput="window._editPlano('+pi+',\'responsavel\',this.value)"/></div>'+
          '<div><label style="font-size:9px;font-weight:700;color:#64748b;display:block;margin-bottom:2px">Prazo</label>'+
          '<input style="width:100%;padding:6px;border:1px solid #e2e8f0;border-radius:6px;font-size:11px" value="'+(ac.prazo||'')+'" placeholder="30/60/90 dias" oninput="window._editPlano('+pi+',\'prazo\',this.value)"/></div>'+
          '<div><label style="font-size:9px;font-weight:700;color:#64748b;display:block;margin-bottom:2px">Status</label>'+
          '<select style="width:100%;padding:6px;border:1px solid #e2e8f0;border-radius:6px;font-size:11px" onchange="window._editPlano('+pi+',\'status\',this.value)">'+
          ['Pendente','Em andamento','Concluído','Cancelado'].map(function(o){return '<option'+((ac.status||'Pendente')===o?' selected':'')+'>'+o+'</option>';}).join('')+
          '</select></div>'+
          '<div><label style="font-size:9px;font-weight:700;color:#64748b;display:block;margin-bottom:2px">Evidência</label>'+
          '<input style="width:100%;padding:6px;border:1px solid #e2e8f0;border-radius:6px;font-size:11px" value="'+(ac.evidencia||'')+'" placeholder="Ata, e-mail..." oninput="window._editPlano('+pi+',\'evidencia\',this.value)"/></div>'+
          '</div>'+
          '<div style="margin-top:6px"><label style="font-size:9px;font-weight:700;color:#7d2020;display:block;margin-bottom:2px">Indicador de Resultado</label>'+
          ta('Indicadores de acompanhamento...',ac.indicador||(INDICADORES_RESULTADO[ac.dominio]||''),"window._editPlano("+pi+",'indicador',this.value)")+
          '</div>'+
        '</div>'+
        '</div></div>';
    }
  }
  // Linha PDCA ao final do plano
  planoUI+='<div style="background:#fffbeb;border:1px solid #fde68a;border-radius:10px;padding:14px 16px;margin-top:12px">'+
    '<div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:6px">🔄 Ciclo de Aferição de Resultados (PDCA)</div>'+
    '<p style="font-size:11px;color:#78350f;line-height:1.6;margin:0">A reaplicação do COPSOQ II está prevista para <strong>'+(aep.doc_prox_revisao||'(data não definida — preencha em "Próxima Revisão")')+'</strong>, em conformidade com a NR-01 §1.5.4.4.6. '+
    'Os indicadores de resultado definidos neste Plano de Ação serão monitorados semestralmente pelo setor de RH em conjunto com o Responsável Técnico, '+
    'com registro formal dos resultados e atualização do inventário de riscos do PGR sempre que houver alteração no nível de risco apurado.</p>'+
    '</div>';
  planoUI+='</div></div>';

  return cab+jumpMenu+blocos+planoUI+concl;

}
function gerarAEPpdf(){
  salvarAEP(); // garantir que edições pendentes sejam persistidas antes de imprimir
  if(!dados.length){showMsg("⚠️ Importe o CSV antes de imprimir a AEP.",false);return;}
  var setores=[...new Set(dados.map(function(d){return d.setor;}))].sort();
  var agora=new Date().toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"});
  var emp=aep.empresa||"[Empresa não informada]";
  var cnpj=aep.cnpj||"";
  var end=aep.endereco||"";
  var resp=aep.responsavel||"";
  var dt=aep.data||agora;
  var pgr=aep.pgr||"";
  var pcmso=aep.pcmso||"";
  var base=aep.base_legal||"NR-01 (Port. MTE 1.419/2024) | NR-17 | ISO 45003:2021";
  var docNum=aep.doc_numero||"";
  var docVer=aep.doc_versao||"01";
  var docRev=aep.doc_revisao||"";
  var docProxRev=aep.doc_prox_revisao||"";
  var cnae=aep.cnae||"";
  var grauRisco=aep.grau_risco||"";
  var totalTrab=aep.total_trab||"";
  var escopo=aep.escopo||"";
  var crea=aep.crea||"";

  // Tamanhos de capa: largura máxima preservando proporção
  var logoTamCapa={'pequeno':'80px','medio':'140px','grande':'200px','extra':'280px'};
  // Tamanhos de cabeçalho: altura fixa preservando proporção
  var logoTamHdr={'pequeno':'22px','medio':'32px','grande':'44px','extra':'56px'};
  var logoSzCapa=logoTamCapa[aep.logoTam||'medio'];
  var logoSzHdr=logoTamHdr[aep.logoTamHdr||aep.logoTam||'medio'];
  var logoHtml=aep.logoSrc?'<img src="'+aep.logoSrc+'" style="max-width:'+logoSzCapa+';max-height:'+logoSzCapa+';object-fit:contain;display:block" alt="Logo"/>':'';
  var logoHtmlSm=aep.logoSrc?'<img src="'+aep.logoSrc+'" style="height:'+logoSzHdr+';max-width:120px;object-fit:contain" alt="Logo"/>':'';
  var concl=aep.conclusao||"";
  var recom=aep.recomendacoes||"";
  if(!aep.ghe)aep.ghe={};

  function gv(s,k,fb){var o=aep.ghe[s];return(o&&o[k]!=null)?o[k]:fb;}
  function gmz(s,i){if(!aep.ghe[s])aep.ghe[s]={};if(!aep.ghe[s].mz)aep.ghe[s].mz=DOMS.map(function(){return{};});return aep.ghe[s].mz[i];}
  function ghr(s,i){if(!aep.ghe[s])aep.ghe[s]={};if(!aep.ghe[s].hr)aep.ghe[s].hr=DOMS.map(function(){return{};});return aep.ghe[s].hr[i];}
  function clBadge(cl){return cl==="fav"?"<span class='aep-badge-g'>Favorável</span>":cl==="int"?"<span class='aep-badge-a'>Intermediária</span>":cl==="ris"?"<span class='aep-badge-r'>Risco</span>":"<span>—</span>";}
  function nrClass(nr){return nr===null?"":nr<=1?"aep-nr-t":nr<=2?"aep-nr-b":nr<=4?"aep-nr-m":nr<=8?"aep-nr-a":"aep-nr-c";}
  var HKEYS=["elim","subst","eng","adm","ind"];
  var HIERNAMES=["1–Eliminação","2–Substituição","3–Coletiva/Eng.","4–Administrativa","5–Ind./Proteção"];
  // Mapa de exibição: COPSOQ II → Fator de Risco GRO/PGR (só para PDF, não altera cálculos)
  var DOMS_PGR={
    "Exigências Laborais":"Excesso de demandas no trabalho",
    "Organização do Trabalho e Conteúdo":"Baixo controle / Falta de autonomia",
    "Relações Sociais e Liderança":"Falta de suporte; Maus relacionamentos",
    "Valores no Local de Trabalho":"Baixa justiça org.; Baixas recompensas",
    "Personalidade":"Fator individual moderador",
    "Interface Trabalho-Indivíduo":"Má gestão de mudanças; Difícil conciliação",
    "Saúde e Bem-Estar":"Indicador de desfecho",
    "Comportamento Ofensivo":"Assédio no trabalho; Eventos violentos"
  };
  function domLabel(d){var pgr=DOMS_PGR[d];return pgr?d+'<br><span style="font-size:6pt;color:#64748b;font-weight:400">'+pgr+'</span>':d;}
  var HIERCOR=["#dc2626","#ea580c","#ca8a04","#6b4226","#16a34a"];

  // ── PÁGINA 1: CAPA ─────────────────────────────────────────────
  var capa=(function(){
    var h='';
    // ── Página capa — fundo branco, paleta neutra
    h+='<div class="aep-page" style="padding:0;display:flex;flex-direction:column;min-height:267mm;background:#ffffff">';

    // ── Topo: faixa clara com borda inferior discreta
    h+='<div style="background:#f8f9fa;border-bottom:3px solid #dee2e6;padding:22px 28px 18px;display:flex;justify-content:space-between;align-items:center">';
    h+='<div>';
    h+='<div style="color:#868e96;font-size:6.5pt;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:2px">Mendes &amp; Silva &nbsp;·&nbsp; Cuidado em Psicologia Organizacional</div>';
    h+='<div style="color:#adb5bd;font-size:6pt;margin-bottom:8px">CNPJ 50.995.730/0001-48 &nbsp;·&nbsp; (77) 98818-6907</div>';
    h+='<div style="color:#212529;font-size:19pt;font-weight:800;line-height:1.15;margin-bottom:5px">ARP — Avaliação de Riscos<br>Psicossociais do Trabalho</div>';
    h+='<div style="color:#6c757d;font-size:8.5pt;font-weight:400">Avaliação Ergonômica Preliminar &nbsp;·&nbsp; COPSOQ II &nbsp;·&nbsp; Dimensão Psicossocial</div>';
    h+='</div>';
    if(aep.logoSrc){h+='<img src="'+aep.logoSrc+'" style="max-width:'+logoSzCapa+';max-height:'+logoSzCapa+';object-fit:contain;display:block" alt="Logo"/>';}
    else{h+='<div style="border:2px solid #dee2e6;border-radius:8px;padding:10px 16px;color:#6c757d;font-size:8pt;font-weight:700;text-align:center;background:#fff">AEP<br>Psicossocial</div>';}
    h+='</div>';

    // ── Faixa base legal — cinza-claro discreto
    h+='<div style="background:#e9ecef;padding:5px 28px;font-size:6.5pt;color:#6c757d;letter-spacing:.2px">'+base+'</div>';

    // ── Corpo principal
    h+='<div style="flex:1;padding:20px 28px;display:flex;flex-direction:column;gap:16px">';

    // Helpers internos
    function secTitle(t){return '<div style="font-size:6.5pt;font-weight:700;color:#495057;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;display:flex;align-items:center;gap:6px"><span style="width:14px;height:2px;background:#adb5bd;display:inline-block"></span>'+t+'<span style="flex:1;height:1px;background:#dee2e6;display:inline-block"></span></div>';}

    // Empresa
    h+=secTitle('Identificação da Empresa');
    h+='<div style="border:1px solid #dee2e6;border-radius:6px;overflow:hidden">';
    h+='<table style="width:100%;border-collapse:collapse">';
    h+='<tr>';
    h+='<td style="padding:7px 12px;border:1px solid #dee2e6;background:#f8f9fa;width:120px;font-size:6.5pt;font-weight:700;color:#868e96;text-transform:uppercase">Razão Social</td>';
    h+='<td colspan="3" style="padding:7px 12px;border:1px solid #dee2e6;font-size:10.5pt;font-weight:700;color:#212529">'+emp+'</td>';
    h+='</tr><tr>';
    h+='<td style="padding:6px 12px;border:1px solid #dee2e6;background:#f8f9fa;font-size:6.5pt;font-weight:700;color:#868e96;text-transform:uppercase">CNPJ</td>';
    h+='<td style="padding:6px 12px;border:1px solid #dee2e6;font-size:8.5pt;color:#495057;width:160px">'+(cnpj||'—')+'</td>';
    h+='<td style="padding:6px 12px;border:1px solid #dee2e6;background:#f8f9fa;font-size:6.5pt;font-weight:700;color:#868e96;text-transform:uppercase;width:80px">CNAE</td>';
    h+='<td style="padding:6px 12px;border:1px solid #dee2e6;font-size:8.5pt;color:#495057">'+(cnae||'—')+'</td>';
    h+='</tr><tr>';
    h+='<td style="padding:6px 12px;border:1px solid #dee2e6;background:#f8f9fa;font-size:6.5pt;font-weight:700;color:#868e96;text-transform:uppercase">Endereço</td>';
    h+='<td colspan="3" style="padding:6px 12px;border:1px solid #dee2e6;font-size:8.5pt;color:#495057">'+(end||'—')+'</td>';
    h+='</tr><tr>';
    h+='<td style="padding:6px 12px;border:1px solid #dee2e6;background:#f8f9fa;font-size:6.5pt;font-weight:700;color:#868e96;text-transform:uppercase">Grau de Risco</td>';
    h+='<td style="padding:6px 12px;border:1px solid #dee2e6;font-size:8.5pt;font-weight:700;color:#343a40">'+(grauRisco?'GR '+grauRisco+' — NR-4':'—')+'</td>';
    h+='<td style="padding:6px 12px;border:1px solid #dee2e6;background:#f8f9fa;font-size:6.5pt;font-weight:700;color:#868e96;text-transform:uppercase">Nº Trabalhadores</td>';
    h+='<td style="padding:6px 12px;border:1px solid #dee2e6;font-size:8.5pt;color:#495057">'+(totalTrab||dados.length||'—')+'</td>';
    h+='</tr></table></div>';

    // GRO + Responsável
    h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">';
    // GRO
    h+='<div>'+secTitle('Documento GRO / PGR');
    h+='<table style="width:100%;border-collapse:collapse;font-size:8.5pt">';
    var gro_rows=[['Nº Documento',docNum||'—'],['Versão / Revisão',(docVer||'01')+' · '+(docRev||'—')],['Próxima Revisão',docProxRev||'—'],['PGR Nº',pgr||'—'],['PCMSO Nº',pcmso||'—']];
    gro_rows.forEach(function(row){
      h+='<tr><td style="padding:5px 10px;background:#f8f9fa;border:1px solid #dee2e6;width:42%;font-size:6.5pt;font-weight:700;color:#868e96;text-transform:uppercase">'+row[0]+'</td>';
      h+='<td style="padding:5px 10px;border:1px solid #dee2e6;color:#495057">'+row[1]+'</td></tr>';
    });
    h+='</table></div>';
    // Responsável
    h+='<div>'+secTitle('Responsável Técnico');
    h+='<table style="width:100%;border-collapse:collapse;font-size:8.5pt">';
    var resp_rows=[['Nome',resp],['Registro (CRP)',crea||'—'],['Data de Emissão',dt]];
    resp_rows.forEach(function(row){
      h+='<tr><td style="padding:5px 10px;background:#f8f9fa;border:1px solid #dee2e6;width:42%;font-size:6.5pt;font-weight:700;color:#868e96;text-transform:uppercase">'+row[0]+'</td>';
      h+='<td style="padding:5px 10px;border:1px solid #dee2e6;color:#495057;font-weight:'+(row[0]==='Nome'?'700':'400')+'">'+row[1]+'</td></tr>';
    });
    h+='</table></div></div>';

    // Escopo
    if(escopo){
      h+=secTitle('Escopo da Avaliação');
      h+='<div style="border:1px solid #dee2e6;border-radius:6px;padding:8px 12px;font-size:8.5pt;color:#495057;line-height:1.6;background:#f8f9fa">'+escopo+'</div>';
    }

    // Cards de resumo — fundo neutro, accent cinza-médio
    h+='<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:auto">';
    var cards=[[setores.length,'Setores / GHEs'],[dados.length,'Respondentes COPSOQ'],['41','Questões COPSOQ II'],['8','Domínios Avaliados']];
    cards.forEach(function(card){
      h+='<div style="background:#f8f9fa;border:1px solid #dee2e6;border-top:3px solid #adb5bd;border-radius:6px;padding:12px 8px;text-align:center">';
      h+='<div style="font-size:18pt;font-weight:800;color:#343a40;line-height:1">'+card[0]+'</div>';
      h+='<div style="font-size:6.5pt;color:#868e96;text-transform:uppercase;font-weight:600;margin-top:4px">'+card[1]+'</div>';
      h+='</div>';
    });
    h+='</div>';

    h+='</div>';

    // Rodapé
    h+='<div style="background:#f8f9fa;border-top:1px solid #dee2e6;padding:7px 28px;display:flex;justify-content:space-between;align-items:center">';
    h+='<div style="font-size:6.5pt;color:#adb5bd">Mendes &amp; Silva · CNPJ 50.995.730/0001-48 · (77) 98818-6907 &nbsp;|&nbsp; Documento complementar ao PGR · NR-01 · NR-17</div>';
    h+='<div style="font-size:6.5pt;color:#adb5bd;font-weight:600">Emitido em '+dt+'</div>';
    h+='</div>';

    h+='</div>';
    return h;
  }());
  var paginaGRO='';

// ── PÁGINA 2: INTRODUÇÃO ─────────────────────────────────────
  var intro='<div class="aep-page">'+
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-bottom:6px;border-bottom:2px solid #7d2020">'+
      (aep.logoPos!=='capa_only'&&aep.logoSrc?'<img src="'+aep.logoSrc+'" style="height:'+logoSzHdr+';max-width:150px;object-fit:contain" alt="Logo"/>':'')+
      '<span style="font-size:7pt;color:#94a3b8">AEP Psicossocial · COPSOQ II · '+dt+'</span>'+
    '</div>'+
    '<div class="aep-ph">1. Introdução</div>'+
    '<p class="aep-txt">Os riscos psicossociais, cada vez mais reconhecidos como desafios para a saúde e segurança no trabalho, envolvem fatores como organização do trabalho, relações sociais, ambiente e tarefas. Esses riscos podem afetar a saúde mental e física dos trabalhadores e impactar a performance organizacional, gerando custos econômicos. A gestão eficaz desses riscos, alinhada aos demais riscos de SSO, pode levar a melhorias no bem-estar, satisfação e produtividade no trabalho. A gestão dos riscos psicossociais é responsabilidade da organização, devendo ser conduzida de forma estruturada no âmbito do Gerenciamento de Riscos Ocupacionais (GRO).</p>'+
    '<p class="aep-txt">Este documento foi baseado nas orientações sobre a gestão de riscos psicossociais e a promoção do bem-estar no trabalho constante na ISO 45003:2021. A organização é responsável pela saúde física e psicológica dos trabalhadores, devendo prevenir lesões e enfermidades, criando ambientes de trabalho seguros e saudáveis.</p>'+
    '<div class="aep-ph2">1.1 Natureza do Documento e Vinculação ao PGR</div>'+
    '<p class="aep-txt">A presente Análise de Risco Psicossocial do Trabalho constitui documento <strong>COMPLEMENTAR</strong> ao Programa de Gerenciamento de Riscos (PGR) da organização, elaborado em atendimento ao item 1.5.3.2.1 da NR-01 (Portaria MTE nº 1.419/2024), que determina:</p>'+
    '<div class="aep-txt-box">"A organização deve considerar as condições de trabalho, nos termos da NR-17, <strong>incluindo os fatores de risco psicossociais relacionados ao trabalho</strong>."</div>'+
    '<p class="aep-txt">A AEP vigente <strong>NÃO</strong> contempla a dimensão dos fatores de risco psicossociais relacionados ao trabalho, conforme exigido pelo item 17.4.1 da NR-17. Portanto, este laudo:</p>'+
    '<p class="aep-txt"><strong>a)</strong> <strong>COMPLEMENTA</strong> a AEP existente, adicionando a avaliação dos fatores psicossociais da organização do trabalho;<br>'+
    '<strong>b)</strong> <strong>ALIMENTA</strong> o inventário de riscos do PGR, conforme itens 17.3.5 e 17.3.6 da NR-17.</p>'+

    '<p class="aep-txt">Este documento possui ainda vinculação direta ao <strong>Gerenciamento de Risco Ocupacional (GRO)</strong>, constituindo insumo técnico obrigatório para a composição do inventário de riscos ocupacionais da organização. O GRO, conforme disposto na NR-01 (Portaria MTE nº 1.419/2024), abrange o reconhecimento, avaliação e controle dos riscos presentes nos ambientes e processos de trabalho, incluindo os riscos psicossociais como categoria de análise mandatória. A integração desta ARP ao GRO assegura que os fatores de risco psicossociais identificados sejam incorporados ao ciclo de gestão de riscos da organização, subsidiando a definição de prioridades, a implementação de medidas de controle e o acompanhamento periódico de sua eficácia, em conformidade com os princípios da hierarquia de controle e da melhoria contínua.</p>'+

    '<div class="aep-ph">2. Objetivo da Análise</div>'+
    '<p class="aep-txt">Identificar as situações de trabalho com exigência de sobrecarga física e mental que podem gerar danos à saúde dos trabalhadores, visando:</p>'+
    '<p class="aep-txt">— Adequar os postos de trabalho aos limites e capacidades do indivíduo para proporcionar conforto, segurança, bem-estar e satisfação no trabalho, prevenindo acidentes e doenças ocupacionais;<br>'+
    '— Adequar as condições de trabalho buscando a eficiência, produtividade e qualidade;<br>'+
    '— Auxiliar a empresa a adequar-se à legislação vigente referente às questões ergonômicas e psicossociais.</p>'+

    '<div class="aep-ph">3. Aspectos Legais</div>'+
    '<div class="aep-txt-box"><strong>NR-17 (Portaria MTP nº 423/2021):</strong><br>"17.3.5 Devem integrar o inventário de riscos do PGR"<br>"17.3.6 Devem ser previstos planos de ação, nos termos do PGR"<br>"17.4.1 [...] deve levar em consideração os aspectos cognitivos que possam comprometer a segurança e a saúde do trabalhador"</div>'+
    '<div class="aep-txt-box"><strong>NR-01 (Portaria MTE nº 1.419/2024):</strong><br>"1.5.3.2.1 A organização deve considerar as condições de trabalho, nos termos da NR-17, incluindo os fatores de risco psicossociais relacionados ao trabalho"</div>'+
    '<p class="aep-txt"><strong>Demais referências normativas:</strong></p>'+
    '<table class="aep-table"><thead><tr><th>Referência</th><th>Descrição</th></tr></thead><tbody>'+
      '<tr><td>ISO 45001:2018</td><td>Sistema de Gestão de Saúde e Segurança Ocupacional</td></tr>'+
      '<tr><td>ISO 45003:2021</td><td>Gestão de Riscos Psicossociais no Trabalho</td></tr>'+
      (function(){
      var pf=getPGR();
      if(pf) return '<tr><td>'+pf.refNormativa.split('|')[0].trim()+'</td><td>'+pf.formulaLabel+' — Matriz '+pf.tamanho+'×'+pf.tamanho+'</td></tr>';
      return '<tr><td>—</td><td>Selecione o perfil do PGR</td></tr>';
    }())+
      '<tr><td>Portaria GM/MS nº 5.674/2024</td><td>Lista de Doenças Relacionadas ao Trabalho — LDRT</td></tr>'+
      '<tr><td>COPSOQ II</td><td>Copenhagen Psychosocial Questionnaire (Silva et al., 2011)</td></tr>'+
    '</tbody></table>'+

    '<div class="aep-ph">4. Metodologia Aplicada</div>'+
    '<div class="aep-ph2">4.0 Preparação do Processo de Identificação de Perigos</div>'+
    '<p class="aep-txt">Em conformidade com as orientações do Guia de Informações sobre Fatores de Riscos Psicossociais Relacionados ao Trabalho (MTE, 2025), o processo de preparação desta avaliação incluiu o levantamento das seguintes informações organizacionais: caracterização dos setores e GHEs, descrição das atividades e cargos, e consulta aos registros disponíveis de acompanhamento de saúde dos trabalhadores junto ao setor de Recursos Humanos da organização.</p>'+
    '<p class="aep-txt">As informações levantadas subsidiaram a definição da estratégia de avaliação, a seleção do instrumento COPSOQ II e a priorização dos setores com maior vulnerabilidade identificada previamente.</p>'+
    '<p class="aep-txt" style="margin-left:12px"><strong>1.</strong> Organização do Trabalho<br><strong>2.</strong> Fatores sociais no trabalho<br><strong>3.</strong> Ambiente de trabalho, equipamentos e tarefas de risco</p>'+
    '<div class="aep-ph2" style="margin-top:12px">Identificação dos Perigos Psicossociais</div>'+
    '<p class="aep-txt">A identificação dos perigos psicossociais foi realizada com base nas condições de trabalho, considerando a organização, gestão e execução das atividades, conforme diretrizes da NR-01.</p>'+
    '<p class="aep-txt">Os perigos foram descritos de forma objetiva, vinculados às situações concretas de trabalho, não sendo considerados fatores individuais ou indicadores de saúde como perigos, mas apenas como elementos complementares à análise.</p>'+
    '<div class="aep-ph2" style="margin-top:12px">Participação dos Trabalhadores</div>'+
    '<p class="aep-txt">A participação dos trabalhadores foi considerada no processo por meio da aplicação de instrumento estruturado, coleta de relatos qualitativos e validação dos principais riscos identificados.</p>'+
    '<p class="aep-txt">Está prevista a devolutiva dos resultados e discussão das medidas de prevenção junto aos trabalhadores, garantindo sua participação no processo de gerenciamento dos riscos.</p>'+
    '<p class="aep-txt">A coleta de dados foi registrada internamente, garantindo rastreabilidade do processo e preservação do anonimato dos participantes.</p>'+

    '<div class="aep-ph2" style="margin-top:12px">Critérios de Representatividade Amostral</div>'+
    '<p class="aep-txt">Para fins de aplicação do COPSOQ II, foram adotados os seguintes critérios mínimos de representatividade por setor/GHE:</p>'+
    '<p class="aep-txt">Para o instrumento quantitativo, foi estabelecido o percentual mínimo de <strong>60% dos trabalhadores por setor</strong> como critério de inclusão dos resultados na análise. Em todos os setores avaliados, esse percentual foi atingido ou superado, conforme demonstrado no campo "Nº Respondentes COPSOQ" de cada setor.</p>'+
    '<p class="aep-txt">Para a coleta de relatos qualitativos, foi adotado o critério mínimo de <strong>10% mais 1 trabalhador por setor</strong>, garantindo que ao menos uma perspectiva qualitativa complementasse os dados quantitativos em todos os GHEs. Em diversos setores, o número de relatos qualitativos coletados superou esse mínimo, ampliando a profundidade da análise.</p>'+
    '<p class="aep-txt">A adoção desses critérios está alinhada à orientação do Guia de Informações sobre Fatores de Riscos Psicossociais Relacionados ao Trabalho (MTE, 2025), que recomenda a criação de um ambiente de confiança e a garantia de anonimato como condições para a validade do processo, bem como à metodologia do COPSOQ II, que prevê a aplicação coletiva por grupos homogêneos de exposição com representatividade setorial. O critério adotado visa garantir representatividade mínima dos grupos avaliados, considerando a realidade operacional da organização e a viabilidade de coleta de dados em campo.</p>'+

    '<div class="aep-ph2">4.0.1 Análise da Atividade de Trabalho</div>'+
    '<p class="aep-txt">A identificação dos fatores de risco psicossociais considerou a análise das atividades reais de trabalho, incluindo a forma de execução das tarefas, variabilidade da carga de trabalho, interrupções, dependências operacionais, fluxos de comunicação e exigências cognitivas e organizacionais.</p>'+
    '<p class="aep-txt">Essa análise teve como objetivo identificar os perigos na origem, conforme orientações do Guia de Fatores de Riscos Psicossociais (MTE, 2025), não se restringindo à percepção dos trabalhadores.</p>'+

    '<div class="aep-ph2">4.1 Caracterização da Exposição dos Trabalhadores aos Perigos</div>'+
    '<p class="aep-txt">A caracterização da exposição aos fatores de risco psicossociais identificados foi realizada com base nos resultados do COPSOQ II e nos relatos qualitativos coletados, considerando os seguintes parâmetros, conforme subitem 1.5.7.3.2, alínea "g" da NR-01 e subitem 17.3.1.1 da NR-17:</p>'+
    '<p class="aep-txt"><strong>Duração:</strong> A exposição aos fatores de risco psicossociais ocorre de forma contínua ao longo de toda a jornada de trabalho, sendo inerente à organização do trabalho e às condições em que as atividades são realizadas em cada setor avaliado.</p>'+
    '<p class="aep-txt"><strong>Frequência:</strong> A exposição é diária e sistemática, não se tratando de eventos isolados, mas de condições estruturais da organização do trabalho identificadas de forma consistente pelos respondentes do COPSOQ II.</p>'+
    '<p class="aep-txt"><strong>Intensidade:</strong> A intensidade da exposição varia conforme o nível de classificação COPSOQ II obtido em cada domínio e setor. Domínios classificados como Intermediários indicam exposição moderada e continuada; domínios classificados como Risco indicam exposição intensa com potencial de dano à saúde já em curso.</p>'+
    '<p class="aep-txt"><strong>Cofatores relevantes:</strong> Foram considerados como cofatores que agravam a exposição: a extensão de jornada relatada em múltiplos setores; a imprevisibilidade das escalas de trabalho; a ausência de mecanismos formais de suporte e comunicação; e o acúmulo de funções identificado em setores com subdimensionamento de equipe. A avaliação qualitativa da exposição fundamentou a definição dos valores de Probabilidade (P) e Severidade (S) atribuídos pelo responsável técnico em cada domínio e setor, nos termos da ISO 45003:2021.</p>'+
    '<div class="aep-ph2" style="margin-top:12px">Critério de Definição da Probabilidade</div>'+
    '<p class="aep-txt">A probabilidade de ocorrência dos riscos foi definida considerando:</p>'+
    '<p class="aep-txt" style="margin-left:12px">• Frequência e duração da exposição;<br>• Exigências da atividade de trabalho;<br>• Organização e gestão das tarefas;<br>• Eficácia das medidas de prevenção existentes.</p>'+
    '<p class="aep-txt">A percepção dos trabalhadores foi utilizada como subsídio, não sendo o único critério para definição da probabilidade, conforme estabelecido na NR-01.</p>'+

    (function(){
      var _pfc=getPGR();
      var h='<div class="aep-ph2" style="margin-top:10px">Critérios Objetivos de Classificação</div>'+
        '<p class="aep-txt">Para garantir rastreabilidade e reprodutibilidade da análise, foram adotados os seguintes critérios:</p>'+
        '<p class="aep-txt"><strong>Probabilidade (P):</strong></p>';
      if(_pfc){
        h+='<p class="aep-txt" style="margin-left:12px">';
        _pfc.pNomes.forEach(function(n,i){h+='• <strong>'+(i+1)+' ('+n+'):</strong> Nível '+(i+1)+' conforme critérios do PGR;'+(i<_pfc.pNomes.length-1?'<br>':'');});
        h+='</p>';
        h+='<p class="aep-txt"><strong>Severidade (S):</strong></p>';
        h+='<p class="aep-txt" style="margin-left:12px">';
        _pfc.sNomes.forEach(function(n,i){h+='• <strong>'+(i+1)+' ('+n+'):</strong> Nível '+(i+1)+' conforme critérios do PGR;'+(i<_pfc.sNomes.length-1?'<br>':'');});
        h+='</p>';
      } else {
        h+='<p class="aep-txt" style="margin-left:12px">• <strong>1 (Improvável):</strong> ocorrência rara ou relatos isolados;<br>• <strong>2 (Possível):</strong> ocorrência ocasional ou relatada por parte dos trabalhadores;<br>• <strong>3 (Provável):</strong> ocorrência frequente e consistente entre trabalhadores.</p>'+
        '<p class="aep-txt"><strong>Severidade (S):</strong></p>'+
        '<p class="aep-txt" style="margin-left:12px">• <strong>1 (Leve):</strong> desconforto sem impacto significativo na saúde;<br>• <strong>2 (Moderada):</strong> impacto no bem-estar com risco de adoecimento;<br>• <strong>3 (Grave):</strong> risco de afastamento, adoecimento mental ou prejuízo funcional relevante.</p>';
      }
      h+='<p class="aep-txt">A classificação foi baseada na integração de dados quantitativos, qualitativos e análise técnica das atividades.</p>';
      return h;
    }())+

    '<div class="aep-ph2" style="margin-top:10px">Evidências Complementares Utilizadas</div>'+
    '<p class="aep-txt">A análise dos riscos psicossociais foi subsidiada pelas seguintes evidências organizacionais:</p>'+
    '<p class="aep-txt" style="margin-left:12px">• Registros de afastamentos relacionados à saúde mental (quando disponíveis);<br>• Dados do PCMSO;<br>• Indicadores internos de absenteísmo e rotatividade;<br>• Relatos qualitativos dos trabalhadores;<br>• Observação das condições reais de trabalho.</p>'+
    '<p class="aep-txt">Essas informações foram utilizadas como suporte técnico para definição dos níveis de risco.</p>'+
    '<p class="aep-txt">Foram considerados dados internos disponíveis no momento da avaliação, incluindo informações organizacionais e registros relacionados à saúde ocupacional, não sendo identificadas inconsistências relevantes que comprometessem a análise realizada.</p>'+

    '<p class="aep-txt">O presente relatório baseou-se nos preceitos da legislação trabalhista vigente, citando a NR-01 (Portaria MTE nº 1.419/2024) e a NR-17 (Portaria/MTP nº 423, de 7 de outubro de 2021). Foi utilizada como referência técnica principal a ABNT ISO/ISO 45003:2021, que estabelece três diretrizes para identificar perigos de natureza psicossocial:</p>'+
    '<p class="aep-txt" style="margin-left:12px"><strong>1.</strong> Organização do Trabalho<br><strong>2.</strong> Fatores sociais no trabalho<br><strong>3.</strong> Ambiente de trabalho, equipamentos e tarefas de risco</p>'+
    '<div class="aep-ph2">4.2 Instrumento de Avaliação — COPSOQ II</div>'+
    '<p class="aep-txt">Como instrumento de avaliação qualitativa e quantitativa dos fatores psicossociais, foi aplicado o COPSOQ II (Copenhagen Psychosocial Questionnaire), instrumento validado internacionalmente e reconhecido pela comunidade científica (Silva et al., 2011), com 41 itens em 26 subescalas. As respostas seguem escala Likert de 5 pontos. A classificação seguiu o sistema de tercis:</p>'+
    '<table class="aep-table"><thead><tr><th>Classificação COPSOQ II</th><th>Cor</th><th>Significado</th><th>Ação</th></tr></thead><tbody>'+
      '<tr><td>Situação Favorável</td><td><span class="aep-badge-g">Verde</span></td><td>Baixa exposição a fatores psicossociais</td><td>Registro no PGR. Manutenção das condições atuais.</td></tr>'+
      '<tr><td>Situação Intermediária</td><td><span class="aep-badge-a">Amarelo</span></td><td>Exposição moderada. Risco em desenvolvimento.</td><td>Ações preventivas. Monitoramento semestral.</td></tr>'+
      '<tr><td>Risco para a Saúde</td><td><span class="aep-badge-r">Vermelho</span></td><td>Alta exposição. Risco psicossocial configurado.</td><td>Intervenção imediata. Eliminação ou controle conforme ABNT ISO 45003:2021.</td></tr>'+
    '</tbody></table>'+
    '<div class="aep-ph2" style="margin-top:12px">Utilização do Instrumento</div>'+
    '<p class="aep-txt">O COPSOQ II foi utilizado como ferramenta complementar de apoio à análise dos fatores psicossociais, não sendo utilizado de forma isolada para definição dos riscos.</p>'+
    '<p class="aep-txt">Os resultados obtidos foram analisados em conjunto com as condições reais de trabalho e demais evidências coletadas no processo de avaliação.</p>'+

    '<div class="aep-txt-box" style="margin-top:12px;background:#fef9c3;border-color:#fde047">'+
      '<div style="font-size:9pt;font-weight:700;color:#7d2020;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Nota Metodológica — Classificação de Risco Psicossocial</div>'+
      '<p style="font-size:8pt;color:#334155;line-height:1.6;margin:0 0 6px 0">O COPSOQ II (Copenhagen Psychosocial Questionnaire II) é utilizado como <strong>instrumento de apoio quantitativo validado internacionalmente</strong> (Silva et al., 2011), reconhecido como a metodologia mais alinhada à NR-01 para mapeamento de riscos psicossociais.</p>'+
      (function(){var _pfn=getPGR();var _formula=_pfn?_pfn.formulaLabel:'RPN (P × S ÷ C)';return '<p style="font-size:8pt;color:#334155;line-height:1.6;margin:0 0 6px 0">A <strong>classificação de risco final ('+_formula+')</strong> baseia-se na integração de múltiplas evidências, conforme exigência da NR-01 §1.5.4.4.2.1:</p>';}())+
      '<ul style="font-size:8pt;color:#334155;line-height:1.6;margin:0 0 6px 18px;padding:0">'+
        '<li>Análise qualitativa das atividades reais (observação direta + análise de fluxos);</li>'+
        '<li>Histórico de afastamentos por saúde mental (PCMSO/PGR);</li>'+
        '<li>Relatos qualitativos estruturados (≥10%+1 por setor);</li>'+
        '<li>Evidências de condições de trabalho (organização, gestão, comunicação);</li>'+
        '<li>Classificação COPSOQ II por tercis (verde/amarelo/vermelho).</li>'+
      '</ul>'+
      '<p style="font-size:8pt;color:#334155;line-height:1.6;margin:0 0 6px 0">A classificação COPSOQ II <strong>subsidia, mas NÃO determina sozinha</strong> o nível de risco final, que é estabelecido pela integração dos critérios de Probabilidade e Severidade, fundamentados em dados quantitativos, qualitativos e análise das condições reais de trabalho, conforme metodologia definida no PGR. A priorização das ações segue os critérios estabelecidos pelo responsável técnico, conforme ISO 45003:2021 e Guia MTE (2025).'+(function(){var _prn=getPGR();return _prn&&_prn.usaC?' O <strong>RPN (Risk Priority Number)</strong> é utilizado como ferramenta de apoio à priorização das ações.':'';})()+'</p>'+
      '<p style="font-size:8pt;color:#334155;line-height:1.6;margin:0;font-style:italic">Critério de representatividade: ≥60% respondentes por GHE (atingido/superado em todos os setores avaliados).</p>'+
    '</div>'+

    (function(){
      var pf=getPGR();
      if(pf) return '<div class="aep-ph2">Matriz de Avaliação de Riscos — '+pf.refMetodologica.split('(')[0].trim()+'</div>'+
        '<p class="aep-txt">'+pf.descMetodo+'</p>';
      return '<div class="aep-ph2">Matriz de Avaliação de Riscos</div>'+
        '<p class="aep-txt">A matriz de risco adotada utiliza metodologia de avaliação de risco por meio do índice <strong>⚠️ Perfil do PGR não selecionado.</strong> Selecione o perfil na aba AEP para gerar a metodologia.</p>';
    }())+
    (function(){var _pfD=getPGR();var t='<p class="aep-txt" style="margin-left:12px"><strong>P (Probabilidade):</strong> Avalia o histórico de ocorrências e o tempo de exposição ao agente.<br><strong>S (Severidade):</strong> Avalia o impacto humano e organizacional.';if(!_pfD||_pfD.usaC)t+='<br><strong>C (Controle):</strong> Avalia a existência e eficácia de medidas preventivas.';t+='</p>';return t;}())+
    (function(){
      var pf=getPGR();
      if(pf) return '<div class="aep-txt-box"><strong>'+pf.formulaLabel+'</strong> — O nível de risco é classificado conforme '+pf.refMetodologica+', adaptado para avaliação de riscos psicossociais conforme a NR-01.</div>';
      return '<div class="aep-txt-box"><strong>⚠️</strong> Selecione o perfil do PGR para definir a fórmula.</div>';
    }())+
    (function(){
      var pf=getPGR();
      if(pf) return '<div class="aep-txt-box" style="margin-top:8px;background:#fef9c3;border-color:#fde047"><strong>Nota metodológica:</strong> A metodologia '+pf.refMetodologica+' foi adotada em conformidade com o PGR da organização avaliada, sendo compatível com os princípios do GRO previstos na NR-01 (Portaria MTE nº 1.419/2024). O MTE não determina metodologia específica de avaliação, cabendo à organização selecionar critério adequado ao risco avaliado, nos termos do subitem 1.5.4.4.2.1 da NR-01.</div>';
      return '<div class="aep-txt-box" style="margin-top:8px;background:#fef9c3;border-color:#fde047"><strong>Nota metodológica:</strong> Selecione o perfil do PGR do cliente para que a nota metodológica seja gerada. O MTE não determina metodologia específica para fins de classificação de risco por meio de índice de prioridade, sendo compatível com os princípios do GRO previstos na NR-01 (Portaria MTE nº 1.419/2024). O MTE não determina metodologia específica de avaliação, cabendo à organização selecionar critério adequado ao risco avaliado, nos termos do subitem 1.5.4.4.2.1 da NR-01.</div>';
    }())+

    '<div class="aep-ph2" style="margin-top:14px">Monitoramento e Acompanhamento</div>'+
    '<p class="aep-txt">As medidas de prevenção definidas serão acompanhadas por meio de indicadores de desempenho, com periodicidade definida, responsáveis designados e critérios de avaliação de eficácia.</p>'+
    '<p class="aep-txt">O processo inclui a revisão periódica dos riscos e das medidas implementadas, conforme o princípio de melhoria contínua do Gerenciamento de Riscos Ocupacionais (GRO), previsto na NR-01.</p>'+

    '<div class="aep-ph2" style="margin-top:14px">Integração com o PCMSO</div>'+
    '<p class="aep-txt">Os fatores de risco psicossociais identificados nesta ARP devem ser incorporados ao Programa de Controle Médico de Saúde Ocupacional (PCMSO) da organização, nos termos da NR-07, para fins de vigilância da saúde dos trabalhadores expostos.</p>'+
    '<p class="aep-txt">Recomenda-se ao médico coordenador do PCMSO:</p>'+
    '<p class="aep-txt" style="margin-left:12px"><strong>(1)</strong> Incluir rastreio de saúde mental nos exames periódicos dos GHEs com RPN classificado como Moderado ou superior, por meio de instrumento validado para triagem de sofrimento psíquico relacionado ao trabalho;<br>'+
    '<strong>(2)</strong> Monitorar a frequência de afastamentos e atendimentos relacionados aos transtornos mentais e comportamentais associados ao trabalho, em especial os da categoria CID F, com reporte periódico ao responsável da empresa;<br>'+
    '<strong>(3)</strong> Comunicar a empresa sempre que os indicadores clínicos indicarem agravamento nos domínios avaliados, possibilitando revisão antecipada do inventário de riscos em antecipação ao ciclo regular de revisão previsto neste documento.</p>'+
    '<p class="aep-txt">A integração entre esta ARP e o PCMSO é condição necessária para o fechamento do ciclo do Gerenciamento de Riscos Ocupacionais (GRO), garantindo que a identificação dos perigos psicossociais no PGR seja acompanhada de vigilância clínica correspondente, conforme princípio de melhoria contínua previsto na NR-01 e na ISO 45003:2021.</p>'+
  '</div>';

  // ── SEÇÃO 5: MATRIZ DE RISCO PSICOSSOCIAL ───────────────────
  var matrizRPN=
    '<div class="aep-page">'+
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-bottom:6px;border-bottom:2px solid #7d2020">'+
      (aep.logoPos!=='capa_only'&&aep.logoSrc?'<img src="'+aep.logoSrc+'" style="height:'+logoSzHdr+';max-width:150px;object-fit:contain" alt="Logo"/>':'')+
      '<span style="font-size:7pt;color:#94a3b8">AEP Psicossocial · COPSOQ II · '+dt+'</span>'+
    '</div>'+
    '<div class="aep-ph">5. Matriz de Risco Psicossocial</div>'+
    (function(){
      var pf=getPGR();
      if(pf){
        var tbl='<div class="aep-ph2">5.1 Fundamentação Metodológica</div>'+
          '<p class="aep-txt">A Matriz de Risco foi construída com base nos resultados do COPSOQ II, utilizando a metodologia <strong>'+pf.refMetodologica+'</strong>, em conformidade com o PGR da organização. '+pf.descMetodo+'</p>'+
          '<table class="aep-table" style="margin-bottom:12px"><thead><tr>'+
          '<th style="width:120px">Parâmetro</th><th style="width:220px">Escala (1–'+pf.tamanho+')</th><th>Critério de Classificação</th>'+
          '</tr></thead><tbody>'+
          '<tr><td><strong style="color:#dc2626">P — Probabilidade</strong></td>'+
          '<td>'+pf.pNomes.map(function(n,i){return (i+1)+' = '+n;}).join('<br>')+'</td>'+
          '<td>Indica a chance de o risco psicossocial se manifestar no ambiente de trabalho, conforme critérios do PGR.</td></tr>'+
          '<tr><td><strong style="color:#ca8a04">S — Severidade</strong></td>'+
          '<td>'+pf.sNomes.map(function(n,i){return (i+1)+' = '+n;}).join('<br>')+'</td>'+
          '<td>Representa o impacto potencial na saúde física ou mental do trabalhador, conforme critérios do PGR.</td></tr>';
        if(pf.usaC){
          tbl+='<tr><td><strong style="color:#16a34a">C — Controle</strong></td>'+
            '<td>1 = Sem controle<br>2 = Parcial<br>3 = Efetivo</td>'+
            '<td>Reflete o nível de gerenciamento já existente.</td></tr>';
        }
        tbl+='</tbody></table>';
        return tbl;
      }
      return '<div class="aep-ph2">5.1 Fundamentação Metodológica</div>'+
        '<p class="aep-txt">A Matriz de Risco foi construída com base nos resultados do COPSOQ II, utilizando a metodologia de avaliação de risco por meio do índice <strong>RPN (Risk Priority Number)</strong>, conforme a metodologia definida no PGR da organização.</p>'+
        '<table class="aep-table" style="margin-bottom:12px"><thead><tr>'+
        '<th style="width:120px">Parâmetro</th><th style="width:220px">Escala</th><th>Critério de Classificação</th>'+
        '</tr></thead><tbody>'+
        '<tr><td><strong style="color:#dc2626">P — Probabilidade</strong></td>'+
        '<td>1 = Improvável<br>2 = Possível<br>3 = Provável</td>'+
        '<td>Indica a chance de o risco se manifestar.</td></tr>'+
        '<tr><td><strong style="color:#ca8a04">S — Severidade</strong></td>'+
        '<td>1 = Leve<br>2 = Moderada<br>3 = Grave</td>'+
        '<td>Representa o impacto potencial na saúde.</td></tr>'+
        '</tbody></table>';
    }())+
    (function(){
      var pf=getPGR();
      if(pf && !pf.usaC) return '<div class="aep-txt-box" style="background:#eff6ff;border-color:#93c5fd"><strong>Nota Técnica:</strong> A avaliação de riscos psicossociais segue a metodologia '+pf.refMetodologica+', conforme definido no PGR da organização. A priorização é determinada pela combinação entre Probabilidade e Severidade ('+pf.formulaLabel+'), sem fator de controle redutor.</div>';
      return '<div class="aep-txt-box" style="background:#fef9c3;border-color:#fde047"><strong>Nota Técnica sobre o Fator Controle (C):</strong> O fator \"Controle (C)\" foi classificado com base na existência, efetividade e formalização das medidas de controle já implementadas, considerando evidências organizacionais disponíveis no momento da avaliação. O fator foi utilizado como elemento complementar para avaliação da eficácia das medidas existentes, não substituindo a necessidade de implementação de medidas de prevenção conforme a NR-01. A priorização das ações considera principalmente a combinação entre Probabilidade e Severidade, sendo o Controle utilizado como critério adicional de análise técnica.</div>';
    }())+
    (function(){
      var pf=getPGR();
      var priLabels=['Baixíssima','Baixa','Moderada','Alta','Altíssima'];
      var acoes=['Registro no PGR. Manutenção das condições atuais.','Ações preventivas leves. Monitoramento semestral.','Implementar medidas de redução. Plano de ação formal.','Medidas urgentes. Intervenção prioritária.','Paralisar ou implementar medida imediata. Notificar PGR.'];
      var prazos=['Revisão periódica (2 anos)','180 dias','90 dias','30 dias','Imediato'];
      if(pf){
        var rows='';
        pf.graus.forEach(function(g,i){
          rows+='<tr style="background:'+g.cor+'"><td><strong>'+g.nome+'</strong></td>'+
            '<td style="text-align:center">'+g.rpnMin+' – '+g.rpnMax+'</td>'+
            '<td>'+(priLabels[i]||'—')+'</td>'+
            '<td>'+(acoes[i]||'—')+'</td>'+
            '<td>'+(prazos[i]||'—')+'</td></tr>';
        });
        return '<div class="aep-ph2">5.2 Tabela de Classificação de Risco</div>'+
          '<p class="aep-txt">O nível de risco resultante ('+pf.formulaLabel+') classifica cada domínio conforme a metodologia '+pf.refMetodologica+', orientando a priorização das ações:</p>'+
          '<table class="aep-table"><thead><tr>'+
          '<th>Nível de Risco</th><th style="text-align:center">Faixa</th><th>Prioridade</th><th>Ação Recomendada</th><th style="width:110px">Prazo Máximo</th>'+
          '</tr></thead><tbody>'+rows+'</tbody></table>';
      }
      return '<div class="aep-ph2">5.2 Tabela de Classificação do RPN</div>'+
        '<p class="aep-txt">O RPN resultante classifica cada domínio em cinco níveis, orientando a priorização das ações de melhoria conforme a NR-01, ISO 45001 e ISO 45003:</p>'+
        '<table class="aep-table"><thead><tr>'+
        '<th>Nível de Risco</th><th style="text-align:center">RPN</th><th>Prioridade</th><th>Ação Recomendada</th><th style="width:110px">Prazo Máximo</th>'+
        '</tr></thead><tbody>'+
        '<tr><td colspan="5" style="text-align:center;padding:12px;color:#92400e;background:#fef9c3"><strong>⚠️</strong> Selecione o perfil do PGR na aba AEP para ver a tabela de classificação</td></tr>'+
        '<tr style="background:#fef9c3"><td><strong>Moderado</strong></td><td style="text-align:center">2 – 4</td><td>Moderada</td><td>Implementar medidas de redução. Plano de ação formal.</td><td>90 dias</td></tr>'+
        
        '</tbody></table>';
    }())+
    '<div class="aep-txt-box" style="margin-top:10px"><strong>Nota técnica:</strong> A classificação COPSOQ II (Favorável, Intermediária, Risco) serve como evidência técnica para fundamentar a definição dos valores de P e S pelo responsável técnico, conforme orientações da ISO 45003:2021 e Guia MTE (2025). O <strong>nível de risco final é determinado pela integração dos critérios de Probabilidade e Severidade</strong>, fundamentados em dados quantitativos, qualitativos e análise das condições reais de trabalho, conforme metodologia definida no PGR. A priorização das ações segue: Risco alto = Alta prioridade; Risco moderado = Média prioridade; Risco baixo = Baixa prioridade. A priorização segue a metodologia definida no PGR da organização.</div>'+

    '<div class="aep-ph2" style="margin-top:12px">5.3 Critério de Aceitabilidade de Risco</div>'+
    '<p class="aep-txt">Para fins de atendimento ao Gerenciamento de Riscos Ocupacionais (GRO), foram definidos os seguintes critérios de aceitabilidade dos riscos psicossociais:</p>'+
    '<table class="aep-table"><thead><tr>'+
      '<th style="width:140px">Faixa de RPN</th><th>Classificação</th><th>Conduta</th>'+
    '</tr></thead><tbody>'+
      '<tr style="background:#dcfce7"><td><strong>RPN ≤ 2</strong></td><td><strong>Risco Aceitável</strong></td><td>Manter controles existentes e monitoramento periódico.</td></tr>'+
      '<tr style="background:#fef9c3"><td><strong>RPN entre 2 e 4</strong></td><td><strong>Risco Moderado</strong></td><td>Implementação obrigatória de medidas de controle.</td></tr>'+
      '<tr style="background:#fee2e2"><td><strong>RPN &gt; 4</strong></td><td><strong>Risco Alto</strong></td><td>Ação imediata e prioritária pela gestão.</td></tr>'+
    '</tbody></table>'+
    '<p class="aep-txt">A classificação de aceitabilidade orienta a priorização das ações e o monitoramento contínuo dos riscos, conforme NR-01.</p>'+

    '<div class="aep-txt-box" style="background:#eff6ff;border-color:#93c5fd;margin-top:10px"><strong>Regra geral de coerência:</strong> Os riscos classificados como moderados ou superiores (RPN &gt; 2) possuem <strong>obrigatoriedade de definição de medidas de controle</strong>, conforme critérios de aceitabilidade estabelecidos na seção 5.3 deste documento.</div>'+
    '<div class="aep-ph2">Correspondência entre domínios COPSOQ II e perigos psicossociais do GRO</div>'+
    '<p class="aep-txt">Para fins de integração ao inventário de riscos do PGR, os domínios do COPSOQ II avaliados neste documento correspondem aos seguintes perigos psicossociais relacionados ao trabalho, conforme listagem exemplificativa do <em>Guia de Informações sobre os Fatores de Riscos Psicossociais Relacionados ao Trabalho</em> (MTE, 2025):</p>'+
    '<table class="aep-table"><thead><tr>'
    +'<th style="width:38%">Domínio COPSOQ II</th>'
    +'<th>Perigo correspondente (GRO/PGR)</th>'
    +'</tr></thead><tbody>'
    +'<tr><td><strong>Exigências Laborais</strong></td><td>Excesso de demandas no trabalho (sobrecarga)</td></tr>'
    +'<tr><td><strong>Organização do Trabalho e Conteúdo</strong></td><td>Baixo controle no trabalho / Falta de autonomia</td></tr>'
    +'<tr><td><strong>Relações Sociais e Liderança</strong></td><td>Falta de suporte/apoio no trabalho; Maus relacionamentos no local de trabalho</td></tr>'
    +'<tr><td><strong>Valores no Local de Trabalho</strong></td><td>Baixa justiça organizacional; Baixas recompensas e reconhecimento</td></tr>'
    +'<tr><td><strong>Personalidade</strong></td><td><em>Fator individual moderador (não constitui perigo psicossocial em si)</em></td></tr>'
    +'<tr><td><strong>Interface Trabalho-Indivíduo</strong></td><td>Má gestão de mudanças organizacionais; Trabalho em condições de difícil conciliação</td></tr>'
    +'<tr><td><strong>Saúde e Bem-Estar</strong></td><td><em>Indicador de desfecho (não constitui perigo em si, mas sinaliza exposição acumulada)</em></td></tr>'
    +'<tr><td><strong>Comportamento Ofensivo</strong></td><td>Assédio de qualquer natureza no trabalho; Eventos violentos ou traumáticos</td></tr>'
    +'</tbody></table>'+
  '</div>';

  // ── 5.4 INVENTÁRIO DE RISCOS PSICOSSOCIAIS (INTEGRAÇÃO AO PGR) ──
  // Formato blocos por GHE/setor — modelo padrão PGR/NR-01 §1.5.4.4.4
  var PERIGOS_GRO={
    "Exigências Laborais":"Excesso de demandas / Sobrecarga de trabalho",
    "Organização do Trabalho e Conteúdo":"Baixo controle / Falta de autonomia",
    "Relações Sociais e Liderança":"Falta de suporte da chefia / Conflitos interpessoais",
    "Valores no Local de Trabalho":"Baixa justiça organizacional / Baixo reconhecimento",
    "Interface Trabalho-Indivíduo":"Difícil conciliação trabalho-família / Gestão de mudanças",
    "Saúde e Bem-Estar":"Indicador de desfecho (impacto acumulado)",
    "Comportamento Ofensivo":"Assédio moral / Violência psicológica",
    "Personalidade":"Fator individual moderador"
  };
  var DANOS_DOM={
    "Exigências Laborais":"Estresse, burnout, fadiga crônica",
    "Organização do Trabalho e Conteúdo":"Desmotivação, adoecimento mental",
    "Relações Sociais e Liderança":"Ansiedade, adoecimento, conflitos",
    "Valores no Local de Trabalho":"Desmotivação, insegurança no emprego",
    "Interface Trabalho-Indivíduo":"Estresse, conflito trabalho-família",
    "Saúde e Bem-Estar":"Burnout, transtornos mentais, absenteísmo",
    "Comportamento Ofensivo":"Transtornos mentais graves, afastamentos",
    "Personalidade":"—"
  };
  var FONTES_DOM={
    "Exigências Laborais":"Volume de trabalho, pressão por prazos, ritmo acelerado, demandas simultâneas, exigência cognitiva elevada",
    "Organização do Trabalho e Conteúdo":"Baixa autonomia, tarefas repetitivas, falta de participação nas decisões, rigidez de processos",
    "Relações Sociais e Liderança":"Falta de suporte da chefia, conflitos interpessoais, comunicação ineficaz, feedback insuficiente",
    "Valores no Local de Trabalho":"Baixa justiça organizacional, falta de reconhecimento, insegurança no emprego",
    "Interface Trabalho-Indivíduo":"Dificuldade de conciliação trabalho-família, gestão de mudanças, sobrecarga de papéis",
    "Saúde e Bem-Estar":"Impacto acumulado dos demais fatores de risco psicossocial",
    "Comportamento Ofensivo":"Relações interpessoais inadequadas, cultura organizacional permissiva",
    "Personalidade":"—"
  };
  var EXPOSICAO_DOM={
    "Exigências Laborais":"Contínua/Permanente",
    "Organização do Trabalho e Conteúdo":"Contínua/Permanente",
    "Relações Sociais e Liderança":"Contínua/Permanente",
    "Valores no Local de Trabalho":"Contínua/Permanente",
    "Interface Trabalho-Indivíduo":"Contínua/Permanente",
    "Saúde e Bem-Estar":"Contínua/Permanente",
    "Comportamento Ofensivo":"Intermitente",
    "Personalidade":"—"
  };
  
  // ── 5.4 INVENTÁRIO — FICHAS com riscos baixos na observação da última ficha ──
  var _pfInvG=getPGR();
  var invFichas='';
  
  setores.forEach(function(setor){
    var sub=dados.filter(function(d){return d.setor===setor;});
    var calc=calcMedias(sub);
    var mDomS=calc.mDom;
    var ntrab=(aep.ghe[setor]&&aep.ghe[setor].ntrab)||sub.length||'\u2014';
    var gheNome=(aep.ghe[setor]&&aep.ghe[setor].ghe)||setor;
    var funcao=(aep.ghe[setor]&&aep.ghe[setor].funcao)||'\u2014';
    
    // Primeiro passo: separar domínios em risco efetivo vs aceitável
    var fichasData=[];
    var baixos=[];
    
    DOMS.forEach(function(dom,di){
      if(dom==='Personalidade'||dom==='Sa\u00fade e Bem-Estar') return;
      
      var m=mDomS[dom],cl=classif(m);
      var mz=(aep.ghe[setor]&&aep.ghe[setor].mz?aep.ghe[setor].mz[di]:{})||{};
      var p=+mz.p||0,sv2=+mz.s||0,cv=+mz.c||0;
      
      var nivelTxt='\u2014',corNivel='#f8fafc',rpnVal=null;
      if(_pfInvG && p && sv2){
        var _rC=calcRiscoPGR(p,sv2,cv);
        if(_rC){nivelTxt=_rC.nivel;corNivel=_rC.bg;rpnVal=_rC.rpn;}
      } else if(p&&sv2&&cv){
        rpnVal=p*sv2/cv;
        nivelTxt=nRisco(p,sv2,cv).replace(/[\u{1F7E2}\u{1F7E1}\u{1F7E0}\u{1F534}\u{1F6A8}]\s*/gu,'');
        corNivel=nrBg(rpnVal);
      }
      
      var classifAceit='\u2014';
      var gIdx=-1;
      if(_pfInvG && nivelTxt!=='\u2014'){
        for(var gi=0;gi<_pfInvG.graus.length;gi++){if(_pfInvG.graus[gi].nome===nivelTxt){gIdx=gi;break;}}
        if(gIdx>=0){
          if(gIdx<=1) classifAceit='Aceit\u00e1vel';
          else if(gIdx===2) classifAceit='Toler\u00e1vel';
          else classifAceit='N\u00e3o Aceit\u00e1vel';
        }
      }
      
      var pNome=(_pfInvG&&p)?_pfInvG.pNomes[Math.max(0,p-1)]||'':'';
      var sNome=(_pfInvG&&sv2)?_pfInvG.sNomes[Math.max(0,sv2-1)]||'':'';
      
      var isRiscoEfetivo=(gIdx>=2);
      if(!_pfInvG || gIdx<0) isRiscoEfetivo=(cl==='int'||cl==='ris');
      
      if(!isRiscoEfetivo){
        baixos.push({dom:dom,nivel:nivelTxt,classif:classifAceit,copsoq:cl?CL_TXT[cl]:'\u2014',media:m?fmt(m):'\u2014'});
        return;
      }
      
      // Dados para ficha
      // Buscar medidas da hierarquia de controle (administrativa e individual)
      var hrData=(aep.ghe[setor]&&aep.ghe[setor].hier?aep.ghe[setor].hier[di]:{})||{};
      var hierU=aep.ghe[setor]&&aep.ghe[setor].hierUnica||{};
      var medidasList=[];
      
      // Medidas da hierarquia por domínio
      if(hrData.adm_med) medidasList.push(hrData.adm_med);
      if(hrData.ind_med) medidasList.push(hrData.ind_med);
      
      // Medidas da hierarquia única do setor
      if(hierU.administrativa&&hierU.administrativa.medidas&&medidasList.indexOf(hierU.administrativa.medidas)<0) medidasList.push(hierU.administrativa.medidas);
      if(hierU.individual&&hierU.individual.medidas&&medidasList.indexOf(hierU.individual.medidas)<0) medidasList.push(hierU.individual.medidas);
      
      var medidas='';
      if(medidasList.length>0){
        medidas=medidasList.join('; ');
      } else {
        // Fallback: verificar plano consolidado
        var pcMatch=(aep.planoConsolidado||[]).find(function(a){
          return a.dominio===dom && (a.setores||[]).indexOf(setor)>=0;
        });
        if(pcMatch&&(pcMatch.medida||pcMatch.acao)){
          medidas=pcMatch.medida||pcMatch.acao;
        } else {
          if(_pfInvG && gIdx>=0){
            if(gIdx===2) medidas='Monitorar e avaliar novos controles.';
            else if(gIdx===3) medidas='Implementar novos controles.';
            else medidas='Paralisar atividade at\u00e9 implementa\u00e7\u00e3o de controles eficazes.';
          } else medidas='Ver Plano de A\u00e7\u00e3o Consolidado';
        }
      }
      
      fichasData.push({dom:dom,p:p,sv2:sv2,cv:cv,pNome:pNome,sNome:sNome,nivelTxt:nivelTxt,corNivel:corNivel,rpnVal:rpnVal,classifAceit:classifAceit,medidas:medidas,cl:cl,m:m,gIdx:gIdx});
    });
    
    if(fichasData.length===0 && baixos.length===0) return;
    
    // Se não tem fichas de risco efetivo mas tem baixos, criar uma ficha resumo
    if(fichasData.length===0 && baixos.length>0){
      var fichasSetor='<div style="padding:8px;font-size:7.5pt;color:#64748b">'+
        '<p style="margin:0 0 6px 0;font-style:italic">Todos os perigos psicossociais avaliados neste setor foram classificados como <strong>risco aceit\u00e1vel</strong>:</p>'+
        '<p style="margin:0">';
      baixos.forEach(function(b,bi){
        fichasSetor+=b.dom+' (<span style="font-weight:700">'+b.nivel+'</span> \u2014 '+b.classif+')'+(bi<baixos.length-1?'; ':'.');
      });
      fichasSetor+='</p></div>';
      
      invFichas+='<div style="border:2px solid #7d2020;border-radius:8px;margin-bottom:16px;overflow:hidden;page-break-inside:auto">'+
        '<div style="background:#7d2020;color:white;padding:8px 12px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">'+
          '<div><strong style="font-size:9pt">'+gheNome+' - '+setor+'</strong>'+
          '<span style="font-size:7pt;opacity:.9;margin-left:8px">'+(funcao&&funcao!=='\u2014'?'Fun\u00e7\u00e3o: '+funcao:'')+'</span></div>'+
          '<span style="font-size:7.5pt;background:rgba(255,255,255,.2);padding:2px 10px;border-radius:12px"><strong>'+ntrab+'</strong> trabalhadores expostos</span>'+
        '</div>'+fichasSetor+'</div>';
      return;
    }
    
    // Renderizar fichas
    var fichasSetor='';
    var isFamA=_pfInvG&&!_pfInvG.usaC;
    
    fichasData.forEach(function(fd,fi){
      var isUltima=(fi===fichasData.length-1);
      
      // Texto de observação
      var obsTxt='Avalia\u00e7\u00e3o qualitativa e quantitativa conforme NR-01 e Portaria MTP n\u00ba 423/2024.';
      
      // Na última ficha, adicionar os riscos baixos de forma organizada
      if(isUltima && baixos.length>0){
        obsTxt+='<br><br><strong>Dom\u00ednios avaliados com risco aceit\u00e1vel neste setor:</strong><br>';
        baixos.forEach(function(b,bi){
          obsTxt+=b.dom+' \u2014 '+b.nivel+' ('+b.classif+')'+(bi<baixos.length-1?';<br>':'.');
        });
        obsTxt+='<br>Para estes dom\u00ednios, manter e monitorar as medidas existentes.';
      }
      
      if(isFamA){
        fichasSetor+='<div style="border:1px solid #e2e8f0;border-radius:6px;margin:8px 0;overflow:hidden;font-size:7.5pt">'+
          '<table style="width:100%;border-collapse:collapse">'+
          '<tr style="background:#fef3c7"><td colspan="4" style="padding:4px 8px;font-weight:800;text-align:center;font-size:8pt;border:1px solid #e2e8f0">Identifica\u00e7\u00e3o</td></tr>'+
          '<tr><td style="width:22%;padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Grupo</td>'+
            '<td style="padding:4px 8px;border:1px solid #e2e8f0">Ergon\u00f4mico</td>'+
            '<td style="width:22%;padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">C\u00f3digo eSocial</td>'+
            '<td style="padding:4px 8px;border:1px solid #e2e8f0">\u2014</td></tr>'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Perigo/Fator de Risco</td>'+
            '<td colspan="3" style="padding:4px 8px;border:1px solid #e2e8f0">Fatores psicossociais \u2014 '+fd.dom+'</td></tr>'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Descri\u00e7\u00e3o</td>'+
            '<td colspan="3" style="padding:4px 8px;border:1px solid #e2e8f0">'+(PERIGOS_GRO[fd.dom]||'\u2014')+'</td></tr>'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Poss\u00edveis les\u00f5es ou agravos</td>'+
            '<td colspan="3" style="padding:4px 8px;border:1px solid #e2e8f0">'+(DANOS_DOM[fd.dom]||'\u2014')+'</td></tr>'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Fontes ou circunst\u00e2ncias</td>'+
            '<td colspan="3" style="padding:4px 8px;border:1px solid #e2e8f0">'+(FONTES_DOM[fd.dom]||'\u2014')+'</td></tr>'+
          '<tr style="background:#fef3c7"><td colspan="4" style="padding:4px 8px;font-weight:800;text-align:center;font-size:8pt;border:1px solid #e2e8f0">Avalia\u00e7\u00e3o</td></tr>'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Tipo de exposi\u00e7\u00e3o</td>'+
            '<td style="padding:4px 8px;border:1px solid #e2e8f0">'+(EXPOSICAO_DOM[fd.dom]||'Cont\u00ednua/Permanente')+'</td>'+
            '<td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Crit\u00e9rio</td>'+
            '<td style="padding:4px 8px;border:1px solid #e2e8f0">Qualitativo e Quantitativo</td></tr>'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Severidade</td>'+
            '<td style="padding:4px 8px;border:1px solid #e2e8f0">'+(fd.sNome||'\u2014')+'</td>'+
            '<td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Probabilidade</td>'+
            '<td style="padding:4px 8px;border:1px solid #e2e8f0">'+(fd.pNome||'\u2014')+'</td></tr>'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">N\u00edvel de risco</td>'+
            '<td style="padding:4px 8px;border:1px solid #e2e8f0;font-weight:700"><span style="background:'+fd.corNivel+';padding:2px 8px;border-radius:4px">'+fd.nivelTxt+'</span></td>'+
            '<td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Classifica\u00e7\u00e3o</td>'+
            '<td style="padding:4px 8px;border:1px solid #e2e8f0;font-weight:700">'+fd.classifAceit+'</td></tr>'+
          '<tr style="background:#fef3c7"><td colspan="4" style="padding:4px 8px;font-weight:800;text-align:center;font-size:8pt;border:1px solid #e2e8f0">Preven\u00e7\u00e3o e controle</td></tr>'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Medidas administrativas</td>'+
            '<td colspan="3" style="padding:4px 8px;border:1px solid #e2e8f0">'+fd.medidas+'</td></tr>'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Observa\u00e7\u00e3o</td>'+
            '<td colspan="3" style="padding:4px 8px;border:1px solid #e2e8f0">'+obsTxt+'</td></tr>'+
          '</table></div>';
      } else {
        var pNome2=(_pfInvG&&fd.p)?_pfInvG.pNomes[Math.max(0,fd.p-1)]||'':'';
        var sNome2=(_pfInvG&&fd.sv2)?_pfInvG.sNomes[Math.max(0,fd.sv2-1)]||'':'';
        var estVal=fd.cv?(['Certa','Incerta','Altamente Incerta'][Math.min(fd.cv,2)]||'\u2014'):'\u2014';
        
        fichasSetor+='<div style="border:1px solid #e2e8f0;border-radius:6px;margin:8px 0;overflow:hidden;font-size:7.5pt">'+
          '<table style="width:100%;border-collapse:collapse">'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0;width:25%">Exposi\u00e7\u00e3o</td>'+
            '<td colspan="3" style="padding:4px 8px;border:1px solid #e2e8f0">'+(EXPOSICAO_DOM[fd.dom]||'Cont\u00ednua/Permanente')+'</td></tr>'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Perigos, fontes e circunst\u00e2ncias</td>'+
            '<td colspan="3" style="padding:4px 8px;border:1px solid #e2e8f0">'+(FONTES_DOM[fd.dom]||'\u2014')+'</td></tr>'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Metodologia</td>'+
            '<td colspan="3" style="padding:4px 8px;border:1px solid #e2e8f0">Crit\u00e9rio Qualitativo e Quantitativo</td></tr>'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Medidas administrativas</td>'+
            '<td colspan="3" style="padding:4px 8px;border:1px solid #e2e8f0">'+fd.medidas+'</td></tr>'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Descri\u00e7\u00e3o do Agente Nocivo</td>'+
            '<td colspan="3" style="padding:4px 8px;border:1px solid #e2e8f0">'+(PERIGOS_GRO[fd.dom]||'\u2014')+'</td></tr>'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Poss\u00edveis danos \u00e0 sa\u00fade</td>'+
            '<td colspan="3" style="padding:4px 8px;border:1px solid #e2e8f0">'+(DANOS_DOM[fd.dom]||'\u2014')+'</td></tr>'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Probabilidade</td>'+
            '<td style="padding:4px 8px;border:1px solid #e2e8f0">'+(pNome2?(pNome2+' ('+(fd.p||'\u2014')+')'):(fd.p||'\u2014'))+'</td>'+
            '<td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Severidade</td>'+
            '<td style="padding:4px 8px;border:1px solid #e2e8f0">'+(sNome2?(sNome2+' ('+(fd.sv2||'\u2014')+')'):(fd.sv2||'\u2014'))+'</td></tr>'+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">N\u00edvel do Risco</td>'+
            '<td style="padding:4px 8px;border:1px solid #e2e8f0;font-weight:700"><span style="background:'+fd.corNivel+';padding:2px 8px;border-radius:4px">'+fd.nivelTxt+'</span></td>'+
            '<td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Classifica\u00e7\u00e3o</td>'+
            '<td style="padding:4px 8px;border:1px solid #e2e8f0;font-weight:700">'+fd.classifAceit+'</td></tr>'+
          (_pfInvG&&_pfInvG.usaEstimativa?
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Estimativa</td>'+
            '<td colspan="3" style="padding:4px 8px;border:1px solid #e2e8f0">'+estVal+'</td></tr>':'')+
          '<tr><td style="padding:4px 8px;font-weight:700;background:#fafafa;border:1px solid #e2e8f0">Observa\u00e7\u00f5es</td>'+
            '<td colspan="3" style="padding:4px 8px;border:1px solid #e2e8f0">'+obsTxt+'</td></tr>'+
          '</table></div>';
      }
    });
    
    if(fichasSetor){
      invFichas+='<div style="border:2px solid #7d2020;border-radius:8px;margin-bottom:16px;overflow:hidden;page-break-inside:auto">'+
        '<div style="background:#7d2020;color:white;padding:8px 12px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">'+
          '<div><strong style="font-size:9pt">'+gheNome+' - '+setor+'</strong>'+
          '<span style="font-size:7pt;opacity:.9;margin-left:8px">'+(funcao&&funcao!=='\u2014'?'Fun\u00e7\u00e3o: '+funcao:'')+'</span></div>'+
          '<span style="font-size:7.5pt;background:rgba(255,255,255,.2);padding:2px 10px;border-radius:12px"><strong>'+ntrab+'</strong> trabalhadores expostos</span>'+
        '</div>'+
        '<div style="padding:8px">'+fichasSetor+'</div>'+
      '</div>';
    }
  });
  
  var inventarioPag='';
  if(invFichas){
    var _pfLeg=getPGR();
    inventarioPag='<div class="aep-page">'+
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-bottom:6px;border-bottom:2px solid #7d2020">'+
        (aep.logoPos!=='capa_only'&&aep.logoSrc?'<img src="'+aep.logoSrc+'" style="height:'+logoSzHdr+';max-width:150px;object-fit:contain" alt="Logo"/>':'')+
        '<span style="font-size:7pt;color:#94a3b8">AEP Psicossocial \u00b7 COPSOQ II \u00b7 '+dt+'</span>'+
      '</div>'+
      '<div class="aep-ph">5.4 Invent\u00e1rio de Riscos Psicossociais (Integra\u00e7\u00e3o ao PGR)</div>'+
      '<p class="aep-txt">Em atendimento ao item 1.5.4.4.4 da NR-01, os riscos psicossociais identificados foram consolidados no Invent\u00e1rio de Riscos Ocupacionais, organizados por GHE/Setor, conforme estrutura exigida pelo GRO. Os perigos com n\u00edvel de risco efetivo s\u00e3o apresentados em fichas detalhadas. Os dom\u00ednios avaliados com risco aceit\u00e1vel s\u00e3o registrados no campo Observa\u00e7\u00e3o da \u00faltima ficha de cada setor, garantindo rastreabilidade conforme ISO 45003:2021.</p>'+
      (_pfLeg?'<p class="aep-txt" style="font-size:7.5pt;color:#64748b;font-style:italic;margin-bottom:10px">Metodologia: '+_pfLeg.refMetodologica+' | '+_pfLeg.formulaLabel+' | Escala P e S: 1\u2013'+_pfLeg.tamanho+' | N\u00edveis: '+_pfLeg.graus.map(function(g){return g.nome;}).join(', ')+'</p>':'')+
      invFichas+
    '</div>';
  }

  // ── ÍNDICE DE SETORES ──────────────────────────────────────────
  var indiceLinks=setores.map(function(s,i){
    return '<a href="#setor-pdf-'+i+'" style="display:block;padding:5px 12px;margin-bottom:4px;'+
      'background:#fdf2f2;border-left:4px solid #7d2020;border-radius:0 6px 6px 0;'+
      'font-size:9pt;color:#7d2020;text-decoration:none;font-weight:600">'+
      (i+1)+'. '+s+'</a>';
  }).join('');
  var indicePag='<div class="aep-page">'+
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-bottom:6px;border-bottom:2px solid #7d2020">'+
      (aep.logoPos!=='capa_only'&&aep.logoSrc?'<img src="'+aep.logoSrc+'" style="height:'+logoSzHdr+';max-width:150px;object-fit:contain" alt="Logo"/>':'')+
      '<span style="font-size:7pt;color:#94a3b8">AEP Psicossocial · COPSOQ II · '+dt+'</span>'+
    '</div>'+
    '<div class="aep-ph">Índice de Setores / GHEs Avaliados</div>'+
    '<p class="aep-txt" style="color:#64748b;margin-bottom:10px">Clique no setor para navegar diretamente à seção correspondente.</p>'+
    indiceLinks+
  '</div>';

  // ── PÁGINAS DE LAUDO POR SETOR ────────────────────────────────
  var laudos="";
  for(var si=0;si<setores.length;si++){
    var setor=setores[si];
    var sub=dados.filter(function(d){return d.setor===setor;});
    var calc=calcMedias(sub);
    var mDomS=calc.mDom;
    var coments=sub.map(function(r){return r.comentario;}).filter(function(cc){return cc&&cc.length>3;});
    var domsAtivos=DOMS.filter(function(d){
      if(d==='Personalidade') return false;
      var cl=classif(mDomS[d]);
      var di=DOMS.indexOf(d);
      var mz=gmz(setor,di);
      var p=+mz.p||0,sv=+mz.s||0,cv=+mz.c||0;
      var rpn=(p&&sv&&cv)?p*sv/cv:0;
      return cl==='int'||cl==='ris'||rpn>2;
    });
    var gheNome=gv(setor,"ghe",setor);
    var funcao=gv(setor,"funcao","");
    var depto=gv(setor,"depto","");
    var ntrab=gv(setor,"ntrab",sub.length);
    var qualText=gv(setor,"qual","");
    var atividadeText=gv(setor,"atividade","");
    // Relatos: prioriza o que o técnico editou na aba AEP
    // Se editou (mesmo que vazio) → usa o editado; se nunca tocou → usa CSV como referência
    var comentsSalvos=gv(setor,"coments_edit",null);
    var comentsPDF;
    if(comentsSalvos!==null){
      // Usuário editou o campo — respeitar exatamente o que escreveu
      comentsPDF=comentsSalvos;
    } else {
      // Campo nunca foi editado — usar CSV como texto inicial de referência
      comentsPDF=coments.length>0?coments.map(function(cc,ci){return '#'+(ci+1)+' '+cc;}).join('\n'):'';
    }

    // cabeçalho do setor
    var pg='<div class="aep-page" id="setor-pdf-'+si+'">'+
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;padding-bottom:6px;border-bottom:2px solid #7d2020">'+
        (aep.logoPos!=='capa_only'&&aep.logoSrc?'<img src="'+aep.logoSrc+'" style="height:'+logoSzHdr+';max-width:150px;object-fit:contain" alt="Logo"/>':'')+
        '<span style="font-size:7pt;color:#94a3b8">AEP Psicossocial · COPSOQ II · '+dt+'</span>'+
      '</div>'+
      '<div class="aep-setor-hdr">'+
        '<span>🏢 '+setor+'</span>'+
        '<span style="font-size:8pt;opacity:.8">'+sub.length+' respondentes | Emissão: '+dt+'</span>'+
      '</div>'+
      '<div class="aep-setor-body">'+
        '<div class="aep-ghe-grid">'+
          '<div class="aep-ghe-cell"><div class="aep-ghe-label">Setor</div><div class="aep-ghe-val">'+gheNome+'</div></div>'+
          (function(){
        var sels=gv(setor,'funcoes_sel',[])||[];
        var funcaoLabel=sels.length?sels.join(', '):(funcao||'—');
        return '<div class="aep-ghe-cell" style="grid-column:span 1"><div class="aep-ghe-label">Função / Cargo</div><div class="aep-ghe-val" style="font-size:7.5pt">'+funcaoLabel+'</div></div>';
      }())+
          '<div class="aep-ghe-cell"><div class="aep-ghe-label">Nº Trabalhadores</div><div class="aep-ghe-val">'+ntrab+'</div></div>'+
          '<div class="aep-ghe-cell"><div class="aep-ghe-label">Nº Respondentes COPSOQ</div><div class="aep-ghe-val">'+sub.length+'</div></div>'+
        '</div>'+
      (gv(setor,'atividade','')?'<div style="margin-top:6px;font-size:7.5pt;background:#f8fafc;border-left:3px solid #9e3535;padding:4px 8px;border-radius:0 4px 4px 0">'+
        '<span style="font-size:6.5pt;font-weight:700;color:#64748b;text-transform:uppercase">Descrição da Atividade: </span>'+gv(setor,'atividade','')+'</div>':'')+
      (function(){
        var sels=gv(setor,'funcoes_sel',[])||[];
        if(!sels.length) return '';
        var allCargos=_getAllCargos();
        var cargosHtml='<div style="margin-top:6px;border:1px solid #e2e8f0;border-radius:4px;overflow:hidden">'+
          '<div style="background:#f1f5f9;padding:3px 8px;font-size:6.5pt;font-weight:700;color:#64748b;text-transform:uppercase;border-bottom:1px solid #e2e8f0">Funções / Cargos do GHE</div>';
        sels.forEach(function(cargo){
          var dc=allCargos.find(function(x){return x.cargo.toUpperCase()===cargo.toUpperCase();});
          if(dc&&dc.desc){
            cargosHtml+='<div style="padding:5px 8px;border-bottom:1px solid #f1f5f9">';
            cargosHtml+='<div style="font-size:6.5pt;font-weight:700;color:#7d2020;text-transform:uppercase;margin-bottom:2px">'+cargo+'</div>';
            cargosHtml+='<div style="font-size:7.5pt;color:#334155;line-height:1.5">'+dc.desc+'</div>';
            cargosHtml+='</div>';
          }
        });
        cargosHtml+='</div>';
        return cargosHtml;
      }())+'\n'+
      '</div>'+

      // COPSOQ tabela
      '<div class="aep-ph" style="margin-top:10px">Resultados COPSOQ II + Matriz de Risco</div>'+
      '<table class="aep-table"><thead><tr>'+
        '<th>Domínio COPSOQ / Fator de Risco</th><th style="text-align:center">Média</th><th style="text-align:center">Classif.</th>'+
        (function(){var _pih=getPGR();
          if(_pih && !_pih.usaC){
            return '<th style="text-align:center;width:36px">P</th><th style="text-align:center;width:36px">S</th>'+
              '<th style="text-align:center;width:80px">Classificação</th>';
          }
          return '<th style="text-align:center;width:36px">P</th><th style="text-align:center;width:36px">S</th><th style="text-align:center;width:36px">C</th>'+
            '<th style="text-align:center;width:50px">RPN</th><th style="text-align:center;width:70px">Risco</th>';
        }())+
      '</tr></thead><tbody>';

    for(var di=0;di<DOMS.length;di++){
      var dom=DOMS[di],m=mDomS[dom],cl=classif(m);
      var mz=gmz(setor,di);
      var bgM=cl==="fav"?"aep-nr-fav":cl==="int"?"aep-nr-int":cl==="ris"?"aep-nr-ris":"";
      if(dom==='Personalidade'){
        pg+='<tr style="background:#f8f8f8;color:#888">'+
          '<td style="font-size:7pt;color:#94a3b8;font-style:italic">'+domLabel(dom)+'</td>'+
          '<td style="text-align:center;font-size:8pt;color:#94a3b8">'+fmt(m)+'</td>'+
          '<td style="text-align:center">'+clBadge(cl)+'</td>'+
          '<td colspan="5" style="font-size:6.5pt;color:#94a3b8;font-style:italic;padding:3px 6px">Fator individual moderador — ver nota ¹</td>'+
          '</tr>';
      } else if(dom==='Saúde e Bem-Estar'){
        var p=+mz.p||"",sv2=+mz.s||"",cv=+mz.c||"";
        var nr=null;
        var _pfP=getPGR();
        if(_pfP){var _rP=calcRiscoPGR(p,sv2,cv);if(_rP)nr=_rP.rpn;}
        else if(p&&sv2&&cv){nr=p*sv2/cv;}
        pg+='<tr style="background:#f8f8f8;color:#888">'+
          '<td style="font-size:7pt;color:#94a3b8;font-style:italic">'+domLabel(dom)+'</td>'+
          '<td style="text-align:center;font-size:8pt;color:#94a3b8">'+fmt(m)+'</td>'+
          '<td style="text-align:center">'+clBadge(cl)+'</td>'+
          (function(){var _psi=getPGR();
            var r='<td style="text-align:center;color:#94a3b8">'+p+'</td>'+
              '<td style="text-align:center;color:#94a3b8">'+sv2+'</td>';
            if(!_psi||_psi.usaC) r+='<td style="text-align:center;color:#94a3b8">'+cv+'</td>'+
              '<td colspan="2" style="font-size:6.5pt;color:#94a3b8;font-style:italic;padding:3px 6px">Indicador de desfecho — ver nota ²</td>';
            else r+='<td style="font-size:6.5pt;color:#94a3b8;font-style:italic;padding:3px 6px">Indicador de desfecho — ver nota ²</td>';
            return r;
          }())+
          '</tr>';
      } else {
        var p=+mz.p||"",sv2=+mz.s||"",cv=+mz.c||"";
        var nr=null;
        var _pfP2=getPGR();
        if(_pfP2){var _rP2=calcRiscoPGR(p,sv2,cv);if(_rP2)nr=_rP2.rpn;}
        else if(p&&sv2&&cv){nr=p*sv2/cv;}
        pg+='<tr>'+
          '<td style="font-weight:600;font-size:7.5pt">'+domLabel(dom)+'</td>'+
          '<td style="text-align:center;font-weight:800;font-size:9pt" class="'+bgM+'">'+fmt(m)+'</td>'+
          '<td style="text-align:center">'+clBadge(cl)+'</td>'+
          (function(){var _pin=getPGR();
            var r='<td style="text-align:center">'+p+'</td>'+
              '<td style="text-align:center">'+sv2+'</td>';
            if(!_pin||_pin.usaC){
              r+='<td style="text-align:center">'+cv+'</td>';
              r+='<td style="text-align:center;font-weight:700" class="'+(nr!==null?nrClass(nr):'')+'">'+(nr!==null?nr.toFixed(2):"—")+'</td>';
              r+='<td style="text-align:center;font-size:7pt;font-weight:700" class="'+(nr!==null?nrClass(nr):'')+'">'+(nr!==null?nRisco(p,sv2,cv):"—")+'</td>';
            } else {
              var _rIn=_pin?calcRiscoPGR(p,sv2,0):null;
              r+='<td style="text-align:center;font-size:7pt;font-weight:700;background:'+(_rIn?_rIn.bg:'')+'">'+(_rIn?_rIn.nivel:"—")+'</td>';
            }
            return r;
          }())+
          '</tr>';
      }
    }
    pg+='</tbody></table>';
    pg+='<div style="font-size:6.5pt;color:#94a3b8;font-style:italic;margin:3px 0 6px;line-height:1.5">'+
      '<strong>¹ Personalidade:</strong> fator individual moderador — não constitui perigo psicossocial para fins de GRO/PGR (Guia MTE, 2025; NR-01 §1.5.3.1.4). '+
      '<strong>² Saúde e Bem-Estar:</strong> indicador de desfecho — não constitui perigo em si, mas seu score é considerado na definição de P e S dos perigos correspondentes (seção 5.2).'+
    '</div>';

    // Possíveis lesões ou agravos à saúde (NR-01 §1.5.7.3.2, alínea "d") — nota de remissão compacta
    pg+='<div style="border-left:3px solid #991b1b;padding:4px 10px;margin:6px 0;background:#fff5f5;font-size:7pt;color:#991b1b">'+
      '<strong>Possíveis agravos à saúde (NR-01 §1.5.7.3.2, alínea &ldquo;d&rdquo;):</strong> '+
      'estresse ocupacional, burnout, CID F32, F41, F43, DORT, insônia e doenças cardiovasculares — '+
      'ver Seção 4 (Metodologia) deste documento. Ref.: LDRT, Portaria GM/MS n. 5.674/2024.'+
    '</div>';

    // Análise qualitativa (sem sugestões de melhoria — detalhadas no Plano de Ação Consolidado)
    pg+='<div class="aep-ph" style="margin-top:8px">Análise Qualitativa dos Relatos</div>';
    if(comentsPDF){
      if(comentsSalvos!==null){
        pg+='<div class="aep-qual-box" style="white-space:pre-line;font-size:8pt;color:#334155;line-height:1.7;margin-bottom:8px">'+comentsPDF+'</div>';
      } else {
        // Verbalizações brutas do CSV — exibir como lista
        var linhasCom=comentsPDF.split('\n').filter(function(l){return l.trim();});
        pg+='<div class="aep-qual-label">Verbalizações dos trabalhadores ('+linhasCom.length+' entradas)</div>'+
          '<div style="margin-bottom:8px">';
        for(var ci=0;ci<Math.min(linhasCom.length,10);ci++){
          pg+='<div style="font-size:7.5pt;border-left:3px solid #9e3535;padding:3px 7px;margin-bottom:3px;background:#fdf2f2;color:#334155">'+linhasCom[ci]+'</div>';
        }
        if(linhasCom.length>10) pg+='<div style="font-size:7pt;color:#94a3b8;font-style:italic">... e mais '+(linhasCom.length-10)+' entradas.</div>';
        pg+='</div>';
      }
    }
    // Sugestões de melhoria suprimidas das fichas de setor — constam no Plano de Ação Consolidado

    // Hierarquia de Controle — ÚNICA por setor (integrada)
    if(domsAtivos.length===0){
      pg+='<div class="aep-fav-notice" style="margin-top:8px">✅ Todos os domínios em Situação Favorável — apenas monitoramento periódico conforme PGR.</div>';
    } else {
      // Detectar inter-relação entre domínios
      var temExigP=domsAtivos.indexOf('Exigências Laborais')>=0;
      var temSaudeP=domsAtivos.indexOf('Saúde e Bem-Estar')>=0;
      var temIntfP=domsAtivos.indexOf('Interface Trabalho-Indivíduo')>=0;
      var temRelP=domsAtivos.indexOf('Relações Sociais e Liderança')>=0;
      var temValP=domsAtivos.indexOf('Valores no Local de Trabalho')>=0;
      var cadeiaP=temExigP&&(temSaudeP||temIntfP);
      var cadeiaRP=temRelP&&(temValP||temIntfP);
      // Badges dos domínios integrados
      var domBadgesP=domsAtivos.map(function(d){
        var cl2=classif(mDomS[d]);
        var bg2=cl2==='ris'?'#fee2e2':cl2==='int'?'#fef9c3':'#dcfce7';
        var cor2=cl2==='ris'?'#991b1b':cl2==='int'?'#854d0e':'#15803d';
        return '<span style="background:'+bg2+';color:'+cor2+';padding:1px 7px;border-radius:10px;font-size:7pt;font-weight:700;margin:2px">'+d+' ('+fmt(mDomS[d])+')</span>';
      }).join('');
      // Ler hierUnica salva pelo técnico
      var huData=gv(setor,'hierUnica',{});
      var HNAMES=['1–Eliminação','2–Substituição','3–Coletiva/Eng.','4–Administrativa','5–Ind./Proteção'];
      var HCORS=['#dc2626','#ea580c','#ca8a04','#6b4226','#16a34a'];
      var HKEYS2=['elim','subst','eng','adm','ind'];
      pg+='<div class="aep-ph" style="margin-top:8px">Hierarquia de Controle — Integrada (ISO 45003:2021 · NR-01 §1.5.4.4.2.2)</div>';
      pg+='<div style="background:#fdf2f2;border:1px solid #e8b4b4;border-radius:6px;padding:6px 10px;margin-bottom:8px;font-size:7.5pt;color:#7d2020">';
      pg+='<strong>Domínios integrados:</strong> '+domBadgesP;
      if(cadeiaP) pg+='<br><span style="font-size:7pt;color:#64748b;font-style:italic">⚡ Inter-relação: Exigências Laborais → Interface → Saúde e Bem-Estar (Karasek & Theorell, 1990)</span>';
      if(cadeiaRP) pg+='<br><span style="font-size:7pt;color:#64748b;font-style:italic">⚡ Inter-relação: Relações Sociais → Valores no Local de Trabalho (Siegrist, 1996)</span>';
      pg+='</div>';
      pg+='<div style="overflow-x:auto"><table style="width:100%"><thead><tr>'+
        '<th style="width:110px">Nível</th>'+
        '<th style="width:60px;text-align:center">Analisado?</th>'+
        '<th>Medidas de Melhoria / Prevenção</th>'+
        '<th style="width:120px">Responsável / Prazo</th>'+
      '</tr></thead><tbody>';
      for(var hj=0;hj<HKEYS2.length;hj++){
        var hkey2=HKEYS2[hj];
        var huNivel=(huData&&huData[hkey2])||{};
        var anVal2=huNivel.an||'—';
        var just2=huNivel.just||'';
        var med2=huNivel.med||'';
        var resp3=huNivel.resp||'';
        pg+='<tr style="background:none">'+
          '<td style="font-size:7pt;border-left:4px solid '+HCORS[hj]+';padding:6px 8px;font-weight:700;color:'+HCORS[hj]+'">'+HNAMES[hj]+'</td>'+
          '<td style="text-align:center;font-size:7pt;padding:6px">'+anVal2+'</td>'+
          '<td style="font-size:7.5pt;padding:6px">'+med2+'</td>'+
          '<td style="font-size:7.5pt;padding:6px">'+resp3+'</td>'+
        '</tr>';
      }
      pg+='</tbody></table></div>';

      // Plano de ação — referência ao consolidado
      pg+='<div class="aep-ph" style="margin-top:8px">Plano de Ação</div>'+
        '<p class="aep-txt" style="font-size:7.5pt;border-left:3px solid #7d2020;padding-left:8px;color:#475569">'+
        'As ações de controle para este setor estão detalhadas no <strong>Plano de Ação Consolidado</strong> (seção específica ao final deste documento), '+
        'onde as medidas são organizadas por prioridade e agrupadas quando comuns a múltiplos setores.</p>';
      pg+='</div>';
    }
    pg+='</div>'; // fecha aep-page
    laudos+=pg;
  }

  // ── PÁGINA FINAL: CONCLUSÃO ───────────────────────────────────
  var concluPag='<div class="aep-page">'+
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-bottom:6px;border-bottom:2px solid #7d2020">'+
      (aep.logoPos!=='capa_only'&&aep.logoSrc?'<img src="'+aep.logoSrc+'" style="height:'+logoSzHdr+';max-width:150px;object-fit:contain" alt="Logo"/>':'')+
      '<span style="font-size:7pt;color:#94a3b8">AEP Psicossocial · COPSOQ II · '+dt+'</span>'+
    '</div>'+
    '<div class="aep-ph">Conclusão Geral e Recomendações</div>'+
    (concl?'<p class="aep-txt">'+concl+'</p>':'<p class="aep-txt" style="color:#94a3b8;font-style:italic">Conclusão não preenchida.</p>')+
    (recom?'<div class="aep-ph2">Recomendações Gerais</div><p class="aep-txt">'+recom+'</p>':'')+
    '<div class="aep-ph" style="margin-top:16px">Assinatura do Responsável Técnico</div>'+
    '<div style="margin-top:40px;border-top:1px solid #7d2020;padding-top:6px;width:280px">'+
      '<p style="font-size:8pt;color:#334155;margin:0"><strong>'+resp+'</strong></p>'+
      '<p style="font-size:7.5pt;color:#64748b;margin:2px 0">Responsável Técnico</p>'+
      '<p style="font-size:7.5pt;color:#64748b;margin:0">Data: '+dt+'</p>'+
    '</div>'+
  '</div>';


  // ── PÁGINA: PLANO DE AÇÃO CONSOLIDADO ────────────────────────
  var pcList=aep.planoConsolidado||[];
  var planoPag='';
  if(pcList.length>0){
    // Recalcular prioridade pelo RPN antes de ordenar
    pcList.forEach(function(ac){
      if(ac.tipo==='devolutiva') return; // mantém prioridade fixa
      if(!ac.dominio) return;
      var maiorRPN=0;
      var di=DOMS.indexOf(ac.dominio);
      if(di<0) return;
      (ac.setores||[]).forEach(function(setor){
        var ghe=aep.ghe||{};
        if(!ghe[setor]) return;
        var mz=(ghe[setor].mz||[])[di]||{};
        var p=+mz.p||0,s=+mz.s||0,cv=+mz.c||0;
        if(p&&s&&cv){var rpn=p*s/cv;if(rpn>maiorRPN)maiorRPN=rpn;}
      });
      if(maiorRPN>4) ac.prioridade='ris';
      else if(maiorRPN>2) ac.prioridade='int';
      else if(maiorRPN>0) ac.prioridade='baixa';
    });
    // Ordenar por prioridade: ris > int > outros
    var pcSort=pcList.slice().sort(function(a,b){
      var ord={ris:0,int:1};
      return (ord[a.prioridade]!=null?ord[a.prioridade]:2)-(ord[b.prioridade]!=null?ord[b.prioridade]:2);
    });
    planoPag='<div class="aep-page">'+
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-bottom:6px;border-bottom:2px solid #7d2020">'+
        (aep.logoPos!=='capa_only'&&aep.logoSrc?'<img src="'+aep.logoSrc+'" style="height:'+logoSzHdr+';max-width:150px;object-fit:contain" alt="Logo"/>':'')+
        '<span style="font-size:7pt;color:#94a3b8">AEP Psicossocial · COPSOQ II · '+dt+'</span>'+
      '</div>'+
      '<div class="aep-ph">Plano de Ação Consolidado</div>'+
      '<p class="aep-txt" style="font-size:7.5pt;margin-bottom:10px;border-left:3px solid #7d2020;padding-left:8px">'+
      'As ações abaixo estão organizadas conforme nível de prioridade definido na análise de risco psicossocial. '+
      'Ações comuns a múltiplos setores foram agrupadas para evitar redundância e facilitar o acompanhamento. '+
      'Em conformidade com a NR-01 §1.5.4.4, as ações classificadas como <strong>alta prioridade</strong> devem ser tratadas de forma imediata. '+
      'As ações de <strong>média e baixa prioridade</strong> permanecem no Plano por possuírem caráter preventivo e de monitoramento contínuo, '+
      'contemplando a manutenção de controles existentes e a reavaliação dos riscos na próxima aplicação do COPSOQ II, '+
      'conforme princípio da melhoria contínua do GRO (NR-01 §1.5.4.4.6 e ISO 45003:2021).</p>';
    for(var pci=0;pci<pcSort.length;pci++){
      var pca=pcSort[pci];
      var prCss=pca.prioridade==='ris'?'background:#fee2e2;color:#991b1b':pca.prioridade==='int'?'background:#fef9c3;color:#92400e':'background:#dcfce7;color:#166534';
      var prLabel=pca.prioridade==='ris'?'ALTA':pca.prioridade==='int'?'MÉDIA':'BAIXA';
      var prBorder=pca.prioridade==='ris'?'#dc2626':pca.prioridade==='int'?'#d97706':'#16a34a';
      var fatorRisco=FATORES_RISCO[pca.dominio]||'';
      var indicador=pca.indicador||(INDICADORES_RESULTADO[pca.dominio]||'');
      planoPag+='<div style="border:1px solid #e2e8f0;border-left:4px solid '+prBorder+';border-radius:6px;margin-bottom:8px;page-break-inside:avoid">'+
        '<div style="background:#f8fafc;padding:6px 10px;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;gap:8px;flex-wrap:wrap">'+
          '<span style="'+prCss+';padding:2px 8px;border-radius:10px;font-size:7pt;font-weight:700">'+prLabel+'</span>'+
          '<strong style="font-size:8pt;color:#1e3a5f">'+(pca.dominio||'—')+'</strong>'+
          (fatorRisco?'<span style="font-size:6.5pt;color:#64748b;font-style:italic">'+fatorRisco+'</span>':'')+
        '</div>'+
        '<div style="padding:6px 10px">'+
          '<div style="display:flex;gap:6px;margin-bottom:4px;flex-wrap:wrap">'+
            '<span style="font-size:6.5pt;font-weight:700;color:#64748b;text-transform:uppercase">Setor(es):</span>'+
            '<span style="font-size:7pt;color:#334155">'+(pca.setores||[]).join(', ')+'</span>'+
          '</div>'+
          '<table style="width:100%;border-collapse:collapse;margin-bottom:4px"><tbody>'+
            '<tr>'+
              '<td style="width:50%;vertical-align:top;padding:3px 6px 3px 0;border-right:1px solid #e2e8f0">'+
                '<div style="font-size:6.5pt;font-weight:700;color:#7d2020;text-transform:uppercase;margin-bottom:2px">Ação Proposta</div>'+
                '<div style="font-size:7.5pt;color:#334155;line-height:1.4">'+(pca.acao||'—')+'</div>'+
              '</td>'+
              '<td style="width:50%;vertical-align:top;padding:3px 0 3px 6px">'+
                '<div style="font-size:6.5pt;font-weight:700;color:#7d2020;text-transform:uppercase;margin-bottom:2px">Medida Preventiva</div>'+
                '<div style="font-size:7.5pt;color:#334155;line-height:1.4">'+(pca.medida||'—')+'</div>'+
              '</td>'+
            '</tr>'+
          '</tbody></table>'+
          '<div style="display:flex;gap:12px;flex-wrap:wrap;padding-top:3px;border-top:1px solid #f1f5f9">'+
            '<div><span style="font-size:6.5pt;font-weight:700;color:#64748b">Responsável: </span><span style="font-size:7pt;color:#334155">'+(pca.responsavel||'—')+'</span></div>'+
            '<div><span style="font-size:6.5pt;font-weight:700;color:#64748b">Prazo: </span><span style="font-size:7pt;color:#334155">'+(pca.prazo||'—')+'</span></div>'+
            '<div><span style="font-size:6.5pt;font-weight:700;color:#64748b">Status: </span><span style="font-size:7pt;color:#334155">'+(pca.status||'Pendente')+'</span></div>'+
          '</div>'+
          (indicador?'<div style="margin-top:4px;padding-top:3px;border-top:1px solid #f1f5f9">'+
            '<span style="font-size:6.5pt;font-weight:700;color:#7d2020">Indicador de Resultado: </span>'+
            '<span style="font-size:6.5pt;color:#475569;line-height:1.3">'+indicador+'</span>'+
          '</div>':'')+
        '</div>'+
      '</div>';
    }
    planoPag+=
    '<div style="border:1px solid #fde68a;border-radius:6px;padding:9px 12px;margin-top:8px;background:#fffbeb">'+
      '<div style="font-size:7pt;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Ciclo de Aferição de Resultados (PDCA)</div>'+
      '<p style="font-size:7.5pt;color:#78350f;line-height:1.6;margin:0">A reaplicação do COPSOQ II está prevista para <strong>'+(aep.doc_prox_revisao||'(data não definida)')+'</strong>, em conformidade com a NR-01 §1.5.4.4.6. '+
      'Os indicadores de resultado definidos neste Plano de Ação serão monitorados semestralmente pelo setor de RH em conjunto com o Responsável Técnico, '+
      'com registro formal dos resultados e atualização do inventário de riscos do PGR sempre que houver alteração no nível de risco apurado.</p>'+
    '</div>'+
    '</div>';
  }

  document.getElementById("relatorio-pdf").innerHTML=capa+intro+matrizRPN+inventarioPag+indicePag+laudos+planoPag+concluPag;
  setTimeout(function(){window.print();},300);
}


// ════════════════════════════════════════════════════════════════
// BACKUP COMPLETO E RESTAURAÇÃO
// ════════════════════════════════════════════════════════════════
function backupCompleto(){
  showMsg("⏳ Preparando backup completo...");
  if(!window._FB||!window._FB.db){
    // Sem Firebase — exportar o que tem local
    _exportarBackup(carregarClientes());
    return;
  }
  // Buscar TODOS os dados completos do Firestore
  window._FB.db.collection('arp_clientes').get()
  .then(function(snap){
    var clientes=[];
    if(snap&&!snap.empty){
      snap.forEach(function(doc){clientes.push(doc.data());});
    }
    // Se vazio, usar cache local como fallback
    if(clientes.length===0) clientes=carregarClientes();
    // Buscar logos
    return window._FB.db.collection('arp_logos').get().then(function(snapLogos){
      if(snapLogos&&!snapLogos.empty){
        snapLogos.forEach(function(doc){
          var logo=doc.data();
          var cli=clientes.find(function(c){return c.id===doc.id;});
          if(cli&&cli.aep&&logo.logoSrc) cli.aep.logoSrc=logo.logoSrc;
        });
      }
      _exportarBackup(clientes);
    });
  }).catch(function(e){
    showMsg("Erro ao buscar nuvem, exportando dados locais: "+e.message,false);
    _exportarBackup(carregarClientes());
  });
}
function _exportarBackup(clis){
  var payload={
    versao:"ARP-2.0",
    exportadoEm:new Date().toISOString(),
    totalClientes:clis.length,
    clientes:clis
  };
  var json=JSON.stringify(payload,null,2);
  var dt2=new Date().toLocaleDateString("pt-BR").replace(/\//g,"-");
  var a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob([json],{type:"application/json"}));
  a.download="ARP_Backup_Completo_"+dt2+".json";
  a.click();
  showMsg("✅ Backup completo: "+clis.length+" cliente(s) exportado(s)! Guarde em local seguro.");
}

function restaurarBackup(){
  var inp=document.createElement("input");
  inp.type="file";inp.accept=".json";
  inp.onchange=function(e){
    var file=e.target.files[0];if(!file)return;
    var reader=new FileReader();
    reader.onload=function(ev){
      try{
        var payload=JSON.parse(ev.target.result);
        if(!payload.versao||!payload.clientes){
          if(payload.id&&payload.nome){
            var clis=carregarClientes();
            var idx=clis.findIndex(function(x){return x.id===payload.id;});
            if(idx>=0)clis[idx]=payload;else clis.push(payload);
            salvarClientes(clis);
            showMsg("Cliente '"+payload.nome+"' importado!");
            render();return;
          }
          showMsg("Arquivo inválido.",false);return;
        }
        var msgConf="Restaurar backup de "+new Date(payload.exportadoEm).toLocaleString("pt-BR")+"? "
          +"("+payload.totalClientes+" cliente(s)). Dados atuais mantidos.";
        if(!confirm(msgConf)){return;}
        var clis=carregarClientes();
        var atualizados=0,adicionados=0;
        (payload.clientes||[]).forEach(function(cli){
          var idx=clis.findIndex(function(x){return x.id===cli.id;});
          if(idx>=0){clis[idx]=cli;atualizados++;}
          else{clis.push(cli);adicionados++;}
        });
        salvarClientes(clis);
        if(payload.aepAtiva){
          try{localStorage.setItem("aep_data",JSON.stringify(payload.aepAtiva));}catch(e){}
        }
        showMsg("Restaurado: "+adicionados+" novo(s), "+atualizados+" atualizado(s).");
        render();
      }catch(err){showMsg("Erro ao restaurar: "+err.message,false);}
    };
    reader.readAsText(file);
  };
  inp.click();
}



// ══════════════════════════════════════════════════════════════
// PERSISTÊNCIA — Firebase Firestore (com fallback localStorage)
// ══════════════════════════════════════════════════════════════
var _fbCache = {}; // cache local para evitar leituras excessivas

function _fbRef(path){
  if(!window._FB||!window._FB_UID) return null;
  var parts=path.split('/');
  if(parts.length===2) return window._FB.doc(window._FB.db,'usuarios',window._FB_UID,parts[0],parts[1]);
  return window._FB.doc(window._FB.db,'usuarios',window._FB_UID,'config',parts[0]);
}



function _deduplicarClientes(clis){
  // Remove duplicatas pelo nome — mantém o mais completo/recente
  var vistos={};
  var resultado=[];
  clis.forEach(function(cli){
    var chave=(cli.nome||"").trim().toUpperCase();
    if(!vistos[chave]){
      vistos[chave]=resultado.length;
      resultado.push(cli);
    } else {
      // Já existe — manter o mais completo
      var existente=resultado[vistos[chave]];
      var existeMaior=JSON.stringify(existente).length >= JSON.stringify(cli).length;
      var existeMaisRecente=existente.updatedAt && cli.updatedAt && existente.updatedAt >= cli.updatedAt;
      if(!existeMaior && !existeMaisRecente){
        resultado[vistos[chave]]=cli;
      }
    }
  });
  return resultado;
}

function _mergeClientes(nuvem, local){
  // Carregar lista unificada de deletados (local + passado como parâmetro)
  var deletados=[];
  try{deletados=JSON.parse(localStorage.getItem("copsoq_deletados")||"[]");}catch(e){}

  // Filtrar AMBAS as listas removendo clientes deletados
  var nuvemFiltrada=(nuvem||[]).filter(function(cli){return deletados.indexOf(cli.id)<0;});
  var localFiltrado=(local||[]).filter(function(cli){return deletados.indexOf(cli.id)<0;});

  // Merge seguro: nunca sobrescreve dado preenchido com vazio
  var resultado = nuvemFiltrada.slice();
  localFiltrado.forEach(function(cli){
    var idx = resultado.findIndex(function(x){return x.id===cli.id;});
    if(idx < 0){
      // Não existe na nuvem — adicionar
      resultado.push(cli);
    } else {
      var existente = resultado[idx];
      // Comparar qual é mais recente E mais completo
      // Usar APENAS updatedAt para decidir qual versão prevalece
      // Isso garante que apagar texto também é salvo (versão mais recente ganha)
      var localMaisRecente = cli.updatedAt && existente.updatedAt && cli.updatedAt > existente.updatedAt;
      var semData = !existente.updatedAt && cli.updatedAt;
      if(localMaisRecente || semData){
        // Local é mais recente — usar local completamente
        resultado[idx] = cli;
      }
      // Se nuvem é mais recente ou igual, manter nuvem (já está em resultado[idx])
    }
  });
  return resultado;
}

// ── Extrai só metadados leves de um cliente (resolve memória cheia) ──────────
function _meta(cli){
  return {
    id:cli.id, nome:cli.nome||'',
    createdAt:cli.createdAt||'', updatedAt:cli.updatedAt||'',
    portalLink:cli.portalLink||'', portalToken:cli.portalToken||'',
    nResp:(cli.dados||[]).length, temAEP:!!(cli.aep&&cli.aep.empresa)
  };
}

// ── _salvarFirestore: salva UM cliente no Firestore (chamado só no Salvar) ───
function _salvarFirestore(cli){
  if(!window._FB||!window._FB.db||!cli||!cli.id) return;
  // Logo separada para não estourar 1MB por documento
  var logo=(cli.aep&&cli.aep.logoSrc)||'';
  var aepSemLogo=cli.aep?Object.assign({},cli.aep,{logoSrc:''}):null;
  window._FB.db.collection('arp_clientes').doc(cli.id).set({
    id:cli.id, nome:cli.nome||'',
    createdAt:cli.createdAt||'', updatedAt:cli.updatedAt||new Date().toISOString(),
    portalLink:cli.portalLink||'', portalToken:cli.portalToken||'',
    aep:aepSemLogo||null, dados:cli.dados||[], cargos:cli.cargos||null
  }).catch(function(e){console.warn('[ARP v4] Firestore cliente:',e.message);});
  if(logo&&logo.length>100){
    window._FB.db.collection('arp_logos').doc(cli.id).set({
      logoSrc:logo, updatedAt:new Date().toISOString()
    }).catch(function(e){console.warn('[ARP v4] Firestore logo:',e.message);});
  }
  // Índice geral (metadados apenas — documento pequeno)
  var todos=carregarClientes();
  window._FB.db.collection('empresa').doc('clientes').set({
    data:JSON.stringify(todos.map(_meta)),
    updatedAt:new Date().toISOString()
  }).catch(function(e){console.warn('[ARP v4] índice:',e.message);});
}

function salvarClientes(l){
  // localStorage: SÓ metadados leves (~500B por cliente, nunca enche)
  var meta=l.map(_meta);
  try{localStorage.setItem('arp_meta',JSON.stringify(meta));}catch(e){}
  // Limpar chave antiga pesada se existir
  try{localStorage.removeItem('copsoq_clientes');}catch(e){}
  _fbCache['clientes']=l;
  // NÃO salva no Firestore aqui — só ao clicar Salvar (evita resource-exhausted)
}

function carregarClientes(){
  if(_fbCache['clientes']){
    var d=_deduplicarClientes(_fbCache['clientes']);
    _fbCache['clientes']=d;
    return d;
  }
  // Tentar metadados leves (formato novo)
  try{
    var s=localStorage.getItem('arp_meta');
    if(s){var m=_deduplicarClientes(JSON.parse(s));_fbCache['clientes']=m;return m;}
  }catch(e){}
  // Migração transparente do formato antigo pesado
  try{
    var sOld=localStorage.getItem('copsoq_clientes');
    if(sOld){
      console.log('[ARP v4] Migrando localStorage antigo...');
      var old=_deduplicarClientes(JSON.parse(sOld));
      _fbCache['clientes']=old;
      // Salvar no formato novo e remover antigo
      try{localStorage.setItem('arp_meta',JSON.stringify(old.map(_meta)));
          localStorage.removeItem('copsoq_clientes');}catch(e){}
      return old;
    }
  }catch(e){}
  return [];
}

// Carrega dados COMPLETOS de um cliente do Firestore (chamado ao abrir cliente)
function carregarClienteCompleto(id,cb){
  // Verificar cache primeiro
  var todos=_fbCache['clientes']||[];
  var cli=todos.find(function(x){return x.id===id;});
  if(cli&&cli.aep&&cli.dados){cb(cli);return;}
  if(!window._FB||!window._FB.db){cb(cli||null);return;}
  // Buscar dados + logo em paralelo
  Promise.all([
    window._FB.db.collection('arp_clientes').doc(id).get(),
    window._FB.db.collection('arp_logos').doc(id).get()
  ]).then(function(res){
    var snapD=res[0],snapL=res[1];
    if(snapD&&snapD.exists){
      var cliCompleto=snapD.data();
      if(snapL&&snapL.exists&&snapL.data().logoSrc){
        if(cliCompleto.aep) cliCompleto.aep.logoSrc=snapL.data().logoSrc;
      }
      // Atualizar cache
      var idx=todos.findIndex(function(x){return x.id===id;});
      if(idx>=0) todos[idx]=Object.assign(todos[idx],cliCompleto);
      else todos.push(cliCompleto);
      _fbCache['clientes']=todos;
      cb(cliCompleto);
    } else {
      // Fallback: tentar coleção antiga (empresa/clientes)
      window._FB.db.collection('empresa').doc('clientes').get()
      .then(function(snap){
        if(snap&&snap.data&&snap.data()){
          var lista=JSON.parse(snap.data().data||'[]');
          var found=lista.find(function(x){return x.id===id;});
          cb(found||cli||null);
        } else cb(cli||null);
      }).catch(function(){cb(cli||null);});
    }
  }).catch(function(e){
    console.warn('[ARP v4] carregarClienteCompleto:',e.message);
    cb(cli||null);
  });
}

function carregarClientesFirebase(cb){
  if(!window._FB||!window._FB.db){cb(carregarClientes());return;}
  var deletadosFinal=[];
  try{deletadosFinal=JSON.parse(localStorage.getItem("copsoq_deletados")||"[]");}catch(e){}

  // v4: tenta arp_clientes (nova) primeiro, fallback para empresa/clientes (antiga)
  window._FB.db.collection('arp_clientes').get()
  .then(function(snap){
    if(snap&&!snap.empty){
      // Coleção nova — carregar todos os clientes (metadados completos)
      var lista=[];
      snap.forEach(function(doc){lista.push(doc.data());});
      lista=lista.filter(function(c){return deletadosFinal.indexOf(c.id)<0;});
      var local=carregarClientes().filter(function(c){return deletadosFinal.indexOf(c.id)<0;});
      var merged=_deduplicarClientes(_mergeClientes(lista,local));
      _fbCache['clientes']=merged;
      try{localStorage.setItem('arp_meta',JSON.stringify(merged.map(_meta)));}catch(e){}
      cb(merged);
    } else {
      // Fallback: coleção antiga empresa/clientes
      window._FB.db.collection('empresa').doc('clientes').get()
      .then(function(snap2){
        var local=carregarClientes();
        if(snap2&&snap2.data&&snap2.data()){
          try{
            var nuvem=JSON.parse(snap2.data().data||'[]');
            var deletadosNuvem=snap2.data().deletados||[];
            if(deletadosNuvem.length>0){
              var delLocal=[];
              try{delLocal=JSON.parse(localStorage.getItem("copsoq_deletados")||"[]");}catch(e){}
              var delMerge=delLocal.slice();
              deletadosNuvem.forEach(function(id){if(delMerge.indexOf(id)<0)delMerge.push(id);});
              try{/*copsoq_deletados desativado — exclusão agora é direta no Firestore*/}catch(e){}
              deletadosFinal=delMerge;
              local=local.filter(function(c){return delMerge.indexOf(c.id)<0;});
            }
            nuvem=(nuvem||[]).filter(function(c){return deletadosFinal.indexOf(c.id)<0;});
            local=local.filter(function(c){return deletadosFinal.indexOf(c.id)<0;});
            var merged2=_deduplicarClientes(_mergeClientes(nuvem,local));
            _fbCache['clientes']=merged2;
            try{localStorage.setItem('arp_meta',JSON.stringify(merged2.map(_meta)));
                localStorage.removeItem('copsoq_clientes');}catch(e){}
            cb(merged2);
          }catch(e){cb(local);}
        } else {
          if(local.length>0) salvarClientes(local);
          cb(local);
        }
      }).catch(function(e){
        console.warn('[ARP v4] Firebase load error:',e);
        cb(carregarClientes());
      });
    }
  }).catch(function(){
    // Se arp_clientes falhar (permissão), tentar empresa/clientes
    window._FB.db.collection('empresa').doc('clientes').get()
    .then(function(snap2){
      var local=carregarClientes();
      if(snap2&&snap2.data&&snap2.data()){
        try{
          var nuvem=JSON.parse(snap2.data().data||'[]');
          nuvem=(nuvem||[]).filter(function(c){return deletadosFinal.indexOf(c.id)<0;});
          var merged3=_deduplicarClientes(_mergeClientes(nuvem,local));
          _fbCache['clientes']=merged3;
          cb(merged3);
        }catch(e){cb(local);}
      } else cb(local);
    }).catch(function(){cb(carregarClientes());});
  });
}

function salvarAEP(){
  // v4: NÃO usa localStorage — só atualiza cache em memória
  // Persistência real acontece ao clicar Salvar (salvarClienteManual)
  try{
    if(clienteAtual){
      var clis=carregarClientes();
      var ci=clis.findIndex(function(x){return x.id===clienteAtual;});
      if(ci>=0){
        clis[ci].aep=JSON.parse(JSON.stringify(aep));
        clis[ci].dados=dados.slice();
        clis[ci].updatedAt=new Date().toISOString();
        _fbCache['clientes']=clis; // só cache, não persiste ainda
        _sincronizarPortalAuto(clis[ci]);
      }
    }
  }catch(e){}
}

function _sincronizarPortalAuto(cli){
  // Só sincroniza se o cliente já tem portal publicado e Firebase disponível
  if(!cli||!cli.portalToken||!window._FB||!window._FB.db)return;
  var docRef=window._FB.db.collection('portais').doc(cli.id);
  var aepAtual=cli.aep||{};
  var ghe=aepAtual.ghe||{};
  var mat=aepAtual.matriz||[];
  var DOMS_LIST=['Exigências Laborais','Organização do Trabalho e Conteúdo','Relações Sociais e Liderança',
    'Interface Trabalho-Indivíduo','Valores no Local de Trabalho','Saúde e Bem-Estar',
    'Comportamento Ofensivo','Personalidade'];

  // Atualizar dados gerais do portal (AEP + respondentes)
  docRef.update({
    aep:aepAtual,
    respondentes:cli.dados||[],
    updatedAt:new Date().toISOString()
  }).then(function(){
    // Atualizar ações do plano consolidado — SEM tocar em status/comentários do cliente
    var promessas=[];
    var pcAcoes=aepAtual.planoConsolidado||[];
    // Primeiro: limpar ações antigas do formato anterior
    promessas.push(docRef.collection('plano_acao').get().then(function(snap){
      var delPromises=[];
      snap.docs.forEach(function(d){
        // Manter apenas IDs do novo formato (pc_N)
        if(d.id.indexOf('pc_')!==0) delPromises.push(d.ref.delete());
      });
      return Promise.all(delPromises);
    }));
    // Depois: salvar ações consolidadas
    pcAcoes.forEach(function(ac,idx){
      var acaoId='pc_'+idx;
      var ref=docRef.collection('plano_acao').doc(acaoId);
      promessas.push(ref.get().then(function(snap){
        if(snap.exists){
          return ref.update({
            ordem:idx,
            dominio:ac.dominio||'',
            setores:ac.setores||[],
            setor:(ac.setores||[]).join(', '),
            descricao:ac.acao||'',
            medida:ac.medida||'',
            responsavel:ac.responsavel||'',
            prazo:ac.prazo||'',
            prioridade:ac.prioridade||'',
            evidencia:ac.evidencia||''
          });
        } else {
          return ref.set({
            ordem:idx,
            dominio:ac.dominio||'',
            setores:ac.setores||[],
            setor:(ac.setores||[]).join(', '),
            descricao:ac.acao||'',
            medida:ac.medida||'',
            responsavel:ac.responsavel||'',
            prazo:ac.prazo||'',
            prioridade:ac.prioridade||'',
            evidencia:ac.evidencia||'',
            status_atual:ac.status||'Pendente',
            comentario_atual:'',historico:[],
            updatedAt:new Date().toISOString()
          });
        }
      }));
    });
    return Promise.all(promessas);
  }).catch(function(e){
    console.warn('[ARP] Sync portal auto erro:',e.message);
  });
}

function carregarAEP(){
  // v4: AEP não vive no localStorage — é carregada com o cliente
  // Migração única: lê chave antiga uma última vez e remove
  try{
    var s=localStorage.getItem("aep_data");
    if(s){aep=Object.assign(_aepLimpo(),JSON.parse(s));localStorage.removeItem("aep_data");}
  }catch(e){}
}

// Login/Logout Firebase

// ── CONTROLE DE ACESSO ────────────────────────────────────────────────────────
// Emails autorizados — verificação principal via Firebase (usuarios_autorizados)
// Lista base em formato segmentado para dificultar scraping automático
var _EB=(function(){
  var d=['espontaneamente','jessyanemendes','psi.analuizass03'];
  var h='@gmail.com';
  return d.map(function(u){return u+h;});
})();
var _EMAILS_BASE=_EB;

function _emailAutorizado(email,cb){
  if(!email){cb(false);return;}
  if(_EMAILS_BASE.indexOf(email.toLowerCase())>=0){cb(true);return;}
  if(!window._FB||!window._FB.db){cb(false);return;}
  window._FB.db.collection('usuarios_autorizados').doc(email.toLowerCase()).get()
  .then(function(snap){cb(snap.exists);})
  .catch(function(){cb(false);});
}

function _negarAcesso(auth){
  if(auth)auth.signOut();
  var ov=document.getElementById('ov');
  if(ov){
    ov.style.display='flex';
    var inner=ov.querySelector('div');
    if(inner){
      inner.innerHTML=
        '<div style="background:rgba(220,38,38,.2);border:1px solid rgba(220,38,38,.5);border-radius:14px;padding:24px 28px;text-align:center;max-width:360px">'+
          '<div style="font-size:40px;margin-bottom:12px">&#128683;</div>'+
          '<div style="font-size:18px;font-weight:800;margin-bottom:8px">Acesso Negado</div>'+
          '<div style="font-size:13px;opacity:.85;margin-bottom:16px">Este e-mail n\u00e3o est\u00e1 autorizado a acessar o sistema.</div>'+
          '<div style="font-size:11px;opacity:.6;margin-bottom:20px">Entre em contato com a administra\u00e7\u00e3o: espontaneamente.psi@gmail.com</div>'+
          '<button onclick="window.location.reload()" style="background:rgba(255,255,255,.2);color:white;border:1px solid rgba(255,255,255,.4);padding:10px 24px;border-radius:10px;font-size:13px;cursor:pointer">Tentar outro e-mail</button>'+
        '</div>';
    }
  }
}

function renderUsuariosAutorizados(){
  if(!window._FB||!window._FB.db)return '<p style="color:#ef4444;font-size:12px">Firebase necessário.</p>';
  var h='<div id="usuarios-list"><p style="color:#94a3b8;font-size:12px">&#9203; Carregando...</p></div>'+
    '<div style="margin-top:14px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">'+
      '<input id="novo-email-input" type="email" placeholder="novo@email.com" '+
        'style="flex:1;min-width:200px;padding:8px 12px;border:2px solid #e2e8f0;border-radius:8px;font-size:13px"/>'+
      '<button onclick="adicionarUsuario()" '+
        'style="background:#7d2020;color:white;border:none;padding:9px 18px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">'+
        '&#43; Adicionar</button>'+
    '</div>'+
    '<p style="font-size:10px;color:#94a3b8;margin-top:6px">&#9888;&#65039; Ap\u00f3s adicionar, crie o usu\u00e1rio tamb\u00e9m no Firebase Authentication &gt; Users.</p>';
  setTimeout(function(){_carregarUsuarios();},200);
  return h;
}

function _carregarUsuarios(){
  var el=document.getElementById('usuarios-list');
  if(!el||!window._FB||!window._FB.db)return;
  window._FB.db.collection('usuarios_autorizados').get()
  .then(function(snap){
    var lista=_EMAILS_BASE.map(function(e){
      return '<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 10px;'+
        'background:#fdf2f2;border:1px solid #fde8e8;border-radius:6px;margin-bottom:5px">'+
        '<span style="font-size:12px">&#128274; '+e+'</span>'+
        '<span style="font-size:10px;color:#94a3b8;font-weight:600">Administrador</span>'+
      '</div>';
    });
    snap.forEach(function(doc){
      lista.push(
        '<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 10px;'+
          'background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;margin-bottom:5px">'+
          '<span style="font-size:12px">&#128100; '+doc.id+'</span>'+
          '<button data-email="'+doc.id+'" onclick="removerUsuario(this.dataset.email)" '+
            'style="background:#ef4444;color:white;border:none;padding:3px 10px;border-radius:5px;font-size:11px;cursor:pointer">'+
            'Remover</button>'+
        '</div>'
      );
    });
    el.innerHTML=lista.length?lista.join(''):'<p style="color:#94a3b8;font-size:12px">Nenhum usu\u00e1rio adicional cadastrado.</p>';
  }).catch(function(e){el.innerHTML='<p style="color:#ef4444;font-size:12px">Erro: '+e.message+'</p>';});
}

function adicionarUsuario(){
  var input=document.getElementById('novo-email-input');
  if(!input)return;
  var email=(input.value||'').trim().toLowerCase();
  if(!email||email.indexOf('@')<0){showMsg('Digite um e-mail v\u00e1lido.',false);return;}
  if(_EMAILS_BASE.indexOf(email)>=0){showMsg('Este e-mail j\u00e1 \u00e9 administrador.',false);return;}
  if(!window._FB||!window._FB.db)return;
  window._FB.db.collection('usuarios_autorizados').doc(email).set({
    email:email,
    adicionadoPor:window._FB_USER?window._FB_USER.email:'',
    adicionadoEm:new Date().toISOString()
  }).then(function(){
    showMsg('\u2705 Usu\u00e1rio '+email+' adicionado! Crie tamb\u00e9m no Firebase Authentication > Users.');
    input.value='';
    _carregarUsuarios();
  }).catch(function(e){showMsg('Erro: '+e.message,false);});
}

function removerUsuario(email){
  if(!confirm('Remover '+email+' do acesso ao sistema?'))return;
  if(!window._FB||!window._FB.db)return;
  window._FB.db.collection('usuarios_autorizados').doc(email).delete()
  .then(function(){showMsg('Usu\u00e1rio removido.');_carregarUsuarios();})
  .catch(function(e){showMsg('Erro: '+e.message,false);});
}

function fbLogin(){
  if(!window._FB){showMsg("Firebase nao carregado.",false);return;}
  // iOS/Safari nao suporta signInWithRedirect — usar popup
  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
              (navigator.platform==='MacIntel' && navigator.maxTouchPoints>1);
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if(isIOS || isSafari){
    window._FB.auth.signInWithPopup(window._FB.provider)
    .then(function(result){
      // Popup nao dispara redirect — tratar aqui
      _emailAutorizado(result.user.email, function(autorizado){
        if(!autorizado){_negarAcesso(window._FB.auth);return;}
        var user=result.user;
        window._FB_USER=user;
        window._FB_READY=true;
    carregarPerfisCustom();
        window._FB_UID=user.uid;
        var ov=document.getElementById("ov");
        if(ov) ov.style.display="none";
        try{var b=document.getElementById("fb-login-btn")||document.getElementById("fb-login-area");if(b){b.textContent="🟢 "+user.displayName.split(" ")[0]+" · Sair";b.onclick=function(){window._FB.auth.signOut().then(function(){location.reload();});};b.style.background="rgba(255,255,255,.2)";}}catch(e){}
        _fbCache={};
        carregarClientesFirebase(function(l){
          render();
          if(l.length) try{showMsg("☁️ Olá, "+user.displayName.split(" ")[0]+"! "+l.length+" cliente(s).");}catch(e){}
        });
      });
    })
    .catch(function(e){
      if(e.code!=="auth/popup-closed-by-user") showMsg("Erro no login: "+e.message,false);
    });
  } else {
    window._FB.auth.signInWithRedirect(window._FB.provider);
  }
}

function sincronizarFirebase(){
  if(!window._FB||!window._FB.db){showMsg("Firebase nao conectado.",false);return;}
  showMsg("⏳ Sincronizando...");
  var local=carregarClientes();
  // Buscar coleção real (arp_clientes) primeiro
  window._FB.db.collection('arp_clientes').get()
  .then(function(snap){
    var nuvem=[];
    var idsNuvem={};
    if(snap&&!snap.empty){
      snap.forEach(function(doc){var d=doc.data();nuvem.push(d);idsNuvem[d.id]=true;});
    }
    // Se arp_clientes vazia, tentar empresa/clientes como fallback
    if(nuvem.length===0){
      return window._FB.db.collection('empresa').doc('clientes').get()
      .then(function(snap2){
        if(snap2&&snap2.data&&snap2.data()){
          try{nuvem=JSON.parse(snap2.data().data||'[]');}catch(e){}
          nuvem.forEach(function(c){idsNuvem[c.id]=true;});
        }
        return {nuvem:nuvem,idsNuvem:idsNuvem};
      });
    }
    return {nuvem:nuvem,idsNuvem:idsNuvem};
  }).then(function(res){
    var nuvem=res.nuvem||[];
    var idsNuvem=res.idsNuvem||{};
    var deletados=[];
    try{deletados=JSON.parse(localStorage.getItem("copsoq_deletados")||"[]");}catch(e){}
    nuvem=nuvem.filter(function(c){return deletados.indexOf(c.id)<0;});
    local=local.filter(function(c){return deletados.indexOf(c.id)<0;});
    var merged=_deduplicarClientes(_mergeClientes(nuvem, local));
    salvarClientes(merged);
    _fbCache['clientes']=merged;
    try{localStorage.setItem('arp_meta',JSON.stringify(merged.map(_meta)));}catch(e){}
    // ENVIAR clientes locais que NÃO existem na nuvem
    var enviados=0;
    merged.forEach(function(cli){
      if(!idsNuvem[cli.id]){
        _salvarFirestore(cli);
        enviados++;
      }
    });
    if(clienteAtual){
      var cli=merged.find(function(x){return x.id===clienteAtual;});
      if(cli&&cli.aep){aep=Object.assign(_aepLimpo(),cli.aep);}
      if(cli&&cli.dados){dados=cli.dados.slice();}
    }
    render();
    var msg="✅ Sincronizado! "+merged.length+" cliente(s).";
    if(enviados>0) msg+=" "+enviados+" enviado(s) para a nuvem.";
    showMsg(msg);
  }).catch(function(e){showMsg("Erro: "+e.message,false);});
}


function importarCargos(id){
  // Se chamado sem id, usa clienteAtual
  var targetId = id || clienteAtual;
  if(!targetId){showMsg("Abra um cliente antes de importar cargos.",false);return;}
  // Buscar nome do cliente para confirmar
  var clis=carregarClientes();
  var cli=clis.find(function(x){return x.id===targetId;});
  if(!cli){showMsg("Cliente não encontrado.",false);return;}
  var inp=document.createElement("input");
  inp.type="file";
  inp.accept=".csv,.txt";
  inp.onchange=function(e){
    var file=e.target.files[0];if(!file)return;
    var reader=new FileReader();
    reader.onload=function(ev){
      try{
        var text=ev.target.result;
        var lines=text.split(/\r?\n/).filter(function(l){return l.trim();});
        var startIdx=0;
        var header=lines[0].toLowerCase();
        if(header.includes("setor")||header.includes("cargo")||header.includes("descri")){startIdx=1;}
        var cargos={};
        lines.slice(startIdx).forEach(function(line){
          var sep=line.includes(";")?";":(line.includes("\t")?"\t":",");
          var parts=line.split(sep).map(function(p){return p.trim().replace(/^["']|["']$/g,"");});
          if(parts.length<2)return;
          var setor=(parts[0]||"").toUpperCase().trim();
          var cargo=(parts[1]||"").trim();
          var desc=(parts[2]||"").trim();
          if(!setor||!cargo)return;
          if(!cargos[setor])cargos[setor]=[];
          if(!cargos[setor].find(function(x){return x.cargo===cargo;})){
            cargos[setor].push({cargo:cargo,desc:desc});
          }
        });
        var total=Object.values(cargos).reduce(function(a,b){return a+b.length;},0);
        if(total===0){showMsg("Nenhum cargo encontrado. Verifique o formato.",false);return;}
        // Salvar no cliente específico
        clis=carregarClientes();
        var c2=clis.find(function(x){return x.id===targetId;});
        if(c2){
          c2.cargos=cargos;
          c2.updatedAt=new Date().toISOString();
          salvarClientes(clis);
          // Se for o cliente ativo, atualizar em memória também
          if(targetId===clienteAtual) window._cargosCliente=cargos;
        }
        showMsg("Cargos importados para '"+cli.nome+"': "+Object.keys(cargos).length+" setor(es), "+total+" cargo(s).");
        render();
      }catch(err){showMsg("Erro ao importar: "+err.message,false);}
    };
    reader.readAsText(file,"UTF-8");
  };
  inp.click();
}
// Alias para chamada pelo card do cliente
window._importCargos=function(id){importarCargos(id);};
function _importarCargosLegacy(){
  if(!clienteAtual){showMsg("Abra um cliente antes de importar cargos.",false);return;}
  var inp=document.createElement("input");
  inp.type="file";
  inp.accept=".csv,.xlsx,.xls,.txt";
  inp.onchange=function(e){
    var file=e.target.files[0];if(!file)return;
    var reader=new FileReader();
    reader.onload=function(ev){
      try{
        var text=ev.target.result;
        var lines=text.split(/\r?\n/).filter(function(l){return l.trim();});
        // Formato esperado: SETOR,CARGO,DESCRIÇÃO (com cabeçalho)
        // ou sem cabeçalho se primeira linha não tiver "setor" ou "cargo"
        var startIdx=0;
        var header=lines[0].toLowerCase();
        if(header.includes("setor")||header.includes("cargo")||header.includes("descri")){
          startIdx=1; // pular cabeçalho
        }
        var cargos={};
        lines.slice(startIdx).forEach(function(line){
          // Suporte a separadores: vírgula, ponto-vírgula, tabulação
          var sep=line.includes(";")?";":(line.includes("\t")?"\t":",");
          var parts=line.split(sep).map(function(p){return p.trim().replace(/^["']|["']$/g,"");});
          if(parts.length<2)return;
          var setor=(parts[0]||"").toUpperCase().trim();
          var cargo=(parts[1]||"").trim();
          var desc=(parts[2]||"").trim();
          if(!setor||!cargo)return;
          if(!cargos[setor])cargos[setor]=[];
          // Evitar duplicata
          if(!cargos[setor].find(function(x){return x.cargo===cargo;})){
            cargos[setor].push({cargo:cargo,desc:desc});
          }
        });
        var total=Object.values(cargos).reduce(function(a,b){return a+b.length;},0);
        if(total===0){showMsg("Nenhum cargo encontrado. Verifique o formato do arquivo.",false);return;}
        window._cargosCliente=cargos;
        // Salvar imediatamente no cliente
        var clis=carregarClientes();
        var cli=clis.find(function(x){return x.id===clienteAtual;});
        if(cli){cli.cargos=cargos;cli.updatedAt=new Date().toISOString();salvarClientes(clis);}
        showMsg("Importado! "+Object.keys(cargos).length+" setor(es), "+total+" cargo(s).");
        render();
      }catch(err){showMsg("Erro ao importar: "+err.message,false);}
    };
    reader.readAsText(file,"UTF-8");
  };
  inp.click();
}


function _gerarUUID(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){
    var r=Math.random()*16|0,v=c==='x'?r:(r&0x3|0x8);
    return v.toString(16);
  });
}


function publicarPortal(id){
  if(!window._FB||!window._FB.db){showMsg("Firebase necessário para publicar portal.",false);return;}
  var clis=carregarClientes();
  var cli=clis.find(function(x){return x.id===id;});
  if(!cli){showMsg("Cliente não encontrado.",false);return;}
  if(!cli.aep||!cli.aep.empresa){showMsg("Preencha a AEP antes de publicar o portal.",false);return;}
  if(clienteAtual===id) salvarClienteManual();
  clis=carregarClientes();
  cli=clis.find(function(x){return x.id===id;});

  // Gerar ou reutilizar token
  var token=cli.portalToken||_gerarUUID();
  if(!cli.portalToken){
    cli.portalToken=token;
    salvarClientes(clis);
  }

  var docRef=window._FB.db.collection('portais').doc(id);
  docRef.get().then(function(snap){
    // Montar ações a partir do plano consolidado
    var pcAcoes=cli.aep&&cli.aep.planoConsolidado?cli.aep.planoConsolidado:[];
    var acoes=pcAcoes.map(function(ac,idx){
      return {
        id:'pc_'+idx,
        ordem:idx,
        dominio:ac.dominio||'',
        setor:(ac.setores||[]).join(', '),
        setores:ac.setores||[],
        descricao:ac.acao||'',
        medida:ac.medida||'',
        responsavel:ac.responsavel||'',
        prazo:ac.prazo||'',
        prioridade:ac.prioridade||'',
        evidencia:ac.evidencia||'',
        status_atual:ac.status||'Pendente',
        comentario_atual:'',
        historico:[],
        updatedAt:new Date().toISOString()
      };
    });

    // Verificar bloqueio preservando valor existente
    var jaBloqueado=false;
    try{if(snap&&snap.exists&&snap.data())jaBloqueado=snap.data().bloqueado||false;}catch(e){}

    // Salvar dados gerais do portal
    // Verificar se já tem senhaAdm cadastrada para não sobrescrever
    var senhaAdmExistente='';
    try{if(snap&&snap.exists&&snap.data())senhaAdmExistente=snap.data().senhaAdm||'';}catch(e){}

    docRef.set({
      token:token,
      nome:cli.nome,
      aep:cli.aep||{},
      respondentes:cli.dados||[],
      dados_gerais:{empresa:cli.aep?cli.aep.empresa:'',cnpj:cli.aep?cli.aep.cnpj:''},
      bloqueado:jaBloqueado,
      // senhaAdm: senha da consultoria — definida separadamente, nunca sobrescrita
      senhaAdm:senhaAdmExistente,
      updatedAt:new Date().toISOString()
    }).then(function(){
      // Salvar ações preservando o que o cliente preencheu
      // Para cada ação: verificar se já existe antes de salvar
      var promessas=acoes.map(function(acao){
        var ref=docRef.collection('plano_acao').doc(acao.id);
        return ref.get().then(function(snap){
          if(snap.exists){
            // Ação já existe — atualizar APENAS campos técnicos da AEP
            // NUNCA sobrescrever status_atual, comentario_atual ou historico do cliente
            return ref.update({
              ordem:acao.ordem,
              dominio:acao.dominio,
              setor:acao.setor||'',
              descricao:acao.descricao,
              medida:acao.medida||'',
              responsavel:acao.responsavel,
              prazo:acao.prazo,
              p:acao.p||'',
              s:acao.s||'',
              c:acao.c||''
              // status_atual, comentario_atual e historico: NÃO TOCAR
            });
          } else {
            // Ação nova — criar com valores padrão
            return ref.set({
              ordem:acao.ordem,
              dominio:acao.dominio,
              setor:acao.setor||'',
              descricao:acao.descricao,
              medida:acao.medida||'',
              responsavel:acao.responsavel,
              prazo:acao.prazo,
              p:acao.p||'',
              s:acao.s||'',
              c:acao.c||'',
              status_atual:acao.status_atual,
              comentario_atual:'',
              historico:[],
              updatedAt:acao.updatedAt
            });
          }
        });
      });
      // Se não há ações, resolver direto
      return acoes.length?Promise.all(promessas):Promise.resolve();
    }).then(function(){
      var link='https://arp-mendes-silva.web.app/portal.html?t='+token;
      cli.portalLink=link;
      salvarClientes(clis);
      // Tentar copiar para clipboard
      try{navigator.clipboard.writeText(link);}catch(e){}
      // Mostrar link na tela mesmo se clipboard falhar
      var msg='✅ Portal publicado!\n\nLink do cliente:\n'+link;
      alert(msg);
      showMsg('✅ Portal publicado! Link: '+link.substring(0,60)+'...');
      render();
    }).catch(function(e){
      console.error('publicarPortal erro:',e);
      showMsg('Erro ao publicar: '+e.message,false);
    });
  }).catch(function(e){
    console.error('publicarPortal get erro:',e);
    showMsg('Erro ao acessar Firebase: '+e.message,false);
  });
}
window._publicarPortal=function(id){publicarPortal(id);};

window._gerirSenhaPortal=function(id){
  var clis=carregarClientes();
  var cli=clis.find(function(x){return x.id===id;});
  if(!cli){showMsg('Cliente não encontrado.',false);return;}
  if(!cli.portalLink){showMsg('Publique o portal primeiro para depois definir a senha.',false);return;}
  if(!window._FB||!window._FB.db){showMsg('Firebase necessário.',false);return;}
  window._FB.db.collection('portais').doc(id).get().then(function(snap){
    var dados=snap.exists?snap.data():{};
    var senhaCliente=dados.senhaPortal||'';
    var senhaAdm=dados.senhaAdm||'';
    var escolha=prompt(
      'Portal de: '+cli.nome+'\n\n'+
      '1 = Senha do CLIENTE ('+( senhaCliente?'definida':'não definida')+')'+'\n'+
      '2 = Senha da CONSULTORIA ('+(senhaAdm?'definida':'não definida')+')'+'\n\n'+
      'Digite 1 ou 2 para escolher qual senha alterar:'
    );
    if(!escolha)return;
    var campo=escolha.trim()==='2'?'senhaAdm':'senhaPortal';
    var labelTipo=escolha.trim()==='2'?'Consultoria':'Cliente';
    var senhaAtual=escolha.trim()==='2'?senhaAdm:senhaCliente;
    var novaSenha=prompt(
      'Nova senha para '+labelTipo+' — Portal: '+cli.nome+'\n'+
      'Atual: '+(senhaAtual?'(definida — não exibida por segurança)':'(não definida)')+'\n\n'+
      'Digite a nova senha (mínimo 6 caracteres):'
    );
    if(novaSenha===null)return;
    novaSenha=novaSenha.trim();
    if(novaSenha.length<6){showMsg('Senha muito curta (mínimo 6 caracteres).',false);return;}
    _hashSenha(novaSenha).then(function(hash){
      var update={};update[campo]=hash;
      window._FB.db.collection('portais').doc(id).update(update)
      .then(function(){showMsg('✅ Senha de '+labelTipo+' definida para "'+cli.nome+'".');})
      .catch(function(e){showMsg('Erro ao salvar senha: '+e.message,false);});
    });
  }).catch(function(e){showMsg('Erro ao acessar portal: '+e.message,false);});
};

window._verPortalAdm=function(id){
  var clis=carregarClientes();
  var cli=clis.find(function(x){return x.id===id;});
  if(!cli){showMsg('Cliente não encontrado.',false);return;}
  if(!cli.portalLink){showMsg('Portal não publicado ainda.',false);return;}
  if(!cli.portalToken){showMsg('Token do portal não encontrado. Republique o portal.',false);return;}
  var urlAdm=cli.portalLink+'&adm=1&admtoken='+encodeURIComponent(cli.portalToken);
  window.open(urlAdm,'_blank');
};


var _fbListener=null;
var _fbListenerAtivo = false;
var _fbWatchdog = null;

function _iniciarListenerTempoReal(){
  // Cancelar listener e watchdog anteriores
  if(_fbListener){try{_fbListener();}catch(e){}_fbListener=null;}
  if(_fbWatchdog){clearInterval(_fbWatchdog);_fbWatchdog=null;}
  _fbListenerAtivo=false;
  if(!window._FB||!window._FB.db)return;

  function _conectar(){
    if(_fbListener){try{_fbListener();}catch(e){}_fbListener=null;}
    _fbListenerAtivo=false;

    _fbListener=window._FB.db.collection('empresa').doc('clientes')
      .onSnapshot(function(snap){
        _fbListenerAtivo=true;
        if(!snap||!snap.data||!snap.data())return;
        try{
          var dadosNuvem=snap.data();
          var nuvem=JSON.parse(dadosNuvem.data||'[]');
          var deletadosNuvem=dadosNuvem.deletados||[];

          // Sincronizar deletados
          var deletadosLocal=[];
          try{deletadosLocal=JSON.parse(localStorage.getItem("copsoq_deletados")||"[]");}catch(e){}
          var deletadosFinal=deletadosLocal.slice();
          deletadosNuvem.forEach(function(id){if(deletadosFinal.indexOf(id)<0)deletadosFinal.push(id);});
          try{/*copsoq_deletados desativado — exclusão agora é direta no Firestore*/}catch(e){}

          // Filtrar deletados
          nuvem=nuvem.filter(function(cli){return deletadosFinal.indexOf(cli.id)<0;});
          var local=carregarClientes().filter(function(cli){return deletadosFinal.indexOf(cli.id)<0;});

          // Merge — versão mais recente (updatedAt) ganha
          var merged=_deduplicarClientes(_mergeClientes(nuvem,local));
          _fbCache['clientes']=merged;
          try{localStorage.setItem("copsoq_clientes",JSON.stringify(merged));}catch(e){}

          // ── Decidir o que fazer com base na aba atual ──────────────────────
          if(tabAtual==='aep' && clienteAtual){
            // Aba AEP com cliente ativo:
            // Checar se FOI O PRÓPRIO usuário que salvou (evitar loop)
            // Detectar pelo activeElement — se está digitando, não re-renderizar
            var campoAtivo=document.activeElement;
            var digitando=campoAtivo &&
              (campoAtivo.tagName==='TEXTAREA'||campoAtivo.tagName==='INPUT') &&
              campoAtivo.closest&&campoAtivo.closest('.aep-section');

            if(digitando){
              // Usuário está digitando num campo da AEP — não interromper
              // Mas atualizar outros clientes na lista em segundo plano
            } else {
              // Não está digitando — pode re-renderizar com segurança
              // Recarregar dados do cliente ativo da versão da nuvem
              var cliAtualizado=merged.find(function(x){return x.id===clienteAtual;});
              if(cliAtualizado&&cliAtualizado.aep){
                aep=Object.assign(
                  _aepLimpo(),
                  cliAtualizado.aep
                );
              }
              if(cliAtualizado&&cliAtualizado.dados) dados=cliAtualizado.dados.slice();
              render();
            }
          } else {
            // Outras abas — re-renderizar normalmente
            if(clienteAtual){
              var cliSync=merged.find(function(x){return x.id===clienteAtual;});
              if(cliSync&&cliSync.aep){
                aep=Object.assign(
                  _aepLimpo(),
                  cliSync.aep
                );
              }
              if(cliSync&&cliSync.dados) dados=cliSync.dados.slice();
            }
            render();
          }
        }catch(e){
          console.warn('[ARP] onSnapshot erro:',e);
        }
      }, function(err){
        console.warn('[ARP] onSnapshot caiu — reconectando em 5s:',err.message);
        _fbListenerAtivo=false;
        _fbListener=null;
        // Reconectar automaticamente após 5 segundos
        setTimeout(_conectar, 5000);
      });
  }

  // v4: NÃO iniciar listener em tempo real (causa resource-exhausted)
  // Polling a cada 45s — busca arp_clientes (dados reais) + re-renderiza se houver mudança
  _fbWatchdog=setInterval(function(){
    if(!window._FB||!window._FB.db||!window._FB_USER) return;
    // Buscar coleção real (arp_clientes) para pegar clientes de outras máquinas
    window._FB.db.collection('arp_clientes').get()
    .then(function(snap){
      if(!snap||snap.empty) return;
      var nuvem=[];
      snap.forEach(function(doc){nuvem.push(doc.data());});
      var deletados=[];
      try{deletados=JSON.parse(localStorage.getItem("copsoq_deletados")||"[]");}catch(e){}
      nuvem=nuvem.filter(function(c){return deletados.indexOf(c.id)<0;});
      var local=carregarClientes().filter(function(c){return deletados.indexOf(c.id)<0;});
      var merged=_deduplicarClientes(_mergeClientes(nuvem,local));
      // Detectar se houve mudança (quantidade ou IDs diferentes)
      var antes=(_fbCache['clientes']||[]).map(function(c){return c.id;}).sort().join(',');
      var depois=merged.map(function(c){return c.id;}).sort().join(',');
      var qtAntes=(_fbCache['clientes']||[]).length;
      _fbCache['clientes']=merged;
      try{localStorage.setItem('arp_meta',JSON.stringify(merged.map(_meta)));}catch(e){}
      // Re-renderizar se lista mudou (novo cliente, exclusão, etc.)
      if(antes!==depois || qtAntes!==merged.length){
        // Atualizar cliente ativo se necessário
        if(clienteAtual){
          var cliAtual=merged.find(function(x){return x.id===clienteAtual;});
          if(cliAtual&&cliAtual.aep){
            // Só atualizar se não está digitando
            var campoAtivo=document.activeElement;
            var digitando=campoAtivo&&(campoAtivo.tagName==='TEXTAREA'||campoAtivo.tagName==='INPUT');
            if(!digitando){
              aep=Object.assign(_aepLimpo(),cliAtual.aep);
              if(cliAtual.dados) dados=cliAtual.dados.slice();
            }
          }
        }
        render();
      }
    }).catch(function(e){
      // Fallback: tentar empresa/clientes (índice antigo)
      window._FB.db.collection('empresa').doc('clientes').get()
      .then(function(snap){
        if(!snap||!snap.data||!snap.data()) return;
        try{
          var nuvem=JSON.parse(snap.data().data||'[]');
          var local=carregarClientes();
          var merged=_deduplicarClientes(_mergeClientes(nuvem,local));
          var antes=(_fbCache['clientes']||[]).length;
          _fbCache['clientes']=merged;
          try{localStorage.setItem('arp_meta',JSON.stringify(merged.map(_meta)));}catch(e){}
          if(antes!==merged.length) render();
        }catch(e){}
      }).catch(function(){});
    });
  }, 45000); // 45 segundos
}

function fbLogout(){
  window._FB.signOut(window._FB.auth)
    .then(function(){
      _fbCache={};
      showMsg("Desconectado com sucesso.");
      render();
    });
}

function fbStatus(){
  if(!window._FB_READY) return '⏳ Conectando...';
  if(!window._FB_USER) return '🔴 Desconectado';
  var name=window._FB_USER.displayName||window._FB_USER.email||'';
  return '🟢 '+name.split(' ')[0];
}


// ════════════════════════════════════════════════════════════════
// FIREBASE AUTH + SYNC
// ════════════════════════════════════════════════════════════════
window._fbUser = null;
window._fbDb   = null;

function fbInit(){
  try{
    var app = firebase.app();
    window._fbDb = firebase.firestore();
    var auth = firebase.auth();

    auth.onAuthStateChanged(function(user){
      window._fbUser = user;
      if(user){
        // VERIFICAR SE EMAIL É AUTORIZADO ANTES DE LIBERAR ACESSO
        _emailAutorizado(user.email, function(autorizado){
          if(!autorizado){
            _negarAcesso(window._FB.auth);
            return;
          }
          // Email autorizado — liberar acesso
          window._FB_READY=true;
    carregarPerfisCustom();
          window._FB_UID=user.uid;
          window._FB_USER=user;
          _fbCache={};
          carregarClientesFirebase(function(l){
            render();
            if(l.length) showMsg('☁️ Olá, '+user.displayName.split(' ')[0]+'! '+l.length+' cliente(s) sincronizados.');
            _iniciarListenerTempoReal();
          });
          var _loginArea=document.getElementById('fb-login-area');
          if(_loginArea) _loginArea.innerHTML =
            '<div style="display:flex;align-items:center;gap:8px">'+
            '<img src="'+user.photoURL+'" style="width:28px;height:28px;border-radius:50%;border:2px solid white" onerror="this.style.display=\'none\'">'+
            '<span style="font-size:11px;opacity:.85">'+user.displayName+'</span>'+
            '<button onclick="fbLogout()" style="background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.4);'+
            'color:white;padding:3px 10px;border-radius:12px;font-size:11px;cursor:pointer">Sair</button></div>';
        });
      } else {
        var _loginArea2=document.getElementById('fb-login-area');
        if(_loginArea2) _loginArea2.innerHTML =
          '<button onclick="fbLogin()" style="background:white;color:#7d2020;border:none;'+
          'padding:6px 14px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:6px">'+
          '<svg width="14" height="14" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>'+
          'Entrar com Google</button>';
      }
    });
  } catch(e) {
    console.warn("Firebase não inicializado ainda:", e);
  }
}

function fbLogin(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).catch(function(e){
    showMsg("Erro no login: " + e.message, false);
  });
}

function fbLogout(){
  firebase.auth().signOut().then(function(){
    showMsg("Saiu da conta. Dados locais mantidos.");
  });
}

function fbCarregarDaNuvem(uid){
  if(!window._fbDb) return;
  window._fbDb.collection("usuarios").doc(uid).get()
    .then(function(doc){
      if(doc.exists && doc.data().clientes){
        var nuvem = doc.data().clientes;
        var local = carregarClientes();
        // Merge: preferir dado mais recente
        var merged = nuvem.slice();
        local.forEach(function(cli){
          var idx = merged.findIndex(function(x){return x.id===cli.id;});
          if(idx < 0){
            merged.push(cli);
          } else {
            var dtNuvem = new Date(merged[idx].updatedAt||0);
            var dtLocal = new Date(cli.updatedAt||0);
            if(dtLocal > dtNuvem) merged[idx] = cli;
          }
        });
        localStorage.setItem("copsoq_clientes", JSON.stringify(merged));
        showMsg("☁️ Dados sincronizados com a nuvem! "+merged.length+" cliente(s).");
        render();
      } else if(carregarClientes().length > 0){
        // Primeira vez: subir dados locais para a nuvem
        fbSincronizarTudo();
      }
    })
    .catch(function(e){console.warn("Erro ao carregar da nuvem:", e);});
}

function fbSincronizarTudo(){
  if(!window._fbUser || !window._fbDb){
    showMsg("Faça login para sincronizar com a nuvem.", false);
    return;
  }
  var clis = carregarClientes();
  window._fbDb.collection("usuarios").doc(window._fbUser.uid)
    .set({clientes: clis, updatedAt: new Date().toISOString()}, {merge:true})
    .then(function(){showMsg("☁️ "+clis.length+" cliente(s) salvos na nuvem!");})
    .catch(function(e){showMsg("Erro ao sincronizar: "+e.message, false);});
}

function render(){
  const filtrados=filtroSetor==="Todos"?dados:dados.filter(d=>d.setor===filtroSetor);
  const{mDim,mDom}=calcMedias(filtrados);
  const setores=["Todos",...[...new Set(dados.map(d=>d.setor))].sort()];
  const contDom={};DOMS.forEach(d=>contDom[d]={F:0,I:0,R:0});
  filtrados.forEach(l=>{DOMS.forEach(dom=>{const vals=Q.filter(q=>q.dom===dom).map(q=>toScore(q.n-1,l.respostas[q.n-1])).filter(v=>v!==null);if(!vals.length)return;const cl=classif(avg(vals));if(cl==="fav")contDom[dom].F++;else if(cl==="int")contDom[dom].I++;else if(cl==="ris")contDom[dom].R++;});});
  const porSetor=[...new Set(dados.map(d=>d.setor))].sort().map(s=>{const sub=dados.filter(d=>d.setor===s);const{mDom}=calcMedias(sub);return{setor:s,n:sub.length,mDom,coments:sub.map(r=>r.comentario).filter(c=>c&&c.length>3)};});
  const semDados=filtrados.length===0;

  const TABS=[
    ["dashboard","📊 Dashboard"],["dimensoes","📐 Dimensões"],["dominios","🏷️ Domínios"],
    ["setores","🏢 Por Setor"],["abertas","💬 Questões Abertas"],
    ["aep","📋 AEP"],["dados","🗄️ Dados"],
    ["clientes","👥 Clientes"],
    ["painel","📡 Painel"]
  ];
  const badge=cl=>cl?`<span class="badge ${cl}">${CL_TXT[cl]}</span>`:`<span style="color:#aaa">—</span>`;
  const barS=(dom)=>{const{F,I,R}=contDom[dom],t=(F+I+R)||1;return`<div style="margin-bottom:10px;"><div style="font-size:12px;color:#444;margin-bottom:3px;font-weight:500;">${dom}</div><div style="display:flex;height:22px;border-radius:4px;overflow:hidden;background:#e2e8f0;">${F>0?`<div style="width:${F/t*100}%;background:#22c55e;display:flex;align-items:center;justify-content:center;font-size:10px;color:white;font-weight:700;">${F}</div>`:""}${I>0?`<div style="width:${I/t*100}%;background:#f59e0b;display:flex;align-items:center;justify-content:center;font-size:10px;color:white;font-weight:700;">${I}</div>`:""}${R>0?`<div style="width:${R/t*100}%;background:#ef4444;display:flex;align-items:center;justify-content:center;font-size:10px;color:white;font-weight:700;">${R}</div>`:""}  </div></div>`;};

  let content="";

  if(tabAtual==="dashboard"&&!semDados){
    content=`<div class="grid">${DOMS.map(dom=>{const m=mDom[dom],cl=classif(m),cor=cl?CL_COR[cl]:"#94a3b8";return`<div style="background:white;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);"><div style="background:${cor};color:white;padding:10px 14px;"><div style="font-size:10px;opacity:.85;margin-bottom:2px;font-weight:600;text-transform:uppercase;">${dom}</div><div style="font-size:28px;font-weight:800;line-height:1;">${fmt(m)}<span style="font-size:11px;font-weight:400;opacity:.8;">/5,00</span></div></div><div style="padding:8px 14px;display:flex;justify-content:space-between;align-items:center;"><span style="font-size:10px;font-weight:600;color:#555;">${cl?CL_TXT[cl]:"Sem dados"}</span><span style="font-size:10px;color:#888;">✅${contDom[dom].F} 🟡${contDom[dom].I} 🔴${contDom[dom].R}</span></div></div>`;}).join("")}</div>
    <div class="card"><h3 style="margin:0 0 14px;color:#7d2020;font-size:14px;font-weight:700;">Distribuição por Classificação</h3>${DOMS.map(d=>barS(d)).join("")}<div style="display:flex;gap:14px;margin-top:12px;font-size:12px;"><span style="color:#22c55e;font-weight:600;">● Situação Favorável</span><span style="color:#f59e0b;font-weight:600;">● Situação Intermediária</span><span style="color:#ef4444;font-weight:600;">● Risco para Saúde</span></div></div>`;
  }
  if(tabAtual==="dimensoes"&&!semDados){
    content=`<div class="card"><h3 style="margin:0 0 14px;color:#7d2020;font-size:14px;font-weight:700;">Resultado por Dimensão</h3><div style="overflow-x:auto;"><table><thead><tr><th>Dimensão</th><th>Domínio</th><th style="text-align:center">Questões</th><th style="text-align:center">Média</th><th style="text-align:center">Classificação</th></tr></thead><tbody>${[...new Set(Q.map(q=>q.dim))].map((dim,i)=>{const qs=Q.filter(q=>q.dim===dim),m=mDim[dim],cl=classif(m);return`<tr style="background:${i%2===0?"#f8fafc":"white"}"><td style="font-weight:500">${dim}</td><td style="color:#666;font-size:11px">${qs[0].dom}</td><td style="text-align:center;color:#888;font-size:11px">${qs.map(q=>q.n).join(", ")}</td><td style="text-align:center;font-weight:700;color:${corNum(m)}">${fmt(m)}</td><td style="text-align:center">${badge(cl)}</td></tr>`;}).join("")}</tbody></table></div></div>`;
  }
  if(tabAtual==="dominios"&&!semDados){
    content=`<div class="card"><h3 style="margin:0 0 14px;color:#7d2020;font-size:14px;font-weight:700;">Resultado por Domínio</h3><div style="overflow-x:auto;"><table><thead><tr><th>Domínio</th><th style="text-align:center">Questões</th><th style="text-align:center">✅</th><th style="text-align:center">🟡</th><th style="text-align:center">🔴</th><th style="text-align:center">Média</th><th style="text-align:center">Classificação</th></tr></thead><tbody>${DOMS.map((dom,i)=>{const m=mDom[dom],cl=classif(m),qs=Q.filter(q=>q.dom===dom).map(q=>q.n);return`<tr style="background:${i%2===0?"#f8fafc":"white"}"><td style="font-weight:600">${dom}</td><td style="text-align:center;color:#888;font-size:11px">${qs.join(", ")}</td><td style="text-align:center;color:#16a34a;font-weight:700">${contDom[dom].F}</td><td style="text-align:center;color:#d97706;font-weight:700">${contDom[dom].I}</td><td style="text-align:center;color:#dc2626;font-weight:700">${contDom[dom].R}</td><td style="text-align:center;font-weight:800;font-size:15px;color:${corNum(m)}">${fmt(m)}</td><td style="text-align:center">${badge(cl)}</td></tr>`;}).join("")}</tbody></table></div></div>`;
  }
  if(tabAtual==="setores"){
    content=!dados.length?`<div class="card" style="text-align:center;color:#854d0e;padding:24px;">⚠️ Importe o CSV primeiro.</div>`:porSetor.map(({setor,n,mDom:md})=>`<div class="card"><h3 style="margin:0 0 12px;color:#7d2020;display:flex;justify-content:space-between;align-items:center;"><span>🏢 ${setor}</span><span style="font-size:13px;color:#888;font-weight:400">${n} respondente${n!==1?"s":""}</span></h3><table><thead><tr><th>Domínio</th><th style="text-align:center">Média</th><th style="text-align:center">Classificação</th></tr></thead><tbody>${DOMS.map((dom,i)=>{const m=md[dom],cl=classif(m);return`<tr style="background:${i%2===0?"#f8fafc":"white"}"><td style="font-weight:500">${dom}</td><td style="text-align:center;font-weight:700;color:${corNum(m)}">${fmt(m)}</td><td style="text-align:center">${badge(cl)}</td></tr>`;}).join("")}</tbody></table></div>`).join("");
  }
  if(tabAtual==="abertas"){
    if(!dados.length)content=`<div class="card" style="text-align:center;color:#854d0e;padding:24px;">⚠️ Importe o CSV primeiro.</div>`;
    else content=`<div style="background:#fdf2f2;border:1px solid #e8b4b4;border-radius:10px;padding:16px;margin-bottom:16px;font-size:13px;line-height:1.7;color:#7d2020;"><strong>🤖 Como usar a análise por IA:</strong><br>1. Clique em <strong>"📋 Copiar para Claude"</strong> → 2. Abra <a href="https://claude.ai" target="_blank" style="color:#7c3aed">claude.ai</a> → 3. Cole e envie → 4. Cole o resultado na aba <strong>📋 AEP Psicossocial</strong></div>`+porSetor.map(({setor,coments})=>{const v=coments.filter(c=>c&&c.length>3);return`<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;"><h3 style="margin:0;color:#7d2020;font-size:14px;">💬 ${setor} <span style="font-size:12px;color:#888;font-weight:400">(${v.length} comentário${v.length!==1?"s":""})</span></h3>${v.length>0?`<button class="btn-ai" onclick="modalSetor='${setor.replace(/'/g,"\\'")}';copiado=false;render()">📋 Copiar para Claude</button>`:""}</div>${v.length===0?`<p style="color:#aaa;font-style:italic;font-size:13px">Nenhum comentário neste setor.</p>`:`<div style="max-height:260px;overflow-y:auto;">${v.map((c,i)=>`<div style="padding:9px 12px;background:${i%2===0?"#f8fafc":"white"};border-radius:6px;margin-bottom:3px;font-size:13px;line-height:1.6;border-left:3px solid #c4b5fd;"><span style="color:#aaa;font-size:11px;margin-right:8px;">#${i+1}</span>${c}</div>`).join("")}</div>`}</div>`;}).join("");
  }
  if(tabAtual==="aep"){
    content=renderAEP();
  }
  if(tabAtual==="painel"){content=renderPainel();}
  if(tabAtual==="clientes"){content=renderClientes();}
  else if(tabAtual==="dados"){
    content=!dados.length?`<div class="card" style="text-align:center;color:#aaa;padding:40px;">Nenhum dado importado.</div>`:`<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;"><h3 style="margin:0;color:#7d2020;font-size:14px;font-weight:700;">🗄️ Dados (${dados.length} respondentes)</h3><button class="btn-red" onclick="dados=[];filtroSetor='Todos';render()">🗑️ Limpar</button></div><div style="overflow-x:auto;"><table style="font-size:11px"><thead><tr><th>#</th><th>Setor</th><th>Função</th><th>Sexo</th>${Array(41).fill(0).map((_,i)=>`<th style="text-align:center;min-width:26px">Q${i+1}</th>`).join("")}<th>Comentário</th></tr></thead><tbody>${dados.map((l,r)=>`<tr style="background:${r%2===0?"#f8fafc":"white"}"><td style="color:#888;font-weight:600">${r+1}</td><td style="white-space:nowrap">${l.setor}</td><td style="font-size:10px;white-space:nowrap">${l.funcao}</td><td>${l.sexo}</td>${l.respostas.map((v,ci)=>{const s=toScore(ci,v);const bg=s===null?"white":s<=2.33?"#dcfce7":s<=3.66?"#fef9c3":"#fee2e2";return`<td style="background:${bg};text-align:center">${v!==null?v:"—"}</td>`;}).join("")}<td style="max-width:130px;font-size:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${l.comentario}">${l.comentario||"—"}</td></tr>`).join("")}</tbody></table></div></div>`;
  }

  const aviso=semDados&&tabAtual!=="dados"&&tabAtual!=="aep"?`<div style="background:#fef9c3;border:1px solid #fde047;border-radius:12px;padding:24px;text-align:center;margin-bottom:16px;"><p style="color:#854d0e;font-size:15px;margin:0;">⚠️ Importe o CSV para começar — clique em <strong>📂 Importar CSV</strong></p></div>`:"";
  const promptTxt=modalSetor?gerarPrompt(modalSetor):"";
  const modal=modalSetor?`<div class="modal-bg" onclick="if(event.target===this)fecharModal()"><div class="modal"><h2>🤖 Analisar com IA — ${modalSetor}</h2><p style="color:#555;font-size:13px;margin-bottom:12px;line-height:1.6;">Copie o texto, abra o <a href="https://claude.ai" target="_blank" style="color:#7c3aed">claude.ai</a> e cole lá. Depois cole a análise na aba <strong>AEP Psicossocial</strong>.</p><textarea id="pt" rows="13" readonly style="font-size:11px;line-height:1.5">${promptTxt.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</textarea>${copiado?`<div class="copy-ok">✅ Copiado! Agora cole no Claude.</div>`:""}<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:14px;flex-wrap:wrap;"><button class="btn-ghost" onclick="fecharModal()">Fechar</button><a href="https://claude.ai" target="_blank" style="background:#7d2020;color:white;border:none;padding:9px 16px;border-radius:8px;cursor:pointer;font-weight:700;font-size:13px;text-decoration:none;">🔗 Abrir Claude</a><button class="btn-purple" onclick="copiarPrompt()">📋 Copiar texto</button></div></div></div>`:"";
  const setorOpts=setores.map(s=>`<option${s===filtroSetor?" selected":""}>${s}</option>`).join("");
  const tabBtns=TABS.map(([id,lb])=>`<button class="tab-btn${tabAtual===id?" active":""}" onclick="tabAtual='${id}';render()">${lb}</button>`).join("");

  var _cliNome='';
  (function(){var clis=carregarClientes();var cli=clis.find(function(x){return x.id===clienteAtual;});if(cli)_cliNome=" &nbsp;|&nbsp; <span style='background:rgba(255,255,255,.2);padding:1px 7px;border-radius:9px;font-size:9px'>📂 "+cli.nome+"</span>";})();
  var _msg=msgData?('<div style="margin-top:8px;padding:7px 12px;border-radius:8px;font-size:12px;background:'+(msgData.ok?'rgba(34,197,94,.3)':'rgba(239,68,68,.35)')+';">'+msgData.txt+'</div>'):'';
  var _sel=setores.length>1?('<select onchange="filtroSetor=this.value;render()">'+setorOpts+'</select>'):'';
  var _p1=dados.length?'<button class="btn-pdf" onclick="gerarRelatorio()">🖨️ Exportar PDF</button>':'';
  var _p2=dados.length?'<button class="btn-gold" onclick="gerarAEPpdf()">📋 Imprimir AEP</button>':'';
  var _p3=dados.length?'<button class="btn-red" onclick="dados=[];filtroSetor=\"Todos\";render()">🗑️ Limpar</button>':'';
  var _logo=aep.logoSrc?'<img src="'+aep.logoSrc+'" style="height:40px;object-fit:contain;border-radius:5px" alt="Logo"/>':'';
  var _html=modal;
  _html+='<div style="background:linear-gradient(135deg,#7d2020,#9e3535);color:white;padding:14px 20px">';
  _html+='<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">';
  _html+='<div style="display:flex;align-items:center;gap:12px">'+_logo;
  _html+='<div>';
  _html+='<h1 style="margin:0;font-size:18px;font-weight:700">ARP — Avaliação de Riscos Psicossociais</h1>';
  _html+='<p style="margin:2px 0 0;opacity:.75;font-size:10px">Mendes &amp; Silva · Cuidado em Psicologia Organizacional'+_cliNome+'</p>';
  _html+='<p style="margin:1px 0 0;opacity:.65;font-size:10px">'+dados.length+' respondentes | '+filtrados.length+' no filtro</p>';
  _html+='</div></div>';
  _html+='<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">';
    _html+='<button class="btn-green" onclick="document.getElementById(\'fi\').value=\'\';document.getElementById(\'fi\').click();" style="cursor:pointer;display:inline-flex;align-items:center;padding:8px 16px;border-radius:8px;font-size:13px;font-weight:700;border:none">📂 Importar CSV</button>';
  _html+=_sel+_p1+_p2+_p3;
  _html+='<button class="btn-blue" style="background:#7d2020" onclick="salvarClienteManual()">💾 Salvar</button>'+
  '<span id="autosave-status" style="font-size:10px;color:rgba(255,255,255,.7);margin-left:4px"></span>'+
  '<button id="fb-login-btn" onclick="fbLogin()" style="background:#4285F4;color:white;border:none;padding:8px 14px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer">🔑 Google</button>'+
  '<span id="fb-status" style="color:rgba(255,255,255,.8);font-size:11px;margin-left:4px"></span>'+
  '<button onclick="sincronizarFirebase()" style="background:rgba(255,255,255,.15);color:white;border:1px solid rgba(255,255,255,.3);padding:8px 12px;border-radius:8px;font-size:12px;cursor:pointer">&#x1F504; Sincronizar</button>'+
  '';
  _html+='</div></div>'+_msg+'</div>';
  _html+='<div style="display:flex;gap:1px;padding:8px 16px 0;background:white;border-bottom:2px solid #e2e8f0;overflow-x:auto">'+tabBtns+'</div>';
  _html+='<div style="padding:16px">'+aviso+content+'</div>';
  _html+='<div style="text-align:center;padding:10px 16px;color:#94a3b8;font-size:10px">';
  _html+='Mendes &amp; Silva — Cuidado em Psicologia Organizacional &nbsp;|&nbsp; ';
  _html+='COPSOQ II • Escala 1,00–5,00 • Favorável ≤2,33 | Intermediária 2,34–3,66 | Risco >3,66 &nbsp;|&nbsp; NR-01 · NR-17 · ISO 45003:2021';
  _html+='</div>';
  document.getElementById("app").innerHTML=_html;
}

// Callbacks Firebase — executados quando auth muda
window._onFirebaseReady=function(user){
  carregarClientesFirebase(function(l){
    if(l.length>0) showMsg("☁️ "+l.length+" cliente(s) carregado(s) da nuvem!");
    _atualizarStatusFB(user);
    render();
  });
};
window._onFirebaseSignOut=function(){
  _atualizarStatusFB(null);
  render();
};
function _atualizarStatusFB(user){
  setTimeout(function(){
    var btn=document.getElementById('fb-login-btn');
    var status=document.getElementById('fb-status');
    if(!btn) return;
    if(user){
      btn.textContent='🟢 Sair';
      btn.onclick=function(){fbLogout();};
      btn.style.background='rgba(255,255,255,.2)';
      btn.style.border='1px solid rgba(255,255,255,.4)';
      if(status) status.textContent=(user.displayName||'').split(' ')[0];
    } else {
      btn.textContent='🔑 Google';
      btn.onclick=function(){fbLogin();};
      btn.style.background='#4285F4';
      btn.style.border='none';
      if(status) status.textContent='';
    }
  },100);
}
window._FB.auth.getRedirectResult().catch(function(e){console.warn(e.code);});
window._FB.auth.onAuthStateChanged(function(user){
  window._FB_USER=user;
  window._FB_READY=true;
    carregarPerfisCustom();
  window._FB_UID=user?user.uid:null;
  var ov=document.getElementById("ov");
  if(user){
    if(ov) ov.style.display="none";
    _atualizarStatusFB(user);
    _fbCache={};
    carregarClientesFirebase(function(l){
      render();
      if(l.length) try{showMsg("Ola, "+user.displayName.split(" ")[0]+"! "+l.length+" cliente(s).");}catch(e){}
    });
  } else {
    if(ov) ov.style.display="flex";
    _atualizarStatusFB(null);
  }
});
// v4: Limpeza do localStorage antigo pesado ao inicializar
(function(){
  try{
    ['copsoq_clientes','copsoq_clientes_cs','aep_data','copsoq_deletados'].forEach(function(k){
      if(localStorage.getItem(k)!==null){
        localStorage.removeItem(k);
        console.log('[ARP v4] Chave antiga removida: '+k);
      }
    });
  }catch(e){}
})();

// ── v4: Autosave inteligente ──────────────────────────────────────────────────
// Salva automaticamente 30 segundos após a última alteração
// Evita resource-exhausted porque agrupa todas as mudanças numa só escrita
var _autosaveTimer=null;
var _temMudancas=false;

function _marcarMudanca(){
  _temMudancas=true;
  // Atualizar indicador visual
  var el=document.getElementById('autosave-status');
  if(el){el.textContent='⏳ Não salvo';el.style.color='#f59e0b';}
  // Cancelar timer anterior e iniciar novo (debounce 30s)
  if(_autosaveTimer) clearTimeout(_autosaveTimer);
  _autosaveTimer=setTimeout(function(){
    if(_temMudancas&&clienteAtual){
      _temMudancas=false;
      salvarClienteManual();
      var el2=document.getElementById('autosave-status');
      if(el2){el2.textContent='✅ Salvo automaticamente';el2.style.color='#22c55e';
        setTimeout(function(){if(el2)el2.textContent='';},3000);}
    }
  },30000); // 30 segundos
}

// Interceptar aepSet para marcar mudança
var _aepSetOrig=window.aepSet;
// Será sobrescrito após render — usar MutationObserver no formulário AEP
document.addEventListener('input',function(e){
  if(e.target&&(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT')){
    var dentroAep=e.target.closest&&e.target.closest('.aep-section');
    if(dentroAep||clienteAtual) _marcarMudanca();
  }
});

// Salvar ao fechar/sair da página
window.addEventListener('beforeunload',function(e){
  if(_temMudancas&&clienteAtual){
    salvarClienteManual();
  }
});

render();
fbInit();


// ── PWA MANIFEST & SERVICE WORKER ──
  // Gerar manifest PWA inline
  (function(){
    var manifest={
      name:"ARP — Avaliação de Riscos Psicossociais",
      short_name:"ARP Psicossocial",
      description:"Mendes & Silva — Cuidado em Psicologia Organizacional",
      start_url:"./index.html",
      display:"standalone",
      background_color:"#f0f4f8",
      theme_color:"#7d2020",
      icons:[
        {src:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='16' fill='%237d2020'/><text y='72' font-size='64' text-anchor='middle' x='50'>📋</text></svg>",sizes:"any",type:"image/svg+xml",purpose:"any maskable"}
      ]
    };
    var blob=new Blob([JSON.stringify(manifest)],{type:"application/manifest+json"});
    var url=URL.createObjectURL(blob);
    var link=document.createElement("link");
    link.rel="manifest";link.href=url;
    document.head.appendChild(link);
  })();
  // Registrar Service Worker para funcionar offline
  if("serviceWorker" in navigator){
    window.addEventListener("load",function(){
      var swCode=[
        "const CACHE='arp-v1';",
        "self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','/']))));",
        "self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('./')))));",
      ].join("");
      var swBlob=new Blob([swCode],{type:"text/javascript"});
      var swUrl=URL.createObjectURL(swBlob);
      navigator.serviceWorker.register(swUrl).catch(function(){});
    });
  }
