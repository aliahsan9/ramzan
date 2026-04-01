import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ats',
  imports:[CommonModule, RouterModule],
  templateUrl: './ats.component.html',
  styleUrls: ['./ats.component.scss']
})
export class AtsComponent {

  score = 98;

  features = [
    {
      icon: 'bi bi-search',
      title: 'Keyword Optimization',
      description: 'We match your resume with job-specific keywords.'
    },
    {
      icon: 'bi bi-file-earmark-text',
      title: 'ATS Formatting',
      description: 'Clean and ATS-friendly structure.'
    },
    {
      icon: 'bi bi-graph-up-arrow',
      title: 'Higher Ranking',
      description: 'Improve your ranking in ATS systems.'
    },
    {
      icon: 'bi bi-person-check',
      title: 'Recruiter Appeal',
      description: 'Make your CV appealing to humans too.'
    }
  ];

  selectFeature(feature: any) {
    // Simulate ATS score change (interactive feel)
    this.score = Math.floor(Math.random() * 30) + 70;
  }

}