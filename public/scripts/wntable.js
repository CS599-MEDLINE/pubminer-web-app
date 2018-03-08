$(document).ready(function() {

    var dataSet = [
        {pmcid: "5818267", title: 'Assessment of the Electronic Retinal Implant Alpha AMS in Restoring Vision to Blind Patients with End-Stage Retinitis Pigmentosa'},
        {pmcid: "5809435", title: 'The Quiet Eye and Motor Expertise: Explaining the “Efficiency Paradox”'},
        {pmcid: "5818376", title: 'Athletes with channelopathy may be eligible to play'},
        {pmcid: "5808129", title: 'Sensorimotor Learning during a Marksmanship Task in Immersive Virtual Reality'},
        {pmcid: "5732148", title: 'Clinical and Phenomenological Characteristics of Patients with Task-Specific Lingual Dystonia: Possible Association with Occupation'},
        {pmcid: "5723202", title: 'Historical Contribution of Pharmaceutics to Botany and Pharmacognosy Development'},
        {pmcid: "5724252", title: 'Equilibration of energy in slow–fast systems'},
        {pmcid: "5765410", title: 'Origin and dynamics of oligodendrocytes in the developing brain: Implications for perinatal white matter injury'},
        {pmcid: "5807461", title: 'Examining the response programming function of the Quiet Eye: Do tougher shots need a quieter eye?'},
        {pmcid: "5661706", title: 'Frequency of Electrocardiographic Changes in Trained Athletes in the Republic of Macedonia'},
        {pmcid: "5696828", title: 'Embracing oligodendrocyte diversity in the context of perinatal injury'},
        {pmcid: "5624293", title: 'The World (of Warcraft) through the eyes of an expert'},
        {pmcid: "5724703", title: 'Combined fetal inflammation and postnatal hypoxia causes myelin deficits and autism‐like behavior in a rat model of diffuse white matter injury'},
        {pmcid: "5554240", title: 'Conductance fluctuations in InAs quantum wells possibly driven by Zitterbewegung'},
        {pmcid: "5496632", title: 'Andrea Ventura: Decrypting noncoding RNAs'},
        {pmcid: "5550539", title: 'Exploring the quiet eye in archery using field- and laboratory-based tasks'},
        {pmcid: "5476736", title: 'Spacing Repetitions Over Long Timescales: A Review and a Reconsolidation Explanation'},
        {pmcid: "5472770", title: 'A two-dimensional Dirac fermion microscope'}
    ];

    $("#table1").DataTable({
        columns: [
            {data: "pmcid"},
            {data: "title"}
        ],
        data: dataSet,
        dom: 't',
        language: {
            zeroRecords: "No records found"
        }
    });

    $('.datatable').dataTable();

});
