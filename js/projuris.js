!function(){var a=/SELECT\s+FROM\s+'([^']*)'\.'([^']*)'/i,e=/\'sigla\'\s*=\s*'([^']*)'/i,t=/\'(numero_oab|processo|)\'\s*=\s*'([^']*)'/i;harlan.trigger("projuris::init"),harlan.interface.instance.logo.empty().append($("<div />").addClass("logo-projuris")),harlan.interface.addCSSDocument("css/projuris.min.css"),$(".scroll-down .actions").hide(),$("#input-q").attr({placeholder:"Qual processo você esta procurando?",value:harlan.serverCommunication.apiKey,disabled:"disabled"}),harlan.registerCall("loader::catchElement",function(){return[]}),$("title").text("Projuris | Processos Jurídicos Acompanhados no Sistema"),$("link[rel='shortcut icon']").attr("href","images/favicon-projuris.png"),harlan.serverCommunication.call("SELECT FROM 'PUSHJURISTEK'.'REPORT'",harlan.call("loader::ajax",{success:function(r){var s=harlan.call("section")("Processos Cadastrados","Processos jurídicos acompanhados no sistema","Créditos disponíveis e extrato"),d=$(r),n=harlan.call("generateResult");n.addItem("Usuário",d.find("BPQL > body > username").text());var o=parseInt(d.find("BPQL > body > limit").text()),i=parseInt(d.find("BPQL > body > total").text()),l=i/o*100;(1/0==l||isNaN(l))&&(l=0),n.addItem("Créditos Contratados",numeral(o).format("0,")).addClass("center"),n.addItem("Créditos Utlizados",numeral(i).format("0,")).addClass("center");var c=harlan.interface.widgets.radialProject(n.addItem(null,"").addClass("center").find(".value"),l);l>.8?c.addClass("warning animated flash"):l>.6&&c.addClass("attention animated flash");var m=d.find("BPQL > body push");m.length&&(n.addSeparator("Extrato de Processos","Processos Realizados",1===m.length?"1 processo":m.length.toString()+" processos"),m.each(function(r,s){var d=$(s),o=harlan.call("generateResult");o.addItem("Título",d.attr("label")),o.addItem("Versão",d.attr("version")||"0").addClass("center"),o.addItem("Criação",moment(d.attr("created")).format("L")).addClass("center").addClass("center"),o.addItem("Atualização",moment(d.attr("nextJob")).fromNow());var i=d.find("data").text().match(e);i&&o.addItem("Sigla",i[1]);var l=d.find("data").text().match(a);l&&o.addItem(l[1],l[2]).css("width","20%");var c=d.find("data").text().match(t);c&&o.addItem(c[1],c[2]),n.generate().append(o.generate().addClass("table"))})),s[1].append(n.generate()),$(".app-content").append(s[0])}}))}();