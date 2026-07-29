export const calculateSafetyScore = (area)=>{

const score =

(area.crimeScore*0.4)+
(area.lightingScore*0.3)+
(area.crowdScore*0.3);

return Math.round(score);

};