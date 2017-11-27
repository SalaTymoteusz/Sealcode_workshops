var tab = [];
for(var i=0; i<6; i++)
{
  tab[i] =[];
}
for(var i=0;i<6;i++)
{
  for(var j=0;j<6;j++)
  {
    if(i<=j)
    {
      tab[i][j]=(i+1) * (j+1);
    }
    else {
      tab[i][j]=0;
    }

  }

}
console.log(tab);