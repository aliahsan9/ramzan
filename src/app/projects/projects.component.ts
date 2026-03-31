import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/* ✅ Interface */
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

  selectedCategory: string = 'All';
  selectedImage: string | null = null;

  projects: Project[] = [
    {
      title: 'Driver CV',
      category: 'Driving',
      image: 'assets/projects/cv1.jpg'
    },
    {
      title: 'Office Admin CV',
      category: 'Administration',
      image: 'assets/projects/cv2.jpg'
    },
    {
      title: 'IT Professional CV',
      category: 'IT',
      image: 'assets/projects/cv3.jpg'
    },
    {
      title: 'Customer Service CV',
      category: 'Customer Service',
      image: 'assets/projects/cv4.jpg'
    },
    {
      title: 'Engineer CV',
      category: 'Technical',
      image: 'assets/projects/cv5.jpg'
    }
  ];

  categories: string[] = [];
  filteredProjects: Project[] = [];

  ngOnInit(): void {
    this.categories = [...new Set(this.projects.map(p => p.category))];
    this.filteredProjects = [...this.projects];
  }

  filterProjects(category: string): void {
    this.selectedCategory = category;

    if (category === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(p => p.category === category);
    }
  }

  openPreview(image: string): void {
    this.selectedImage = image;
  }

  closePreview(): void {
    this.selectedImage = null;
  }

}