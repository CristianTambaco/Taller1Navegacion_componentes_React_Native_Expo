import { Stack } from 'expo-router';
import { CVProvider } from '../context/CVContext';


export default function RootLayout() {
  
  return (
    <CVProvider>
      <Stack
        screenOptions={{
          headerStyle: { 
            backgroundColor: '#dd1919ff'             
          },
          headerTintColor: '#fff',
          headerTitleStyle: { 
            fontWeight: 'bold', 
          },
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'Crear CV',
            headerShown: true,
          }}
        />
        <Stack.Screen 
          name="personal-info" 
          options={{ 
            title: 'Información Personal',
          }} 
        />
        <Stack.Screen 
          name="experience" 
          options={{ 
            title: 'Experiencia Laboral',
          }}
        />
        <Stack.Screen 
          name="education" 
          options={{ 
            title: 'Educación',
          }} 
        />
        <Stack.Screen 
          name="review" 
          options={{ 
            title: 'Vista Previa',
            presentation: 'modal',
          }} 
        />
      </Stack>
    </CVProvider>      
  );
}
