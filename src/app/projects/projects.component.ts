import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  selectedCategory = 'All';
  selectedImage: string | null = null;

  // 🔥 IMPORTANT: use correct asset path
  projects: Project[] = [
    { title: 'Driver CV', category: 'Driving', image: 'assets/projects/cv1.webp' },
    { title: 'Office Admin CV', category: 'Administration', image: 'assets/projects/cv2.webp' },
    { title: 'IT CV', category: 'IT', image: 'assets/projects/cv3.webp' },
    { title: 'Customer Service CV', category: 'Customer Service', image: 'assets/projects/cv4.webp' },
    { title: 'Engineer CV', category: 'Technical', image: 'assets/projects/cv5.webp' },
    { title: 'Engineer CV', category: 'Technical', image: 'assets/projects/cv6.webp' },
    { title: 'Engineer CV', category: 'Technical', image: 'assets/projects/cv7.webp' },
    { title: 'Engineer CV', category: 'Technical', image: 'assets/projects/cv8.webp' },
  ];

  categories: string[] = [];
  filteredProjects: Project[] = [];

  ngOnInit(): void {
    this.categories = ['All', ...new Set(this.projects.map(p => p.category))];
    this.filteredProjects = [...this.projects];
  }

  filterProjects(category: string) {
    this.selectedCategory = category;

    this.filteredProjects = category === 'All'
      ? this.projects
      : this.projects.filter(p => p.category === category);
  }

  openPreview(image: string) {
    this.selectedImage = image;
  }

  closePreview() {
    this.selectedImage = null;
  }

  // 🔥 FIX IMAGE ERROR
  handleImageError(event: any) {
    event.target.src = 'assets/projects/placeholder.png';
  }
}